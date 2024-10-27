import './login-form.css'
import '../colors.css'
import React from "react";
import Heading from './heading';
function LoginForm() {
    return (
        <main className="form-container" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/login-page.jpg'})` }}>
            <form action="#" className='login-form'>
                <Heading></Heading>
                <div className='input-container'>
                    <label for="login-username">Username</label>
                    <input name="username" id="login-username" type="text" placeholder="Enter your username here">
                    </input>
                </div>
                <div className='input-container'>
                    <label for="login-password">Password</label>
                    <input name="password" id="login-password" type="password" placeholder="Enter your password here"></input>
                </div>
                <div className='forgot-link-container'>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">LOGIN</button>
            </form>
        </main>
    )
}
export default LoginForm