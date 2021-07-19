import { get } from 'mongoose';
import React, { useEffect } from 'react';

const Pendetails = (props) => {
    console.log(props.location.penId);   
    const getPendet = async() => {
        try {
            const res = await fetch("/pendetails", {
                method : "POST",
                headers : {
                    accept : "application/josn",
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    penId : props.location.penId 
                })
            });

            const getOutput = await res.json();
            console.log(getOutput)

        } catch(err){
            console.log(err)
        }

    }        

    console.log(props.location.penId)

    useEffect( () => {
        getPendet();
    }, []) 
    
    return(
        <>
            <h1>SSSSSSSSS</h1>

        </>
    )
}

export default Pendetails;