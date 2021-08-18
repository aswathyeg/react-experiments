import React from "react";
import { MDBBtn,MDBInput } from "mdbreact";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles,Theme } from "@material-ui/core";


const useStyles=makeStyles((theme:Theme)=>
  createStyles({
container:{
display:'flex',
}

})
);


const InputPage = () => {
const classes=useStyles();

 const  handleclick=()=>{

  }
  return (<div>
    <Typography component="div" style={{ background: 'linear-gradient(to right bottom, powderblue, blue)', height: '100vh' }}  >
    <form className={classes.container} noValidate autoComplete="off">
    
   <Card>
     <CardContent>
    <MDBInput label="Username" outline icon="envelope" />
    
    
    <MDBInput label="E-mail address" outline icon="envelope" />
    <Button onClick={handleclick} >Submit</Button>
    </CardContent>
    </Card>
    </form>
    </Typography>
    </div>
   
    
  );
}

export default InputPage;