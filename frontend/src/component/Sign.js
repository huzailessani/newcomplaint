
// import React, { useState } from 'react'
// import signpic from "../images/signup.jpg"
// import "./sign.css"
// // import { Navlink, useHistory } from "react-router-dom"

// const Sign = () => {
//     // const history = usehistory()
//     const [user, setUser] = useState({ name: "", email: "", password: "", cpassword: "" })
//     let name, value;
//     const handleInputs = (e) => {
//         console.log(e)
//         name = e.target.name;
//         value = e.target.value;

//         setUser({ ...user, [name]: value })
//     }
//     const PostData = async (e) => {
//         e.preventDefault()
//         const { name, email, password, cpassword } = user;
//         const res = await fetch("/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body:
//                 JSON.stringify({ name, email, password, cpassword })

//         })
//         const data = await res.json()
//         if (data.status === 422 || !data) {
//             window.alert("invalid registration")
//             console.log("invalid registration")
//         } else {
//             window.alert("Registration Successful")
//             console.log("Registration Successful")
//             history.push("/signin")
//         }
//     }

//     return (
//         <>
//             <section className='signup'>
//                 <div className="mt-5">
//                     <div className="signup-content">
//                         <div className="signup-form">
//                             <h2 className='form-title'>Sign Up</h2>
//                             <form method='POST' className='register-form' id='register-form'>
//                                 <div className="form-group">
//                                     <label htmlFor="name">
//                                         <i class="zmdi zmdi-account"></i>
//                                     </label>
//                                     <input type="text" name='name' id='name'
//                                         value={user.name}
//                                         onChange={handleInputs}
//                                         placeholder='Your Name' />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="email">
//                                         <i class="zmdi zmdi-email"></i>
//                                     </label>
//                                     <input type="text" name='email' id='email'
//                                         value={user.email}
//                                         onChange={handleInputs}

//                                         placeholder='Your Email' />
//                                 </div>
//                                 {/* <div className="form-group">
//                                     <label htmlFor="phone">
//                                         <i class="zmdi zmdi-phone"></i>
//                                     </label>
//                                     <input type="text" name='phone' id='phone' 


//                                     placeholder='Your Phone' />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="work">
//                                         <i class="zmdi zmdi-slideshow"></i>
//                                     </label>
//                                     <input type="text" name='work' id='work' 


//                                     placeholder='Your Work' />
//                                 </div> */}
//                                 <div className="form-group">
//                                     <label htmlFor="password">
//                                         <i class="zmdi zmdi-lock"></i>
//                                     </label>
//                                     <input type="password" name='password' id='password'
//                                         value={user.password}
//                                         onChange={handleInputs}

//                                         placeholder='Your Password' />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="cpassword">
//                                         <i class="zmdi zmdi-lock"></i>
//                                     </label>
//                                     <input type="password" name='cpassword' id='cpassword'
//                                         value={user.cpassword}
//                                         onChange={handleInputs}

//                                         placeholder='Confirm Your Password' />
//                                 </div>
//                                 <div className='form-group form-button'>
//                                     <input type="submit" name='signup' className='form-submit' value="register" onClick={PostData} />

//                                 </div>

//                             </form>
//                         </div>
//                         <div className="signup-image">
//                             <div className="signup-image">
//                                 <figure>
//                                     <img src={signpic} alt="registration pic" />
//                                 </figure>
//                                 <a to="/signin" className="signup-image-link">I am already registered</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Sign

// import React, { useState } from 'react';
// import signpic from '../images/signup.jpg';
// import './sign.css';
// import { NavLink, useHistory } from 'react-router-dom';

// const Sign = () => {
//     const history = useHistory();
//     const [user, setUser] = useState({ name: '', email: '', password: '', cpassword: '' });

//     const handleInputs = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const PostData = async (e) => {
//         e.preventDefault();
//         const { name, email, password, cpassword } = user;
//         const res = await fetch('/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name, email, password, cpassword })
//         });
//         const data = await res.json();

//         if (data.status === 422 || !data) {
//             window.alert('Invalid registration');
//             console.log('Invalid registration');
//         } else {
//             window.alert('Registration Successful');
//             console.log('Registration Successful');
//             history.push('/signin');
//         }
//     };

//     return (
//         <>
//             <section className="signup">
//                 <div className="mt-5">
//                     <div className="signup-content">
//                         <div className="signup-form">
//                             <h2 className="form-title">Sign Up</h2>
//                             <form method="POST" className="register-form" id="register-form">
//                                 <div className="form-group">
//                                     <label htmlFor="name">
//                                         <i className="zmdi zmdi-account"></i>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         id="name"
//                                         value={user.name}
//                                         onChange={handleInputs}
//                                         placeholder="Your Name"
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="email">
//                                         <i className="zmdi zmdi-email"></i>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="email"
//                                         id="email"
//                                         value={user.email}
//                                         onChange={handleInputs}
//                                         placeholder="Your Email"
//                                     />
//                                 </div>
//                                 {/* Rest of your form code */}
//                                 <div className="form-group form-button">
//                                     <input type="submit" name="signup" className="form-submit" value="register" onClick={PostData} />
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="signup-image">
//                             <div className="signup-image">
//                                 <figure>
//                                     <img src={signpic} alt="registration pic" />
//                                 </figure>
//                                 <NavLink to="/signin" className="signup-image-link">
//                                     I am already registered
//                                 </NavLink>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Sign;

import React, { useState } from 'react';
import signpic from '../images/signup.jpg';
import './sign.css';
import { NavLink } from 'react-router-dom';

const Sign = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '', cpassword: '' });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user;

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, cpassword }),
            });

            const data = await response.json();

            if (response.status === 201) {
                window.alert('Registration Successful');
                console.log('Registration Successful');
                window.location.href = '/signin'; // Replace with the desired URL
            } else {
                window.alert(data.error);
                console.log(data.error);
            }
        } catch (error) {
            console.log(error);
            window.alert('Failed to register');
        }
    };


    return (
        <>
            <section className="signup">
                <div className="mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account"></i>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" name='password' id='password'
                                        value={user.password}
                                        onChange={handleInputs}

                                        placeholder='Your Password' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" name='cpassword' id='cpassword'
                                        value={user.cpassword}
                                        onChange={handleInputs}

                                        placeholder='Confirm Your Password' />
                                </div>
                                <div className='form-group form-button'>
                                    <input type="submit" name='signup' className='form-submit' value="register" onClick={PostData} />

                                </div>


                            </form>
                        </div>
                        <div className="signup-image">
                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} alt="registration pic" />
                                </figure>
                                <NavLink to="/signin" className="signup-image-link">
                                    I am already registered
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sign;
