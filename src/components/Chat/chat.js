import React, { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';

//https://www.npmjs.com/package/pubnub-react

    function Chat() {
        const pubnub = usePubNub();
        const [channels] = useState(['awesome-channel']);
        const [messages, addMessage] = useState([]);
        const [message, setMessage] = useState('');
      
        const handleMessage = event => {
          const message = event.message;
          if (typeof message === 'string' || message.hasOwnProperty('text')) {
            const text = message.text || message;
            addMessage(messages => [...messages, text]);
          }
        };
      

        const chatDisplay = () => {
          const chat = document.getElementById("chat");
          if (chat.style.display === "none") {
            chat.style.display = "block";
          } else {
            chat.style.display = "none";
          }
        }

        const sendMessage = message => {
          if (message) {
            pubnub
              .publish({ channel: channels[0], message })
              .then(() => setMessage(''));
          }
        };
      
        useEffect(() => {
          pubnub.addListener({ message: handleMessage });
          pubnub.subscribe({ channels });
        }, [pubnub, channels]);
      
        return (
          <><div id='chat' style={pageStyles}>
            <div style={chatStyles}>
              <div style={headerStyles}>
                <button style={chatHide} className='button'
                  >Chat</button>
              </div>
              <div style={listStyles}>
                {messages.map((message, index) => {
                  return (
                    <div key={`message-${index}`} style={messageStyles}>
                      {message}
                    </div>
                  );
                })}
              </div>
              <div style={footerStyles}>
                <input
                  type="text"
                  style={inputStyles}
                  placeholder="Type your message"
                  value={message}
                  onKeyPress={e => {
                    if (e.key !== 'Enter')
                      return;
                    sendMessage(message);
                  } }
                  onChange={e => setMessage(e.target.value)} />
                <button
                  title='Click to open/close the chat'
                  style={buttonStyles}
                  onClick={e => {
                    e.preventDefault();
                    sendMessage(message);
                  } }
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <><button 
          style={chatShow}
          onClick={e => {
            e.preventDefault();
            chatDisplay();
          } }
          >Chat</button></></>
        );
      }
      
      const pageStyles = {
        border: '1px solid black',
        position: 'fixed',
        height: 'fit-content',
        width: '300px',
        overflow: 'auto',
        bottom: '0',
      };

      const chatStyles = {
        display: 'flex',
        flexDirection: 'column',
        height: '50vh',
        width: '100%',
      };
      
      const headerStyles = {
        position: 'relative',
        minHeight:'fit-content',
        background: 'black',
        color: 'white',
        fontSize: '1.4rem',
        padding: '10px 15px',
      };
      
      const listStyles = {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'auto',
        padding: '10px',
        background:'#fafafa',
      };
      
      const messageStyles = {
        backgroundColor: '#eee',
        borderRadius: '5px',
        color: '#333',
        fontSize: '1.1rem',
        margin: '5px',
        padding: '8px 15px',
      };
      
      const footerStyles = {
        display: 'flex',
        width: '300px',
      };
      
      const inputStyles = {
        flexGrow: 1,
        fontSize: '1.1rem',
        padding: '10px 15px',
        border: '1px solid transparent',
        width:'165px',
      };
      
      const buttonStyles = {
        fontSize: '1.1rem',
        padding: '10px 15px',
        border: '1px solid transparent',
      };

      const chatHide = {
        backgroundColor:'black',
        color: 'white',
        border: 'none',
        width:'100%',
        cursor:'pointer',
        fontSize:'108%',
      }

      const chatShow = {
        border: 'none',
        color: 'white',
        fontSize:'20px',
        fontWeight:'bold',
        backgroundColor: 'black',
        borderRadius: '50%',
        position: 'fixed',
        height: '80px',
        width: '80px',
        bottom: '8px',
        right: '8px',
      }

export default Chat;