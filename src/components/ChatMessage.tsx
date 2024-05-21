// ChatMessage.tsx
import { img } from '@/assets'
import React from 'react'
import {
  CheckCircleIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/20/solid'
interface ChatMessageProps {
  sender: string | undefined
  content: string
  isCurrentUser: boolean
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  content,
  isCurrentUser
}) => {
  // TailwindCSS classes for different message types
  const messageStyles =
    sender == 'Username'
      ? ' text-white self-end bg-gradient-to-r from-[#a1ffce] to-[#faffd1]'
      : 'bg-gradient-to-l from-[#a1ffce] to-[#faffd1] text-gray-800 self-start'

  return (
    <div
      className={`mx-4 my-2 flex  flex-col rounded-lg  p-2 shadow-lg ring-1 ring-black/5 hover:bg-indigo-700 ${messageStyles}`}
    >
      {sender == 'Username' ? (
        // <span className="mb-1 text-sm">{sender}</span>
        <a
          href="#"
          className="flex items-center gap-x-4 py-3  text-sm font-semibold leading-6 tracking-wide text-black	  "
        >
          <img className="h-8 w-8 rounded-full   " src={img} alt="" />
          <span className="sr-only">Your profile</span>
          <span aria-hidden="true">{sender}</span>
        </a>
      ) : (
        <>
          <a
            href="#"
            className="bg-red/10 flex items-center gap-x-4 py-3 text-sm font-semibold leading-6 tracking-wide text-black	 "
          >
            <ChatBubbleLeftEllipsisIcon className="h-8 w-8 rounded-full" />
            <span className="sr-only">Your profile</span>
            <span aria-hidden="true">ChatGpt</span>
          </a>
        </>
        // <>
        //   <span className="mb-1 text-sm">Chatbot</span>
        // </>
      )}
      <p className="break-words pl-12  text-black">{content}</p>
    </div>
  )
}

export default ChatMessage

{
  /* <div className="h-12 w-12 flex-none overflow-hidden rounded-full">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              // alt={senderName}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 rounded-lg  p-3  text-black">
            <div className="font-semibold">ChatGpt</div>
            {/* <p className="text-sm">{content}</p> */
}
{
  /* <div className="text-right text-xs text-blue-200">{timestamp}</div> 
          </div> */
}
