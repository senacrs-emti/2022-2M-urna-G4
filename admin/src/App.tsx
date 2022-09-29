import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import './styles/globals.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
