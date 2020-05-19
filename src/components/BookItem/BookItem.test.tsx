import React from 'react';
import { shallow } from '../../../enzyme';
import { Book } from '../../store/books/type';
import BookItem from './BookItem';
import { H4Tag, StyledButton } from './BookItem_Style';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

describe('BookList Component', () => {

    const book = {
        title: "Flex on Java",
        id: "1933988797",
        pageCount: 265,
        price: 22,
        url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
        description: "Software Solutions Ltd.",
        author: "Bernerd Allmon"
    };
    function getWrapper() {
        const props: Book = book;

        const wrapper: any = shallow(<BookItem {...props} />);
        return wrapper;
    }

    it('Component should render correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    })

    it('Should display title as Flex on Java', () => {
        const wrapper = getWrapper();
        expect(wrapper.find(H4Tag).text()).toContain('Flex on Java');
    })

    it('Should call dispatch with type BUYNOW_BOOK', () => {
        const wrapper = getWrapper();
        const buyNowButton = wrapper.find(StyledButton);
        buyNowButton.at(1).simulate('click');
        expect(mockDispatch).toHaveBeenCalledTimes(1);
    })
});