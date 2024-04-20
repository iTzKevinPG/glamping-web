import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';

const HomePage = lazy(() => import('./pages/homePage/homePage'));
const ReservePage = lazy(() => import('./pages/reservePage/reservePage'));
const FaqPage = lazy(() => import('./pages/faqPage/faqPage'));
const LoginPage = lazy(() => import('./pages/loginPage/loginPage'));
const RegisterPage = lazy(() => import('./pages/registerPage/registerPage'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
