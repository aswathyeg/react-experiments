import { render } from '@testing-library/react';
import React from 'react';
import IncrementDecrementFunction from './IncrementDecrementFunction';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('counter testing',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<IncrementDecrementFunction/>); 
    })
      
    test("render the title of the counter",()=>{
       
        expect(wrapper.find("h1").text()).toContain("This is counter app");
    });
    
    test("render a button with text of `Increment~",()=>{
        
        expect (wrapper.find("#increment-btn").text()).toBe('Increment');
    });

    test("render the initial value of state in a div",()=>{
        expect(wrapper.find("#counter-value").text()).toBe("0");

    });
    test("render the click event of increment button and increment counter value",()=>{
        wrapper.find("#increment-btn").simulate("click");
        expect(wrapper.find("#counter-value").text()).toBe("1");

    });
    //testing decrement
    test("render a button with a text of `Decrement`",()=>{
        expect(wrapper.find("#decrement-btn").text()).toBe('Decrement');
    });
    test("render the click event for decrement button and decrement counter value",()=>{
        wrapper.find("#increment-btn").simulate("click")
        expect(wrapper.find("#counter-value").text()).toBe("1")
        wrapper.find("#decrement-btn").simulate("click");
        expect(wrapper.find("#counter-value").text()).toBe("0");
    });
    // test("render the click event for decrement button and stop decrement when count is zero",()=>{
    //     wrapper.find("#increment-btn").simulate("click")
    //     expect(wrapper.find("#counter-value").text()).toBe("1")
    //     wrapper.find("#decrement-btn").simulate("click");
    //     expect(wrapper.find("#counter-value").text()).toBe("0");
    // })
});