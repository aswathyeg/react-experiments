import { render } from '@testing-library/react';
import React from 'react';
import IncrementDecrementFunction from './IncrementDecrementFunction';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('counter testing',()=>{
    test("render the title of the counter",()=>{
        const {getByText}=render(<IncrementDecrementFunction/>);
        const linkElement=getByText("This is counter app");
        expect(linkElement).toBeInTheDocument();
    });
});