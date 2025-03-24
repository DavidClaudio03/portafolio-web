import { Index } from './pages/Index.jsx'; 
import CustomCursor from './Animation/Cursor/AnimationCursor.jsx'; 
import './App.css';
import './Styles/Cursor/Cursor.css';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#140221] via-[#0a0314] to-[#062d25] text-white">
      <CustomCursor /> {/* Animacion de Cursor*/}
      <div id="root"></div> {/* Cursor*/}
      <Index />
    </div>
  );
}

export default App;
