import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './App';
import ProfilePage from './pages/profile';
import LoginPage from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveTailwindPage from './pages/responsive-tailwind';
import TestimonialsPage from './pages/testimonials';
import UseRefPage from './pages/use-ref';
import UseStatePage from './pages/use-state';
import UseEffectPage from './pages/use-effect';
import NetworkCallPage from './pages/network-call';
import FormValidationPage from './pages/form-validation';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='profile-user' element={<ProfilePage />} />
      <Route path='/responsive-tailwind' element={<ResponsiveTailwindPage />} />
      <Route path='/testimonials' element={<TestimonialsPage />} />
      <Route path='/use-ref' element={<UseRefPage />} />
      <Route path='/use-state' element={<UseStatePage />} />
      <Route path='/use-effect' element={<UseEffectPage />} />
      <Route path='/network-call' element={<NetworkCallPage />} />
      <Route path='/form-validation' element={<FormValidationPage />} />
      {/* 
          <Route path='login'>
            <Route path='user' element={<LoginPage />} />
          </Route>
        */}
    </Routes>
  </BrowserRouter>,
  // </StrictMode>,
);
