import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  </BrowserRouter>,
);
