import React from 'react';
export default class ChildColor extends React.Component {

    handleClick = (e) => {
        this.props.onColorChange(e.target.value);
    }
    render() {
        return (
            <div className="child-component">
                <h4>Child Component</h4>
                <div className="child-component button">
                    <button value="Red" onClick={this.handleClick}>Red</button>
                    <button value="Blue" onClick={this.handleClick}>Blue</button>
                    <button value="White" onClick={this.handleClick}>White</button>
                </div>
            </div>
        )
    }

}
