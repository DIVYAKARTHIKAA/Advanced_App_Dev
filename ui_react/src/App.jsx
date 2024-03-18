import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import './App.css';
import WebLayout from './Layout/WebLayout';
import Home from './pages/Home';
import Login from './pages/auth/Login';

import Contact from './pages/Contact';
const UserLayout = lazy(() => import('./Layout/UserLayout'))
const Signup = lazy(() => import('./pages/auth/Signup'))
const UserDashboard = lazy(() => import('./pages/Shared/UserDashboard'))
const UserSettings = lazy(() => import('./pages/Shared/Usersettings'))
import Placeorder from './pages/Placeorder';
import Myorder from './pages/Myorder';
import Payorder from './pages/Payorder';

import Error404 from './pages/Error404';
import Loader from './components/public/Loader';
import Termsc from './pages/Termsc';
















function App() {
  return (
    <BrowserRouter>
    
    <Suspense fallback={<Loader />}>
      <Routes>
      <Route element={<WebLayout/>}>
        
        <Route path="/" element={<Home/>} />
        <Route path="/terms" element={<Termsc/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
      <Route element={<UserLayout/>}>
        <Route path='/user/dashboard' element={<UserDashboard/>} />
        <Route path='/user/placeorder' element={<Placeorder/>} />
        <Route path='/user/myorder' element={<Myorder/>} />
        <Route path='/user/payorder' element={<Payorder/>} />
        <Route path='/user/settings' element={<UserSettings/>} />
        
      
        
      </Route>
      <Route path='*' element={<Error404 />} />
      </Routes>
      
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
