import React from 'react';
import { shallow } from '../../../enzyme';
import Cart from './Cart';
import * as ReactReduxHooks from 'react-redux';

const spyDispatch = jest
    .spyOn(ReactReduxHooks, "useDispatch")
    .mockImplementation(() => jest.fn());
jest
    .spyOn(ReactReduxHooks, "useSelector")
    .mockImplementation(() => jest.fn());

describe('CART Component', () => {

    function getWrapper() {
        const wrapper: any = shallow(<Cart />);
        return wrapper;
    }

    it('Component should render correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    })

    it('Component should change all input values correctly', () => {
        const wrapper = getWrapper();
        const inputAddress1 = wrapper.find('#address1')
        const inputAddress2 = wrapper.find('#address2')
        const inputPhone = wrapper.find('#phone')
        const inputEmail = wrapper.find('#email')
        const inputCity = wrapper.find('#city')
        inputAddress1.value = 'line 1';
        inputAddress2.value = 'line 2';
        inputPhone.value = '12345';
        inputEmail.value = 'test@c.com';
        inputCity.value = 'hyd';
        wrapper.update();
        expect(inputAddress1.value).toEqual('line 1');
        expect(inputAddress2.value).toEqual('line 2');
        expect(inputPhone.value).toEqual('12345');
        expect(inputEmail.value).toEqual('test@c.com');
        expect(inputCity.value).toEqual('hyd');
        const submitButton = wrapper.find('form');
        submitButton.simulate('submit');
        expect(spyDispatch).toHaveBeenCalled();
    })

});