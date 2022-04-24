import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { PubNubProvider } from "pubnub-react";
import Chat from './components/Chat/chat'
import PubNub from 'pubnub';

const pn = new PubNub ({
  publishKey: "pub-c-af9e408a-d4a8-473c-b591-81402cdf9aaf",
  subscribeKey: "sub-c-7e76d5bc-2658-11e9-9508-c2e2c4d7488a",
  uuid: 'username',
});

function App() {
  
  return (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
    <PubNubProvider client={pn}>
      <Chat />
      </PubNubProvider>
    </div>
  );
}

export default App;
