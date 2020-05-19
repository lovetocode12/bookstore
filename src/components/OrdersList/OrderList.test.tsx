import React from 'react';
import { shallow } from '../../../enzyme';
import { MockData } from '../../mocks/mock_data';
import OrdersList from './OrdersList';

jest.mock('react-redux', () => {
    const ActualReactRedux = require.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useSelector: jest.fn().mockImplementation(() => {
            return MockData.books;
        }),
        useDispatch: jest.fn().mockImplementation(() => {
            return [];
        }),
    };
});

describe('Orders List Component', () => {

    function getWrapper() {
        const wrapper: any = shallow(<OrdersList />);
        return wrapper;
    }

    it('Component should render correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    })
});