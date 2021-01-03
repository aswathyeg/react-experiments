import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter as Router, Link} from 'react-router-dom';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 500,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: 'primary',
            color: 'primary'
        },
        card: {
            marginTop: theme.spacing(10)
        }
    })
);

type State = {
    username: string
    password: string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean,

    //shouldRedirect:boolean
};

const initialState: State = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false,

    // shouldRedirect:false
};

type Action = { type: 'setUsername', payload: string }
    | { type: 'setPassword', payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.payload
            };
        case 'setPassword':
            return {
                ...state,
                password: action.payload
            };
        case 'setIsButtonDisabled':
            return {
                ...state,
                isButtonDisabled: action.payload
            };
        case 'loginSuccess':
            return {

                ...state,
                helperText: action.payload,
                isError: false

                //shouldRedirect: false
                //  <BrowserRouter>

                //  <Route path="/home" component={Home} /><Route />

                //  </BrowserRouter> 
            };
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            };
    }
}
const handleLogin = () => {}

const LoginForm =()=> {
    const classes = useStyles();

    const handleLogin = () => {
        if (state.username === 'aeg@email.com' && state.password === '1234') {
          console.log("handlelog 2");
        } else {
          dispatch({
            type: 'loginFailed',
            payload: 'Incorrect username or password'
          });
        }
      };
    
    const [state, dispatch] = useReducer(reducer, initialState);  
        const handleKeyPress = (event: React.KeyboardEvent) => {
            if (event.keyCode === 13 || event.which === 13) {
                state.isButtonDisabled || handleLogin();
            }
        };

        const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
            (event) => {
                dispatch({
                    type: 'setUsername',
                    payload: event.target.value
                });
            };

        const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
            (event) => {
                dispatch({
                    type: 'setPassword',
                    payload: event.target.value
                });
            }

        return (
            <Container>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh' }}  >
                    <form className={classes.container} noValidate autoComplete="off">
                        <Card className={classes.card}>
                            <CardHeader className={classes.header} title="Login" />
                            <CardContent>
                                <div>
                                    <TextField
                                        error={state.isError}
                                        fullWidth
                                        id="username"
                                        type="email"
                                        //label="Username"
                                        placeholder="Username"
                                        margin="normal"
                                        onChange={handleUsernameChange}
                                        onKeyPress={handleKeyPress}
                                    />
                                    <TextField
                                        error={state.isError}
                                        fullWidth
                                        id="password"
                                        type="password"
                                        //label="Password"
                                        placeholder="Password"
                                        margin="normal"
                                        helperText={state.helperText}
                                        onChange={handlePasswordChange}
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button
                                    component={Link}
                                    to="/home"
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    className={classes.loginBtn}
                                    onClick={handleLogin}
                                >
                                    Login
          </Button>
                            </CardActions>
                        </Card>

                    </form>
                </Typography>
            </Container>
        )
    }

export default LoginForm;