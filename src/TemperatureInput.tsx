import React from 'react';
const scaleNames={
    c:'Celsious',
    f:'Fahrenheit'
    
}

// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
  
//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }
  
//   function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }
//   function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//       return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
//   }
    
interface Props{
    scale:any,
    onTemperatureChange:any,
    temperature:any

}
interface State{
    temperature:any ,
    scale:any,
    onTemperatureChange:any

}
export default class TemperatureInput extends React.Component<Props,State>{
    constructor(props){
        super(props);
        this.state={
            temperature:'',
            scale:'',
            onTemperatureChange:''

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        //this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
      }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <div>
                <fieldset>
                    <legend>Enter Temperature in {scaleNames[scale]}:</legend>
                    <input value={this.props.temperature} onChange={this.handleChange}></input>
                   
                </fieldset>
            </div>
        )
    }
    
}