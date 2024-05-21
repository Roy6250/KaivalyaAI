import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router
} from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { Chat } from './pages'
import Main from './Main'

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
    // // <MainLayout>
    <BrowserRouter>
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
    // // </MainLayout>

    // <div className="App bg-back">
    //   <MainLayout>
    //     <Routes>
    //       {router.map((route, index) => (
    //         <Route key={index} path={route.path} element={<route.element />} />
    //       ))}
    //     </Routes>
    //   </MainLayout>
    // </div>
  )
}

export default App
