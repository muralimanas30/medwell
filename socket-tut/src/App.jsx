import React from 'react'
import PropTypes from 'prop-types'
import { createBrowserRouter, createHashRouter, Router, RouterProvider } from 'react-router-dom';
import { ErrorComponent, CustomTitle, HomeLayout as HomeComponent } from './components/index.js'
import { Login, Register, ModelPage, SubModelPage } from './pages/index.js';
import { Landing } from './components/index.js';
import { action as registerAction } from './pages/Register.jsx';
import { action as loginAction } from './pages/Login.jsx';
import { ToastContainer } from 'react-toastify';


//helo manas!!

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeComponent />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'profile',
        element: <CustomTitle text="Profile Page" />,
      },
      {
        path: 'models',
        element: <ModelPage />,
      },
      {
        path: ':submodal',
        element: <SubModelPage />,
        children: [
          {
            path: 'health',
            element: <CustomTitle text="Health Page" />,
          },
          {
            path: 'wellbeing',
            element: <CustomTitle text="Wellness Page" />,
          },
          {
            path: 'medical-aid',
            element: <CustomTitle text="Fitness Page" />,
          },
        ],
      },
    ],
    errorElement: <ErrorComponent />
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction({})
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction({})

  },

])


const App = props => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

App.propTypes = {}

export default App