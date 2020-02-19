import React from 'react';
import {AuthUser} from '../context/index';
import Sidenav from './sidenav';
import { Grid } from '@material-ui/core'
class Login extends React.Component {
    render(){
        return(
            <Grid container>
            {/* <Grid item xs={3} sm={3} md={3}>
               <Sidenav/>
            </Grid>
            <Grid item xs={9} sm={9} md={9}>
               LoginComponent
            </Grid> */}
               LoginComponent

        </Grid>
        )
    }
}
Login.contextType = AuthUser;
export default Login;