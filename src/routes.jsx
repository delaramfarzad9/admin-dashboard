import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router'
import Home from './Pages/Home/page'
import Products from './Pages/Products/page'
import Tickets from './Pages/Tickets/page'
import Users from './Pages/Users/page'
import Comments from './Pages/Comments/page'
import TicketsDetails from './Pages/TicketDetails/page'
import DashboardLayout from './Components/layouts/DashboardLayout'

const router = createBrowserRouter([
{
    path: '/',
    element:(<DashboardLayout/>
    ),
    children:[
        { index: true,
            element:<Home/>
        },
        {
            path:"products",
            element:<Products/>
        },
        {path:"tickets",
         element:<Tickets/>
        },
            {
            path:"tickets/:ticketId",
            element:<TicketsDetails/>
        },

        {path:"users",
         element:<Users/>
        },
        {path:"comments",
            element:<Comments/>
        }
     
    
    ]
}
]
)
export default router