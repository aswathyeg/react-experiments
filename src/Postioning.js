import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
export default function Positioning() {
    return (

        <Grid container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
            spacing={5}
        >
            <Grid item>
                <Typography varient="h5" color="primary" >
                    Login Here
                </Typography>
            </Grid>

            <Grid item style={{ border: "0.2px solid gray" }} >
                <Grid container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    

                >
                    <TextField 
                    variant="outlined" 
                    label="Email" 
                    fullWidth 
                    style={{marginBottom:"2em"}}
                    />


                    <TextField 
                    variant="outlined" 
                    label="Password" 
                    fullWidth 
                    style={{marginBottom:"2em"}}
                    />


                    <Button size="large" variant="contained" color="primary">Login</Button>
                </Grid>
            </Grid>

        </Grid>

    )
}