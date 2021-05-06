import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

const Signup = () =>{
    const history=useHistory();

    const[user,setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })
    
    let name,value;

    const handleInputs = (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value})
    }
    
    const PostData = async (e) =>{
        e.preentDefault();

        const { name,email,phone,work,password,cpassword }= user;

        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        })
        const data=await res.json();

        if(data.status ===422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else{
            window.alert("Registration Successfull");
            console.log("Registration Successfull");

            history.push("/login")
        }
    }




    return(
        <>
        <section>
        <div classNameName="container">
  <h2>Sign Up</h2>
  <form method="POST">
  <div className="input-container">
    <i className="fa fa-user icon"></i>
    <input className="input-field" type="text" placeholder="Your Name" name="usrnm" value={user.usrnm}
    onChange={handleInputs}/>
  </div>

  <div className="input-container">
    <i className="fa fa-envelope icon"></i>
    <input className="input-field" type="text" placeholder="Your Email" name="email" value={user.email}
    onChange={handleInputs}/>
  </div>

  <div className="input-container">
    <i className="fa fa-key icon"></i>
    <input className="input-field" type="number" placeholder="Your Phone" name="phone" value={user.phone}
    onChange={handleInputs}/>
  </div>

  <div className="input-container">
    <i className="fa fa-key icon"></i>
    <input className="input-field" type="text" placeholder="Your Profession" name="profession" value={user.profession}
    onChange={handleInputs}/>
  </div>

  <div className="input-container">
    <i className="fa fa-key icon"></i>
    <input className="input-field" type="password" placeholder="Your Password" name="psw" value={user.psw}
    onChange={handleInputs}/>
  </div>

  <div className="input-container">
    <i className="fa fa-key icon"></i>
    <input className="input-field" type="password" placeholder="Confirm Your Password" name="cpsw" value={user.cpsw}
    onChange={handleInputs}/>
  </div>
   <div className="form-group form-button">
  <input type="submit" name="signup" className="form-submit" value="Register" onClick={PostData}/>

   </div>
  </form>
  </div>
  </section>
</>
    )
}

export default Signup;