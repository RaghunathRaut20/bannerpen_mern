import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const history = useHistory();

    const [formDat, formSet] = useState({
        email : '', password : ''
    })
    
    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        
        formSet((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
        console.log(formDat)        
    }

    const signInSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formDat;
        const res = await fetch('/signin', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email, password : password 
            }) 
        })
        const setResponce = await res.json()
        if(setResponce.success){
            history.push('/');  
        } else {
            toast.info(setResponce.message)
        }
        return false;
    }

    return (
        <>
            <div className="container-fluid bg-Body-Dark">
                <div className="container">
                    <ToastContainer />
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-md-offset-3 justify-content-center">
                            <h1>Login</h1>
                            <form method="post">
                                <div className="mb-3">
                                    <label className="form-label">Email-Id</label>
                                    <input type="email" className="form-control" value={formDat.email} onChange = {handleInputs} name="email" placeholder="Email-Id" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" value={formDat.password} onChange = {handleInputs} name="password" placeholder="Password" />
                                </div>
                                <button class="button" onClick={signInSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>               
        </>
    );
} 

export default Signin;