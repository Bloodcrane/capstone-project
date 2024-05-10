import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login.jsx";

import './App.css';

const AdminPage = lazy(() => import('./Pages/Admin.jsx'));
const HomePage = lazy(() => import('./Pages/Home.jsx'));

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
