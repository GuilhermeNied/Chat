import React, { useEffect, useState } from 'react'
import { Chat } from './components/Chat'
import { Message } from './components/Message'
import './styles/App.scss'
import axios from 'axios'

function App() {
  const [messages, setMessages] = useState([])

  const createText = text => {
    const data = axios.post('http://localhost:5500/createMessage', {
      text: text
    })
    setMessages([data.data, ...messages])
  }

  return (
    <div className="App">
      <div className="chat-container">
        <Message />
        <Chat createText={createText} id="chat" />
      </div>
    </div>
  )
}

export default App
