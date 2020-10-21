import React from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import './Home.css';


const Home = ( ) => {
  
   return (
        
    <div className="banner-writing">
      <h1 style={{fontWeight:"bolder"}}>I GROW BY HELPING PEOPLE IN NEED</h1>
      <InputGroup className="search"> 
      <FormControl
      placeholder="Search"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
     <InputGroup.Append>
      <Button style={{marginRight:"250px"}}>Search</Button>
    </InputGroup.Append>
  </InputGroup>
</div>
 );
};

export default Home;