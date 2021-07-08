import React from 'react';

interface Props {

}
interface State {
    color: string

}

class ColorClass extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            color: 'red'
        }

        this.changeColor = this.changeColor.bind(this);
        
    }

    changeColor() {
        this.setState({
            color:'green'
        })

    }


    render() {
        return (
            <div>
                <button onClick={ this.changeColor}>Change Color</button>
               <p>{this.state.color}</p>
            </div>
        )
    }
}
export default ColorClass;