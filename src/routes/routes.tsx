import { Routes, Route, Navigate } from 'react-router-dom';
import Orders from '../pages/Orders.js';
import Revenue from '../pages/Revenue.js';
import Dashboard from '../pages/Dashboard.js';

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/revenue" element={<Revenue />} />
    </Routes>
  );
}

export default Navigation;