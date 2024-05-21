import React from 'react'

const ChatInput = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4">
      <input
        type="text"
        placeholder="Start typing your research question here..."
        className="w-full rounded-full border-2 border-blue-500 p-2 focus:border-blue-700 focus:outline-none"
      />
    </div>
  )
}

export default ChatInput
