import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'; 

const Signup = () => {

    const [formdata, formset] = useState({
        fName : '', lName : '', email : '', phoneNo : '', password : ''
    })

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        formset( (preVal) => {
            return {
                ...preVal,
                [name] : value 
            }
        })    
    } 


    const submeetForm = async (e) => {
        //e.preventDefault();
        
        const { fName, lName, email, phoneNo, password } = formdata;

        const res = await fetch("/register", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                fName : fName, lName : lName, email : email, phoneNo : phoneNo, password : password
            })
        })
        const setResponce = await res.json();
        if(setResponce.success){
            toast.success(setResponce.message)
        } else {
            toast.info(setResponce.message)
        }
    }




    return(
        <>
            <div className="container-fluid bg-Body-Dark">
                <div className="container">
                    <ToastContainer />
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-md-offset-3 justify-content-center">
                            <h1>Registaer</h1>
                            <form method="post" name="sugnupform">
                                <div className="mb-3">
                                    <label for="fName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" value={formdata.fName} onChange = {handleInputs} name="fName" placeholder="First Name" />
                                </div>
                                <div className="mb-3">
                                    <label for="lName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" value={formdata.lName} onChange = {handleInputs} name="lName" placeholder="Last Name" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email-Id</label>
                                    <input type="text" className="form-control" value={formdata.email} onChange = {handleInputs} name="email" placeholder="Email-Id" />
                                </div>
                                <div className="mb-3">
                                    <label for="phoneNo" className="form-label">Phone No</label>
                                    <input type="number" className="form-control" value={formdata.phoneNo} onChange = {handleInputs} name="phoneNo" placeholder="Phone No" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" value={formdata.password} onChange = {handleInputs} name="password" placeholder="Password" />
                                </div>
                                <button type="button" onClick={submeetForm} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </>
    );
} 

export default Signup;