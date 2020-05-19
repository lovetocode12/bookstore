import React from 'react';
import { shallow } from '../../../enzyme';
import BookDetails from './BookDetails';
import { MockData } from '../../mocks/mock_data';
import { H2Tag, StyledButton } from './BookDetails_Style';

jest.mock('react-redux', () => {
    const ActualReactRedux = require.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useSelector: jest.fn().mockImplementation(() => {
            return MockData.books;
        }),
        useDispatch:()=> jest.fn()
    };
});

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        book_id: '1933988673'
    })
}));

const mockBuyNow = jest.fn();
jest.mock('../../common/useBuyBook', () => ({
    __esModule: true,
    default: () => ([mockBuyNow, jest.fn()])
}));


describe('BookDetails Component', () => {

    function getWrapper() {
        const wrapper: any = shallow(<BookDetails />);
        return wrapper;
    }

    it('Component should render correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    })

    it('Should display title as Flex on Java', () => {
        const wrapper = getWrapper();
        expect(wrapper.find(H2Tag).text()).toContain('Unlocking Android');
    })

    it('Should call dispatch with type BUYNOW_BOOK', () => {
        const wrapper = getWrapper();
        const buyNowButton = wrapper.find(StyledButton);
        buyNowButton.at(1).simulate('click');
        expect(mockBuyNow).toHaveBeenCalledTimes(1);
    })
});