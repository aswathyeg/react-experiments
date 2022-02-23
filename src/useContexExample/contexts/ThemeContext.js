import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {

    render() {
        this.state = {
            isLightTheme: true,
            light: {syntax: '#555', ui: '#ddd', bg: '#eee'  },
            dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
        }
        return (
            <div>
                <ThemeContext.Provider value={{ ...this.state }}>
                    {this.props.children}

                </ThemeContext.Provider>

            </div>
        )
    }
}
export default ThemeContextProvider;
