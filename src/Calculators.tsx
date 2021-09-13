
import React from 'react';
function BoilingVerdict(props) {
    if (props.celsious >= 100) { return (<p>The water would boil.</p>) }
    else {
        return (<p>The water would not boil.</p>)
    }
}
interface Props {

}
interface State {
    temperature: any
}
export default class Caluculators extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e: any) {
        this.setState({ temperature: e.target.value })

    }
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Enter Temperature in celsious</legend>
                    <input value={this.state.temperature} onChange={this.handleChange}></input>
                    <BoilingVerdict celsious={parseFloat(this.state.temperature)} />
                </fieldset>

            </div>
        )
    }

}