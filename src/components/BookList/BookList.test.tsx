import React, { useState } from 'react';
import { shallow } from '../../../enzyme';
import BookList from './BookList';
import { CardsWrapper, MoreDiv } from './BookList_Style'
import { renderHook, act } from '@testing-library/react-hooks'
import { MockData } from '../../mocks/mock_data';

jest.mock('react-redux', () => {
    const ActualReactRedux = require.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useSelector: jest.fn().mockImplementation(() => {
            return [MockData.books];
        }),
        useDispatch: jest.fn().mockImplementation(() => {
            return [];
        }),
    };
});

describe('BookList Component', () => {

    function getWrapper() {
        const wrapper = shallow(<BookList />)
        return wrapper;
    }

    it('Component should render correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    })

    it('Should contain two div elements', () => {
        const wrapper = getWrapper();
        expect(wrapper.find(CardsWrapper).length).toEqual(1);
    })

    it('Should contain second div with show more text', () => {
        const wrapper = getWrapper();
        expect(wrapper.find(MoreDiv).text()).toContain('Show More');
    })


    it('Should contain second div with show only 10 text when clicked on more', () => {
        const wrapper = getWrapper();
        const moreDiv = wrapper.find(MoreDiv);
        moreDiv.simulate('click');
        wrapper.update();
        expect(wrapper.find(MoreDiv).text()).toContain('10');
    })


    it('Should contain books in the state', () => {
        const { result } = renderHook(() => useState([]))
        act(() => {
            const [books, setBooks] = result.current;
            const data: any = MockData.books;
            setBooks(data);
        })
        expect(result.current[0].length).toEqual(7);
    })
})