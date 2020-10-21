import React from 'react';



const RegisterData = (props) => {
    const{email}=props.reg;
    
    
    return (
        <div>
            <h1>
            {email}
                
            </h1>
        </div>
    );
};

export default RegisterData;