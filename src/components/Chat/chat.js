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
          <div style={pageStyles}>
            <div style={chatStyles}>
              <div style={headerStyles}><button id='toggle'>Chat</button></div>
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
                    if (e.key !== 'Enter') return;
                    sendMessage(message);
                  }}
                  onChange={e => setMessage(e.target.value)}
                />
                <button
                  style={buttonStyles}
                  onClick={e => {
                    e.preventDefault();
                    sendMessage(message);
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        );
      }
      
      const pageStyles = {
        border: '1px solid black',
        position: 'fixed',
        height: '50vh',
        minHeight: '100vh',
        width: '50%',
        marginTop:'108px'
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
      };
      
      const inputStyles = {
        flexGrow: 1,
        fontSize: '1.1rem',
        padding: '10px 15px',
        border: '1px solid transparent',
      };
      
      const buttonStyles = {
        fontSize: '1.1rem',
        padding: '10px 15px',
        border: '1px solid transparent',
      };
export default Chat;