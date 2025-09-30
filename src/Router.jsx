import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Parcours from './pages/Parcours/Parcours.jsx';
import CV from './pages/CV/CV.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';


export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Parcours" element={<Parcours />} />
        <Route path="/CV" element={<CV />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}