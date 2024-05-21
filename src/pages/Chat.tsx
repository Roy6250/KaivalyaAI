import React from 'react'
import ChatWindow from '@/components/ChatWindow'
import { MainLayout } from '@/components/MainLayout'
import Header from '@/components/Header'
export const Chat: React.FC = () => {
  return (
    <div>
      {/* <MainLayout> */}
      <Header />
      <ChatWindow />
      {/* </MainLayout> */}
    </div>
  )
}

export default Chat
