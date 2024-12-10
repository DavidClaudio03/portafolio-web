
import { Outlet } from 'react-router-dom';
import './Index.css';
import Home from './Home'

export const Index = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Home />
      <main className="flex-1">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};