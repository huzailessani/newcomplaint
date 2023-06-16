// import React, { useEffect, useState } from 'react'
// import signpic from '../images/signup.jpg';
// import './sign.css';
// import { NavLink } from 'react-router-dom';
// import axios from "axios"
// const Review = () => {
//     const [complaintData, setComplaintData] = useState([])
//     useEffect(() => {
//         const PostData = async () => {

//             // 

//             try {
//                 const response = await axios.get('http://localhost:5000/c/complaint')
//                 // console.log(response.data)
//                 setComplaintData(response.data)

//                 // , {
//                 //     method: 'POST',
//                 //     headers: {
//                 //         'Content-Type': 'application/json',
//                 //     },
//                 //     body: JSON.stringify({ name, email, city, complaint }),
//                 // });

//                 // const data = await response.json();

//                 // if (response.status === 201) {
//                 //     window.alert('Registration Successful');
//                 //     console.log('Registration Successful');
//                 //     window.location.href = '/signin'; // Replace with the desired URL
//                 // } else {
//                 //     window.alert(data.error);
//                 //     console.log(data.error);
//                 // }
//             } catch (error) {
//                 console.log(error);
//                 window.alert('Failed to register');
//             }
//         };
//         PostData()
//     }, []);

//     return (
//         <section className="signup">
//             <div className="mb-5">
//                 <div className='row'>
//                     <div className="signup-form col-md-6">
//                         {complaintData.map((item) => {
//                             return (<div className="message">
//                                 <span className="username">{item.name}</span>
//                                 <span className="message-content">{item.complain}</span>
//                             </div>)
//                         })}

//                     </div>
//                     <div className="signup-image col-md-6 ">
//                         <figure>
//                             <img src={signpic} alt="registration pic"
//                             />
//                             <NavLink to="/signin" className="signup-image-link">
//                                 I am already registered
//                             </NavLink>
//                         </figure>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Review


import React, { useEffect, useState } from 'react';

import review from '../images/review.jpg';
import './sign.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Review = () => {
    const [complaintData, setComplaintData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newcomplaint-api.vercel.app/c/complaint');
                setComplaintData(response.data);
            } catch (error) {
                console.log(error);
                window.alert('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    return (
        <section className="register">
            <div className="">
                <div className="register-content mx-auto  register-form row">
                    <div className="review-form col-md-6">
                        <h2 className="form-title mb-3">Review Complaints</h2>
                        {complaintData.map((item) => (
                            <div className="message container-fluid" key={item._id}>
                                <span className="username">{item.name}</span>
                                <br />
                                <span className="message-content">{item.complain}</span>
                            </div>
                        ))}
                    </div>
                    <div className="register-image col-md-6">
                        <figure>
                            <img src={review} alt="registration pic" />
                            <NavLink to="/register" className="signup-image-link text-black">
                                I want to register
                            </NavLink>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
