import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useEffect } from 'react';
import { useState } from 'react';
import {Card,CardDeck} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './LoadDataFetch.css';

const LoadDataFetch = () => {
   const [loadData, setLoadData] = useState([]);
   const [activityData, setActivityData] = useContext(UserContext)
   useEffect(()=>{
      fetch('https://intense-badlands-89597.herokuapp.com/data')
      .then(res => res.json())
     .then(data => setLoadData(data))
}, [])
const history = useHistory();
    const handleHistory = (data) => {
        setActivityData(data);
        history.push('/login');
        
    }
    return (
        
        <div className="row d-flex justify-content-between">
            { 
              loadData.map(data=>
                
                <Card className="card-info" onClick={() => handleHistory(data) }>
                    <Card.Img variant="top" style={{ maxWidth: "286px" }} src={data.image} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                    </Card.Body>
                </Card>
                
                )
            }
        
        </div>
        
    );
};

export default LoadDataFetch;