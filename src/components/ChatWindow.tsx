import React, { ChangeEvent, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import ChatMessage from './ChatMessage'
import { useMutation } from 'react-query'
import { submitQuestion } from '@/api/qa'
import LoadingChatSymbol from './LoadigChatSymbol'
import {
  CheckCircleIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/20/solid'

interface QuestionSchema {
  question: string
}
interface ChatMessageProps {
  sender?: string | undefined
  content: string
  isCurrentUser: boolean
}
export type QuestionRequest = {
  question: string
  // paperUrl: string
}

const ChatWindow: React.FC = () => {
  // const messages = [
  //   {
  //     id: 1,
  //     sender: 'Username',
  //     content: 'Random chat history from long ago about...'
  //   },
  //   {
  //     id: 1,
  //     content: 'Random chat history from long ago about...'
  //   }
  //   // ... other messages
  // ]
  const {
    mutate: submitedQuestion,
    isLoading,
    error,
    data
  } = useMutation(submitQuestion)

  const [formState, setFormState] = useState<QuestionSchema>({
    question: ''
  })

  // {
  //     id:1,
  //     sender: "",
  // content: "",
  // isCurrentUser: false,

  //   }
  console.log(formState)
  const [question, setQuestion] = useState<any>()
  const [messages, setMessages] = useState<ChatMessageProps[]>([])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault() // Prevents the default form submit action

    const { name, value } = event.target
    setQuestion(value)
    // console.log(event.target)
    // setFormState({
    //   ...formState,
    //   [name]: value
    // })
  }

  const handleClick = () => {
    console.log(question)
    setMessages((prev) => [
      ...prev,
      {
        sender: 'Username',
        content: question,
        isCurrentUser: true
      }
    ])

    const ques: QuestionRequest = {
      question: question
      // paperUrl: 'https://arxiv.org/pdf/2401.17165.pdf'
    }
    console.log(ques)
    submitedQuestion(question)
    setQuestion('')
  }
  useEffect(() => {
    if (data) {
      console.log(data)
      setMessages((prev) => [
        ...prev,
        {
          content: data.answer,
          isCurrentUser: false
        }
      ])
    }
  }, [data])

  return (
    <div className="to- [#a1ffce] bg-gradient-to-[#faffd1] to-#a1ffce]  grid min-h-screen grid-cols-[2fr_5fr]	justify-center justify-self-center overflow-y-auto bg-gradient-to-r from-[#faffd1]">
      {/* Sidebar */}
      {/* <div className="  overflow-y-auto border-r bg-white"> */}
      <div className="  overflow-y-auto ">{/* <Sidebar /> */}</div>

      {/* Chat area */}
      {/* <div className=" "> */}
      <div className="h-100 r bg-grey/20 mx-72 my-2 flex flex-1 flex-col overflow-auto border-2 shadow-lg ring-1 ring-black/5">
        {/* Chat history */}
        {/* <img
          className="h-8 w-auto"
          src={ChatBubbleBottomCenterIcon}
          alt="Your Company"
        /> */}
        <div className="mx-auto flex border-b-2 border-black px-4 py-6">
          <ChatBubbleLeftEllipsisIcon className="mr-3 h-8 w-auto" />
          <div className=" text-2xl font-medium leading-8">Chatbot</div>
        </div>

        <div className="  flex-1">
          {messages.map((message: ChatMessageProps) => (
            <ChatMessage
              sender={message.sender}
              content={message.content}
              isCurrentUser={false}
            />
          ))}
          {isLoading ? (
            <p className="mx-4">
              <LoadingChatSymbol />
            </p>
          ) : (
            <></>
          )}
        </div>
        {/* Message input */}
        <div className="p-4">
          <div className="relative flex items-center">
            <input
              id="ftext"
              type="text"
              placeholder="Start typing your research question here..."
              className="flex-1 rounded-full border-2 border-black p-4 shadow focus:border-blue-700 focus:outline-black"
              value={question}
              onChange={handleInputChange}
            />
            {/* <button
              className="absolute right-4 rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
              onClick={handleClick}
            > */}
            {/* Icon or text for send button */}
            {/* Send */}
            {/* </button> */}
            {/* <button
              type="button"
              className="flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleClick}
            >
              Send
              <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button> */}
            <button
              type="button"
              className="focus-visible:outline-[#a1ffce]-600 absolute right-4 ml-2 flex items-center gap-x-2 rounded-md bg-[#a1ffce] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:border-2 hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={handleClick}
            >
              Send
              <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default ChatWindow
