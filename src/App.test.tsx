import React from 'react';
import App from './App';
import { shallow } from '../enzyme';

describe('App Component', () => {

  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have 4 routes', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('Route').length).toEqual(4);
  });

})

