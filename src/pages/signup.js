import React, { useState } from 'react';


const style = {
    backgroundColor: "#8e939c",
    padding: "100px",
    width: "220px",
    margin: "auto",
    marginTop:"220px",
    color: "rgb(0, 54, 144)"
  };
  
  const inputFields = {
    padding: "10px",
    width: "195px",
    margin: "auto",
    color:"rgb(0, 54, 144)"
  };
  
 const FORM_ENDPOINT = ""; // TODO - fill on the later step
  
  const SignUp = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    //Change this to user profile
    if (submitted) {
      return (
        <>
          <div style={{ margin: "20px" , color:"rgb(0, 54, 144)"}} className="text-2xl">
            Thank you!
          </div>
          <div style={{ margin: "20px", color:"rgb(0, 54, 144)"}} className="text-md">
            We'll be in touch soon.
          </div>
        </>
      );
    }
  

  function check_input(){
  var passwordInput=document.getElementById('password').value;
  var passwordConfirm=document.getElementById('password_confirm').value; 
    if(passwordInput!==passwordConfirm){
      alert('Passwords must be the same');
    }
}
    return (
      <center>
        <form
          style={style}
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div style={inputFields} className="mb-3 pt-0">
            <input
              type="text"
              placeholder="Username"
              name="name"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div style={inputFields} className="mb-3 pt-0">
            <input 
              id='password'
              type="password"
              placeholder="Password"
              name="password"
              className="form-control"
              required="required"
            />
          </div>
          <div style={inputFields} className="mb-3 pt-0">
            <input
              id="password_confirm"
              type="password"
              placeholder="Repeat Password"
              name="password_confirm"
              className="form-control"
              required="required"
              onKeyUp={check_input}
            />
          </div>
          <div style={{color:"rgb(0, 54, 144)"}} className="mb-3 pt-0">
            <button className="button" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </center>
    );
    }
export default SignUp;