import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login.jsx";

import './App.css';
import SecureRoutes from './utils/SecureRoutes.jsx';

const AdminPage = lazy(() => import('./Pages/Admin.jsx'));
const HomePage = lazy(() => import('./Pages/Home.jsx'));

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
          <Route element={<SecureRoutes />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
