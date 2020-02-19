import React from 'react';
import {AuthUser} from '../context/index';
import Sidenav from './sidenav';
import { Grid } from '@material-ui/core';
class Profile extends React.Component {
//    static authUser = AuthUser;
    componentDidMount(){
        let value = this.context;
        value.user.name = 'manikandna';
        value.user.username = "moneykandan995";
        value.setAuth({
            ...value.user
        })
    }
    render(){
        // let value = this.context;
        // console.log(value);
        return(
           <Grid container>
               <Grid item xs={3} sm={3} md={3}>
                  <Sidenav/>
               </Grid>
               <Grid item xs={9} sm={9} md={9}>
                  profile component
               </Grid>
           </Grid> 
        )
    }
}
Profile.contextType  = AuthUser;
export default Profile;