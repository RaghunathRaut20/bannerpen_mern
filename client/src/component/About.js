import React , { useEffect } from 'react';
import { useHistory }  from 'react-router';
import { toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'; 

const About = () => {
    const history = useHistory();
    const callAboutPage = async () => {
        try{
            const res = await fetch('/about', {
                method : "GET",
                headers : {
                    Accept : 'application/json',
                    "Content-Type" : "application/json"        
                },
                credentials : 'include'
            })
            const getOut = await res.json();
            if(getOut.success){
                //
            } else {
                toast.info(getOut.message)
                history.push('/')
            }
        } catch (err) {
            console.log(err)
        }
    
    }


    useEffect( () => {
        callAboutPage()
    }, [])


    return (
        <>
            <h1>ABOUT</h1>
        </>
    )
}


export default About;  