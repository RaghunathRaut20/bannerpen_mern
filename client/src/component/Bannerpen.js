import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Bannerpen = () => {

    const [getPenDetail, setPenDetails] = useState([]);

    const getPen = async () => {
        try {
            const res = await fetch('/pen', {
                method : "get",
                headers : {
                    accept : "application/json",
                    "Content-Type" : "application/json"
                }
            })
            const getOutput = await res.json();
            if(getOutput.success){
                let getData = getOutput.pen;

                getData.map((getVal, id) => {                    
                    setPenDetails((prev) => {
                        return{
                            ...prev,
                            [id] : getVal
                        }
                    })
                })
            }                
        } catch(err){
            console.log(err)
        }
    }
    useEffect( () => {
        getPen()
    }, [])


    return(
        <>
            <h2> Bannerpen </h2>
            <div className="container-fluid">
                <div className ="container">
                    <div className ="row">
                    {console.log(getPenDetail)}
            
                        { 
                            Object.entries(getPenDetail).map((item, i) => (
                                //console.log(item[1]._id)
                                
                                <div className="col-md-4">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img src={'/logo192.png'} className="img-fluid card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item[1].penName}</h5>
                                            <NavLink className="btn btn-primary" title="Title" to={{
                                                pathname:"/bannerpen",
                                                penId : item[1]._id
                                            }}>Order Now</NavLink>  
                                        </div>
                                    </div>
                                </div>
                                
                                                

                            ))
                        }
                    </div>    
                </div>
            </div>    
            
            
                    </>
    )
}

export default Bannerpen;