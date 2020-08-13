import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Enter the UserName"));
  }, []);
  const sendMessage = (event) => {
    // logic to send a message
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // setMessages([...messages, { userName: userName, message: input }]);
    setInput('');
  };

  return (
    <div className="app">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="fb-messenger-logo" />
      <h2>Welcome {userName}</h2>
      <form className="app_form">
        <FormControl className="app_formControl" >
          {/* <InputLabel>Enter a Message</InputLabel> */}
          <Input className='app_input' placeholder='Enter a message' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_iconButton" variant="contained" disabled={!input} color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (<Message key={id} userName={userName} message={message} />))
        }
      </FlipMove>
    </div>
  );
}

export default App;
