import './App.css'; // 💅 Import styles!

import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Problem from './components/Problem';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/problem/:id" element={<Problem />} />
    </Routes>
  );
}

export default App;
