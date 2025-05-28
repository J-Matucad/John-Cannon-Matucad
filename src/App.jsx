// App.js
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;
