import React from "react";
import SignIn from "./SignIn/SignIn";
import {Route, Redirect, Routes} from 'react-router-dom';
import SignUp from "./SignUp/SignUp";

const Auth = (props) => {
    return (
        <Routes>
            <Route path={props.match.path + '/signup'} exact element={<SignUp />}/>
            <Route path={props.match.path + '/signin'} exact element={<SignIn />}/>
            <Redirect to={props.match.path + '/signin'} />
        </Routes>
    )
}

export default Auth;