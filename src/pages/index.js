import React from "react";

const img = {
  width: '98%',
  height: '150px',
  objectFit:'cover',
  marginTop:'10px',
}
const Home = () => {
  return (
    <div style={{textAlign:'center'}}>
    <img style={img} src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" alt="..."></img>
    </div>
  );
}
export default Home;
