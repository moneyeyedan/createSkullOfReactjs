import React from 'react';
import { AuthUser } from '../context/index';

 function AuthProvider(props){
     const { user,setAuth } = React.useContext(AuthUser);
     return (
         <AuthUser.Provider value={{user,setAuth}}>
             {props.children}
         </AuthUser.Provider>
     )
 }

 export default AuthProvider;