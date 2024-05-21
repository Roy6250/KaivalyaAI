import { Route, Routes } from 'react-router-dom'
import { Chat } from './pages'
// import { Chat } from './pages/Chat'

interface RouteType {
  path: string
  element: React.FC
}

const router: RouteType[] = [
  {
    path: '/home',
    element: Chat
  }
]

const Main: React.FC = () => {
  return (
    <div className="bg-back App">
      {/* <MainLayout> */}
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      {/* </MainLayout> */}
    </div>
  )
}

export default Main
