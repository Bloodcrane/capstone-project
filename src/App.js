import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login.jsx";
import './App.css';
// import SecureRoutes from './utils/SecureRoutes.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const AdminPage = lazy(() => import('./Pages/Admin.jsx'));
const HomePage = lazy(() => import('./Pages/Home.jsx'));

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </Router>
  </I18nextProvider>
);

export default App;
