import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { AuthRoutes } from './layouts/AuthRoutes'
import Home from './pages/Home'


const routes = createBrowserRouter([
	{
		path: '',
		element: <Home />
	},
	{
		path: '/profile',
		element: <AuthRoutes />,
		children: [
			{
				path: '',
				element: <div>Bienvenu sur ton dashboard</div>
			}
		]
	}
])


function App() {
	return <RouterProvider router={routes} />
}

export default App
