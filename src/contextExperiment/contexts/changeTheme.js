import React, { createContext } from 'react';
export const changeContext = createContext();
export default class ChangeTheme extends React.Component {

    state = {
        isLight: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }
    isToggle = () => {
        this.setState({ isLight: !this.state.isLight })

    }
    render() {
        return (
            <changeContext.Provider value={{ ...this.state, isToggle: this.isToggle }}>

                {this.props.children}
            </changeContext.Provider>
        )
    }
}