import { render } from '@testing-library/react';
import React from 'react';
import IncrementDecrementFunction from './IncrementDecrementFunction';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('counter testing',()=>{
      
    test("render the title of the counter",()=>{
        const wrapper=shallow(<IncrementDecrementFunction/>);
        expect(wrapper.find("h1").text()).toContain("This is counter app");
    });
    
    test("render a buttun with text of `Increment~",()=>{
        const wrapper=shallow(<IncrementDecrementFunction/>);
        expect (wrapper.find("#increment-btn").text()).toBe('Increment');
    });
    
});