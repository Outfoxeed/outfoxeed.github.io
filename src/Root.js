import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/generics/Footer';

export default function Root() {
  return (
    <>
        <Navbar />
        <div id="content">
            <Outlet />
        </div>
        <Footer />
    </>
  )
}
