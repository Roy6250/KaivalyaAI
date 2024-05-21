import React from 'react'

const LoadingChatSymbol = () => {
  return (
    <div className="flex  items-center justify-center">
      <div className="h-12 w-12 animate-spin-slow rounded-full border-b-2 border-gray-900"></div>
      {/* Adjust sizes, colors, and border to fit the chat design */}
    </div>
  )
}

export default LoadingChatSymbol
