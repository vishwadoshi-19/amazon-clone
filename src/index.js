import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.js'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Checkout from './Checkout.jsx'
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      // {
      //   path: "contact",
      //   element: <Contact />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>,
)