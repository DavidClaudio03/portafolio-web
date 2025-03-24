import { Outlet } from 'react-router-dom';
import './Index.css';
import Home from './Home';
import NavBar from "../layouts/Navbar";

export const Index = () => {
  return (
    <div className="flex flex-col min-h-screen  max-w-[1100px] mx-auto overflow-x-hidden">
      <NavBar />
      <Home />
      <main className="flex-1">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};