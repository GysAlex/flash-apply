import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './hooks/useAuth.jsx'
import './api/axios.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
    <AuthContextProvider >
      <App />
      <Toaster />
    </AuthContextProvider >

)

