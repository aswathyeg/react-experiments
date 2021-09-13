import React from 'react';
const scaleNames={
    c:'Celsious',
    f:'Fahrenheit'
    
}
interface Props{
    scale:any
}
interface State{
    temperature:any ,
    scale:any
}
export default class TemperatureInput extends React.Component<Props,State>{
    constructor(props){
        super(props);
        this.state={
            temperature:'',
            scale:''

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({temperature: e.target.value});
      }
    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <div>
                <fieldset>
                    <legend>Enter Temperature in {scaleNames[scale]}:</legend>
                    <input value={this.state.temperature} onChange={this.handleChange}></input>
                   
                </fieldset>
            </div>
        )
    }
    
}