import React from 'react'
import PropTypes from 'prop-types'
import { createBrowserRouter, createHashRouter, Router, RouterProvider } from 'react-router-dom';
import { ErrorComponent, CustomTitle, HomeLayout as HomeComponent,Chatbot } from './components/index.js'
import { Login, Register, ModelPage, SubModelPage, ProfilePage, About } from './pages/index.js';
import { Landing } from './components/index.js';
import { action as registerAction } from './pages/Register.jsx';
import { action as loginAction } from './pages/Login.jsx';

import {action as profileAction } from './components/ProfileData.jsx'
import { ToastContainer } from 'react-toastify';
import {store} from './store.js'
import { loader as subModelLoader } from './pages/SubModelPage.jsx';
import VideoChat from './pages/VideoChat.jsx';

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
        element: <ProfilePage />,
        action:profileAction(store)
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'models',
        element: <ModelPage />,
      },
      {
        path: ':submodal',
        element: <SubModelPage />,
        loader:subModelLoader(store),
        children: [
          {
            path: 'diet',
            element:  <Chatbot chatType="dietChat" />,
          },
          {
            path: 'fitness',
            element:  <Chatbot chatType="fitnessChat" />,
          },
          {
            path: 'diagnosis',
            element:  <Chatbot chatType="diagnosisChat" />,
          },
        ],
      },
      {
        path: 'video',
        element: <VideoChat /> || <CustomTitle text={"VIDEO CHAT"}/> ,
      },
    ],
    errorElement: <ErrorComponent />
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction(store)
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction(store)

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