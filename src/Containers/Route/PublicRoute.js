import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utils/Index';



function PublicRoute({component : Component , restricted=false , ...rest}) {
    console.log(isLogin(), restricted);
    return (
        <Route{...rest} render={props=>(
            isLogin () && restricted ?
            <Redirect to={"/"} />
            :
            <Component {...props} />
        )}

        />
    );
}

export default PublicRoute;