import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile';
import RootLayout from './components/Layout';
import ZustandPage from './pages/zustand';
import LoginPage from './pages/login';
import AuthProvider from './providers/AuthProvider';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AuthProvider />}>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='profile' element={<Profile />} />
          <Route path='zustand' element={<ZustandPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
