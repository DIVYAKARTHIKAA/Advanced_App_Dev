import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import WebLayout from './Layout/WebLayout';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Contact from './pages/Contact';
const UserLayout = lazy(() => import('./Layout/UserLayout'))
const Signup = lazy(() => import('./pages/Auth/Signup'))
const UserDashboard = lazy(() => import('./pages/Shared/UserDashboard'))
const UserSettings = lazy(() => import('./pages/Shared/UserSettings'))


import Error404 from './pages/Error404';

import Termsc from './pages/Termsc';
import Placeorder from './pages/Shared/Placeorder';
import Myorder from './pages/Shared/Myorder';
import Payorder from './pages/Shared/Payorder';
import Loader from './components/Public/Loader';
import AdminLayout from './Layout/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminGift from './pages/Admin/AdminGift';
import AdminTheme from './pages/Admin/AdminTheme';
import AdminOrder from './pages/Admin/AdminOrder';
import AdminPayment from './pages/Admin/AdminPayment';
import AdminConfig from './pages/Admin/AdminConfig';
import AdminSettings from './pages/Admin/AdminSettings';




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

      <Route element={<AdminLayout />}>
              <Route path='/admin/dashboard' element={<AdminDashboard />} />
              <Route path='/admin/gift' element={<AdminGift />} />
              <Route path='/admin/theme' element={<AdminTheme />} />
              <Route path='/admin/order' element={<AdminOrder/>} />
              <Route path='/admin/pay' element={<AdminPayment/>} />
              <Route path='/admin/config' element={<AdminConfig/>} />
              <Route path='/admin/setting' element={<AdminSettings/>} />
              
              
              
            </Route>

      <Route path='*' element={<Error404 />} />
      </Routes>
      
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
