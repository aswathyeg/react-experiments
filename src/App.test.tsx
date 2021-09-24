import { render } from '@testing-library/react';
import React from 'react';
import IncrementDecrementFunction from './IncrementDecrementFunction';

describe('counter testing',()=>{
    test("render the title of the counter",()=>{
        const {getByText}=render(<IncrementDecrementFunction/>);
        const linkElement=getByText("This is counter app");
        expect(linkElement).toBeInTheDocument();
    });
});