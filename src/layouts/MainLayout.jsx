import React from 'react'
import Footer from './Footer'
import "../index.css";
import NavBar from "./Navbar";


function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
       <NavBar /> 
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout