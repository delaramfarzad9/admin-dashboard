
import { RouterProvider, ScrollRestoration } from 'react-router'
import  router  from './routes'
import './App.css'

function App() {
  

  return (
    <>
     <RouterProvider router={router} >
      <ScrollRestoration />
     </RouterProvider>
    </>
  )
}

export default App
