
// import React, { useState } from 'react';
// import signpic from '../images/register.jpg';
// import './sign.css';
// import { NavLink } from 'react-router-dom';

// const Register = () => {
//     const [complaint, setComplaint] = useState({ name: '', email: '', city: '', complain: '' });

//     const handleInputs = (e) => {
//         const { name, value } = e.target;
//         setComplaint({ ...complaint, [name]: value });
//     };

//     const PostData = async (e) => {
//         e.preventDefault();
//         const { name, email, city, complain } = complaint;

//         try {
//             const response = await fetch('http://localhost:5000/c/complain', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, email, city, complain }),
//             });

//             const data = await response.json();

//             if (response.status === 201) {
//                 window.alert('Registration Successful');
//                 console.log('Registration Successful');
//                 window.location.href = '/review'; // Replace with the desired URL
//             } else {
//                 window.alert(data.error);
//                 console.log(data.error);
//             }
//         } catch (error) {
//             console.log(error);
//             window.alert('Failed to register');
//         }
//     };


//     return (
//         <>
//             <section className="signup">
//                 <div className="mt-5">
//                     <div className="signup-content">
//                         <div className="signup-form">
//                             <h2 className="form-title">Register Complaint</h2>
//                             <form method="POST" className="register-form" id="register-form">
//                                 <div className="form-group">
//                                     <label htmlFor="name">
//                                         <i className="zmdi zmdi-account"></i>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         id="name"
//                                         value={complaint.name}
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
//                                         value={complaint.email}
//                                         onChange={handleInputs}
//                                         placeholder="Your Email"
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="city">
//                                         <i className="zmdi zmdi-city"></i>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="city"
//                                         id="city"
//                                         value={complaint.city}
//                                         onChange={handleInputs}
//                                         placeholder="Your City"
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="compaint-summary">
//                                         <i class="zmdi zmdi-pocket"></i>
//                                     </label>
//                                     <textarea className='w-100 h-50'
//                                         type="text"
//                                         name="complain"
//                                         id="complain"
//                                         value={complaint.complain}
//                                         onChange={handleInputs}
//                                         placeholder="Your complaint-summary"
//                                     />
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

// export default Register;

// import React, { useState } from 'react';
// import signpic from '../images/signup.jpg';
// import './sign.css';
// import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

// const Register = () => {
//     const [complaint, setComplaint] = useState({
//         name: '',
//         email: '',
//         city: '',
//         complain: '',
//     });

//     const handleInputs = (e) => {
//         const { name, value } = e.target;
//         setComplaint({ ...complaint, [name]: value });
//     };

//     const PostData = async (e) => {
//         e.preventDefault();
//         const { name, email, city, complain } = complaint;

//         try {
//             const response = await fetch('http://localhost:5000/c/complaint', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, email, city, complain }),
//             });

//             const data = await response.json();

//             if (response.status === 201) {
//                 window.alert('Registration Successful');
//                 console.log('Registration Successful');
//                 window.location.href = '/review'; // Replace with the desired URL
//             } else {
//                 window.alert(data.error);
//                 console.log(data.error);
//             }
//         } catch (error) {
//             console.log(error);
//             window.alert('Failed to register');
//         }
//     };

//     return (
//         <>
//             <section className="signup">
//                 <div className="mt-5">
//                     <div className="signup-content">
//                         <div className="signup-form">
//                             <h2 className="form-title">Register Complaint</h2>
//                             <form method="POST" className="register-form" id="register-form">
//                                 <div className="form-group">
//                                     <label htmlFor="name">
//                                         <i className="zmdi zmdi-account"></i>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         id="name"
//                                         value={complaint.name}
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
//                                         value={complaint.email}
//                                         onChange={handleInputs}
//                                         placeholder="Your Email"
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="city">
//                                         <i className="zmdi zmdi-city"></i>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="city"
//                                         id="city"
//                                         value={complaint.city}
//                                         onChange={handleInputs}
//                                         placeholder="Your City"
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="complain-summary">
//                                         <i className="zmdi zmdi-pocket"></i>
//                                     </label>
//                                     <textarea
//                                         className="w-100 h-50"
//                                         type="text"
//                                         name="complain"
//                                         id="complain"
//                                         value={complaint.complain}
//                                         onChange={handleInputs}
//                                         placeholder="Your complaint-summary"
//                                     />
//                                 </div>

//                                 <div className="form-group form-button">
//                                     <input
//                                         type="submit"
//                                         name="signup"
//                                         className="form-submit"
//                                         value="Register"
//                                         onClick={PostData}
//                                     />
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="signup-image">
//                             <figure>
//                                 <img src={signpic} alt="registration pic"
//                                 />
//                                 <NavLink to="/signin" className="signup-image-link">
//                                     I am already registered
//                                 </NavLink>
//                             </figure>
//                         </div>
//                     </div>
//                 </div>

//             </section>
//         </>
//     )
// };

// export default Register;



import React, { useState } from 'react';
import signpic from '../images/signup.jpg';
import register from '../images/register-complaint.jpg';
import './sign.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const Register = () => {
    const [complaint, setComplaint] = useState({
        name: '',
        email: '',
        city: '',
        complain: '',
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setComplaint({ ...complaint, [name]: value });
    };

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, city, complain } = complaint;

        try {
            const response = await fetch('http://localhost:5000/c/complaint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, city, complain }),
            });

            const data = await response.json();

            if (response.status === 201) {
                window.alert('Registration Successful');
                console.log('Registration Successful');
                window.location.href = '/review'; // Replace with the desired URL
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


            <section className="register">
                <div className=" mb-5">
                    <div className="register-content mx-auto row ">
                        <div className=" register-form col-md-6">
                            <h2 className="form-title">Register Complaint</h2>
                            <form method="POST" className="container register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account"></i>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={complaint.name}
                                        onChange={handleInputs}
                                        placeholder="Your Name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={complaint.email}
                                        onChange={handleInputs}
                                        placeholder="Your Email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">
                                        <i className="zmdi zmdi-city"></i>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        value={complaint.city}
                                        onChange={handleInputs}
                                        placeholder="Your City"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="complain-summary">
                                        <i className="zmdi zmdi-pocket"></i>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        name="complain"
                                        id="complain"
                                        value={complaint.complain}
                                        onChange={handleInputs}
                                        placeholder="Your complaint-summary"
                                    ></textarea>
                                </div>
                                <div className="form-group form-button">
                                    <input
                                        type="submit"
                                        name="register"
                                        className="form-submit btn btn-dark"
                                        value="Register"
                                        onClick={PostData}
                                    />
                                </div>
                            </form>

                        </div>
                        <div className="register-image col-md-6 ">
                            <figure>
                                <img src={register} alt="registration pic"
                                />
                                <NavLink to="/review" className="register-image-link">
                                    I have already registered
                                </NavLink>
                            </figure>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
};

export default Register;
