import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-dvw mx-auto ">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <main className="flex-1 pt-16 bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        ©2024 MyApp. All Rights Reserved.
      </footer>
    </div>
  )
}

export default Layout
