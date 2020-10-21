import React from 'react';
import fakeData from '../../mockData/mockData';

const LoadData = () => {
    const addHandle =() =>{fetch('https://intense-badlands-89597.herokuapp.com/load',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(fakeData)

    })
}
    return (
        <div>
            <button onClick= {addHandle}>add</button>
        </div>
    );
};

export default LoadData;
