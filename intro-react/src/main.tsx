import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './App';
import ProfilePage from './pages/profile';
import LoginPage from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='profile-user' element={<ProfilePage />} />
        {/* 
          <Route path='login'>
            <Route path='user' element={<LoginPage />} />
          </Route>
        */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
