import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {Profile} from "./pages/Profile";
import {PasswordRecovery} from "./pages/PasswordRecovery";
import {ForgotPass} from "./pages/ForgotPass";
import {ComponentsPage} from "./pages/ComponentsPage";
import {Error404Page} from "./pages/Error404Page";

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    RECOVERY: '/recovery',
    FORGOT_PASS: '/forgot',
    COMPONENTS: '/components',
}

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>

            <Route path={PATH.LOGIN} element={<LoginPage/>}/>
            <Route path={PATH.REGISTER} element={<RegisterPage/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.RECOVERY} element={<PasswordRecovery/>}/>
            <Route path={PATH.FORGOT_PASS} element={<ForgotPass/>}/>
            <Route path={PATH.COMPONENTS} element={<ComponentsPage/>}/>

            <Route path={'*'} element={<Error404Page/>}/>
        </Routes>
    )
}