import React from 'react'
import loginpic from "../images/login.jpg"
// import { NavLink } from "react-router-dom"
import "./Signin.css"
import { NavLink } from 'react-router-dom';

const Signin = () => {
    return (
        <>
            <section className='signin'>
                <div className="mt-5">
                    <div className="signin-content">
                        <div className="signin-image">
                            <div className="signin-image">
                                <figure>
                                    <img src={loginpic} alt="login pic" />
                                </figure>
                                <NavLink to="/signup" className="signup-image-link">create an Account</NavLink>
                            </div>
                        </div>
                        <div className="signin-form">
                            <h2 className='form-title'>Sign In</h2>
                            <form className='register-form' id='register-form'>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="text" name='email' id='email' autoComplete='off' placeholder='Your Email' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password' />
                                </div>

                                <div className='form-group form-button'>
                                    <input type="submit" name='signin' className='form-submit' value="Log In" />

                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin