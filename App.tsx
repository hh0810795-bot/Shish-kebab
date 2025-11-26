import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Dashboard'; // Reused file as Home
import Menu from './pages/POS'; // Reused file as Menu
import Checkout from './pages/OrderManagement'; // Reused file as Checkout
import Offers from './pages/Analytics'; // Reused file as Offers
import Contact from './pages/Settings'; // Reused file as Contact
import Reviews from './pages/MenuManagement'; // Reused file as Reviews
import { StoreProvider } from './context/StoreContext';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </StoreProvider>
  );
};

export default App;