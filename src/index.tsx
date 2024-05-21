import 'index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReactDOM from 'react-dom'

import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('root') as HTMLDivElement
const queryClient = new QueryClient()

const root = createRoot(container)
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
)
