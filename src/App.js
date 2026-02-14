import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';

import './css/app.css';

function App() {
  return (
    <div className="market-app">
      {/* Sidebar - Warm & Natural */}
      <aside className="sidebar">
        <div className="brand">
          <div className="leaf-icon">🌿</div>
          <h2>Fresh<span>Mart</span></h2>
        </div>
        
        <nav className="nav-list">
          <div className="nav-group-label">OVERVIEW</div>
          <NavLink to="/main" className="nav-item">
          Live Dashboard
          </NavLink>
          <NavLink to="/product" className="nav-item">
          Product Catalog
          </NavLink>
          <NavLink to="/stock" className="nav-item">
          Stock & Supply
          </NavLink>
         
          
          <div className="nav-group-label">REPORTS</div>
          <button className="nav-item">Revenue Analytics</button>
          <button className="nav-item">Customer Loyalty</button>
        </nav>

        <div className="sidebar-footer">
          <p>Logged in as <strong>Store Mgr</strong></p>
          <button className="btn-logout">Sign Out</button>
        </div>
      </aside>

        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/stock" element={<h1>Stock Page</h1>} />
        </Routes>
    </div>
  );
}

export default App;