import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router
} from 'react-router-dom'
import { Chat } from './pages'

interface RouteType {
  path: string
  element: React.FC
}

const router: RouteType[] = [
  {
    path: '/',
    element: Chat
  }
]

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
