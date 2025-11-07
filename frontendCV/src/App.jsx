import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import './App.css'
import { AuthRoutes } from './layouts/AuthRoutes'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'


const routes = createBrowserRouter([
	{
		path: '',
		element: <Home />
	},
	{
		path: '/dashboard',
		element: <AuthRoutes />,
		children: [
			{
				path: '',
				element: <Dashboard />
			}
		]
	}
])


function App() {

	return <RouterProvider router={routes} />
}

export default App
