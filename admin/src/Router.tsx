import { Route, Routes } from 'react-router-dom';
import Candidates from './pages/Candidates';
import Home from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/candidates' element={<Candidates />} />
    </Routes>
  );
}
