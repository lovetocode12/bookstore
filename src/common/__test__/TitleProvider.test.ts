import { renderHook, act } from '@testing-library/react-hooks';
import { useContext, useReducer } from 'react';
import TitleProvider, { titleReducer } from '../TitleProvider';
import { TitleContext } from '../TitleContext';


describe('TitleProvider Hook', () => {

    it('Should return title  empty', () => {
        const { result: { current } } = renderHook(() => useContext(TitleContext), { wrapper: TitleProvider });
        expect(current.title).toEqual("");
    })

    it('Should return title Orders', () => {
        const { result } = renderHook(() => useContext(TitleContext), { wrapper: TitleProvider });
        const { dispatchTitle } = result.current;
        act(() => {
            dispatchTitle({ type: 'SET_TITLE', payload: 'Orders' });
        })
        expect(result.current.title).toEqual("Orders");
    })

    it('Should titleReducer return title when SET_TITLE action is dispatched ', () => {
        const { result } = renderHook(() => useReducer(titleReducer, ''));
        const [, dispatch] = result.current;
        act(() => {
            dispatch({ type: 'SET_TITLE', payload: 'Orders' });
        })
        expect(result.current[0]).toEqual("Orders");
    })
})