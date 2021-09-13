import React, { Component } from 'react'
import { render } from 'react-dom';
import TemperatureInput from './TemperatureInput'


interface IProps {

}
interface IState {
    textcontent?: any
}
class Calculator extends React.Component <IProps,IState>{
    constructor(props){
        super(props);
        this.state={
            // temperature:'',
            // scale:''

        }}
    render() {
      return (
        <div>
          <TemperatureInput scale="c" />
          <TemperatureInput scale="f" />
        </div>
      );
    }
}
export default Calculator;