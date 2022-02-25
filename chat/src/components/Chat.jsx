import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import '../styles/Chat.scss'

export function Chat(props) {
  const { createText } = props

  const [text, setText] = useState('')

  return (
    <>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Digite sua mensagem"
          onChange={e => setText(e.target.value)}
          value={text || ''}
        />
        <button
          onClick={() => {
            createText(text)
            setText('')
          }}
        >
          <i>
            <AiOutlineSend
              style={{
                marginTop: '3px',
                marginLeft: '1px'
              }}
            />
          </i>
        </button>
      </form>
    </>
  )
}
