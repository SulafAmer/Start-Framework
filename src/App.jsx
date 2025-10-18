import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Home from './Components/Home/Home'

let x=createBrowserRouter([
{path:"",element:<Layout/>,children:[
{index:true,element:<Home/>},
{path:"about",element:<About/>},
{path:"contact",element:<Contact/>},
{path:"portfolio",element:<Portfolio/>}
]}

])
export default function App() {
  return <>
    <RouterProvider router={x}></RouterProvider>
    </>
}
