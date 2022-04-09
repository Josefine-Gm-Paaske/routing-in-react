import React, { useState } from "react";

const style = {
  backgroundColor: "#2055ae",
  padding: "100px",
  width: "220px",
  margin: "auto",
  marginTop:"220px"
};

const inputFields = {
  padding: "10px",
  width: "195px",
  margin: "auto",
};

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div style={{ margin: "20px" }} className="text-2xl">
          Thank you!
        </div>
        <div style={{ margin: "20px" }} className="text-md">
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
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div style={inputFields} className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div style={inputFields} className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button className="button" type="submit">
            Send a message
          </button>
        </div>
      </form>
    </center>
  );
};

export default Contact;
