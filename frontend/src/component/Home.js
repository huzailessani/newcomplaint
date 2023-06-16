import React from 'react'
import './sign.css';
import { NavLink } from 'react-router-dom';
import home from '../images/home.jpg';
const Home = () => {
    return (
        <>
            <section className="register">
                <div className="mb-5 ">
                    <div className="register-content mx-auto row ">
                        <div className=" register-form col-md-6">
                            <h2 className="form-title mt-5">Welcome</h2>
                            <p className='form-para mt-3'> Online complaint system provides multichannel capabilities, advanced reporting functionalities as well as a platform for cross-function collaboration and immediate customer feedback system</p>
                            <div className='mx-auto links'>
                                <NavLink to="/register" className="register-image-link">
                                    Register Complaint
                                </NavLink>
                                <NavLink to="/review" className="register-image-link">
                                    Review Complaint
                                </NavLink>
                            </div>
                        </div>

                        <div className="register-image col-md-6 ">
                            <figure>
                                <img src={home} alt="registration pic"
                                />

                            </figure>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home