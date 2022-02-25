import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Message.scss'
export function Message() {
  const [texts, setTexts] = useState([])

  function listMessages() {
    useEffect(() => {
      const data = axios
        .get('http://localhost:5500/listMessages')
        .then(({ data }) => {
          setTexts(data)
        })
    }, [])
  }
  listMessages()

  return (
    <div id="message-container">
      {texts?.map(text => (
        <div id="message-wrapper">
          <div id="user-container">
            <img
              src="https://avatars.githubusercontent.com/u/80837854?v=4"
              alt=""
            />
            <span>Guilherme:</span>
          </div>

          <div id="text-container">
            <p key={text.id}>{text.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
{
  /* <img src="https://github.com/GuilhermeNied.png" alt="" /> */
}
