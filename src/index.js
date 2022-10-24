import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Homepage, NewPost, Register, AllPosts, Profile, DetailedPostView, Login, } from './components/index'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        children: [
         
            {
                path: "/new-post",
                element: <NewPost />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/posts",
                element: <AllPosts />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/profile/:id",
                element: <DetailedPostView />
            },
            {
                path: "/Login",
                element: <Login />
            },
            {
                
            }
           
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"))
