import { Container, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography';
import React,{Component} from 'react'
class Login extends React.Component{
    constructor(props:any){
        super(props);
        this.state={

        }
    }
    handleChange(){}
    render(){
        return(
            <div>
 <Container maxWidth="sm">
 
 <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}/>
 <TextField id="standard-basic" label="Username" /><br />
 <TextField
   id="filled-password-input"
   label="Password"
   type="password"
   autoComplete="current-password"
   variant="filled"
 /><br />
 <Button color="primary">Login</Button>

            
        </Container>  
            </div>
            
            
        )
    }

}
export default Login;