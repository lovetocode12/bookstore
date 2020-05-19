import useBuyBook from '../useBuyBook'
import { renderHook } from '@testing-library/react-hooks';
import * as ReactReduxHooks from 'react-redux'
import { act } from 'react-dom/test-utils';
import { MockData } from '../../mocks/mock_data';

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push:()=> jest.fn(),
    }),
}));

describe('useBuyBook Hook', () => {

    const spyDispatch = jest
        .spyOn(ReactReduxHooks, "useDispatch")
        .mockImplementation(() => jest.fn());

    it('Should return two functions two methods BuyNow, AddToCart', () => {
        const { result: { current } } = renderHook(() => useBuyBook());
        expect(current.length).toEqual(2);
    })

    it('Should call  dispatch with buyNowBook action', () => {
        const { result: { current } } = renderHook(() => useBuyBook());
        act(() => {
            current[0](MockData.Order);
        })
        expect(spyDispatch).toHaveBeenCalled();
    })

    it('Should call  dispatch with addToCartBook action', () => {
        const { result: { current } } = renderHook(() => useBuyBook());
        act(() => {
            current[1](MockData.Order);
        })
        expect(spyDispatch).toHaveBeenCalled();
    })
})