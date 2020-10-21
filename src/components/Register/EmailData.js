import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import RegisterData from './RegisterData';

const EmailData = () => {
    const [register,setRegister] = useState([]);
    const [loggedInUser,activityData, setActivityData] = useContext(UserContext);
    useEffect(()=>{
        fetch('https://intense-badlands-89597.herokuapp.com/register?email='+loggedInUser.email, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
    .then(data => setRegister(data));
}, [])

    return (
        <div>
            {
                register.map(reg=> <h1>{reg.email}</h1>)
            }
        </div>
    );
};


export default EmailData;