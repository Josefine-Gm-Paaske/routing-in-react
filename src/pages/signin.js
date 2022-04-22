import React, { useState } from 'react';

const style = {
    backgroundColor: "black",
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
  
  const SignIn = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
    
    //User profile
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
              type="password"
              placeholder="Password"
              name="password"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div style={{color:"rgb(0, 54, 144)"}} className="mb-3 pt-0">
            <button className="button" type="submit">
              Log in
            </button>
          </div>
        </form>
      </center>
    );
  };
  

export default SignIn;