import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory
 } from 'react-router-dom';

import { UserContext } from '../../App';
import EmailData from '../Register/EmailData';
import './Registration.css';



const Registration = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser,activityData, setActivityData] = useContext(UserContext);
  const history = useHistory()
  const onSubmit = data =>  {
    const newSubmit = {...loggedInUser,information:data,...activityData};
    fetch('https://intense-badlands-89597.herokuapp.com/doRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSubmit)
      })
      .then(res => res.json())
      .then(data => {
        history.push('/emailData')
      })


  }
 return (
  <div className="registration-form" >
    <h2>Register as a Volunteer</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} placeholder="Full Name" />
      {errors.name && <span className="error">Name is required</span>}
     
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Username or Email"/>
      {errors.email && <span className="error">Email is required</span>}
     
      <input name="date" ref={register({ required: true })}  placeholder="Date" />
      {errors.address && <span className="error">Date is required</span>}
     
      <input name="discription" ref={register({ required: true })}  placeholder="Discription"/>
      <input name="title" defaultValue={activityData.title}  ref={register({ required: true })}  placeholder="Volunteer Activities Name"/>
     <input type="submit" />
    </form>
  </div>
    );
};

export default Registration;