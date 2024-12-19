import React from 'react'
import Footer from './Footer'
import "../index.css";


function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout