import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './Context/AuthContext.js';
import SecureRoutes from './utils/SecureRoutes.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const LoginPage = lazy(() => import("./Pages/Login.jsx"));
const AdminPage = lazy(() => import('./Pages/Admin.jsx'));
const HomePage = lazy(() => import('./Pages/Home.jsx'));

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Router basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route path="/admin" element={<SecureRoutes><AdminPage /></SecureRoutes>} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  </I18nextProvider>
);

export default App;