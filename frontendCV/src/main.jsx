import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './hooks/useAuth.jsx'
import './api/axios.jsx'
import { Toaster } from 'sonner'
import { ModalProvider } from './hooks/useModal.jsx'
import { ModalContainer } from './layouts/ModalContainer.jsx'

createRoot(document.getElementById('root')).render(
  <ModalProvider >
    <AuthContextProvider >
        <App />
        <Toaster position='top-right' richColors />
        <ModalContainer />
    </AuthContextProvider >
  </ModalProvider>
)

