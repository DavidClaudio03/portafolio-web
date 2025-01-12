import React from 'react';
import { Index } from './pages/Index.jsx'; 
import CustomCursor from './Animation/Cursor/AnimationCursor.jsx'; 
import './App.css';
import './Styles/Cursor/Cursor.css';

function App() {
  return (
    <div className="bg-neutral-900">
      <CustomCursor /> {/* Animacion de Cursor*/}
      <div id="root"></div> {/* Cursor*/}
      <Index />
    </div>
  );
}

export default App;
