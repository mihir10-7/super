import React from 'react';
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
          <button className="nav-item active">Live Dashboard</button>
          <button className="nav-item">Product Catalog</button>
          <button className="nav-item">Stock & Supply</button>
          
          <div className="nav-group-label">REPORTS</div>
          <button className="nav-item">Revenue Analytics</button>
          <button className="nav-item">Customer Loyalty</button>
        </nav>

        <div className="sidebar-footer">
          <p>Logged in as <strong>Store Mgr</strong></p>
          <button className="btn-logout">Sign Out</button>
        </div>
      </aside>

      {/* Main Board */}
      <main className="main-board">
        <header className="board-header">
          <div className="search-box">
            <input type="text" placeholder="Search inventory..." />
          </div>
          <div className="profile">
            <div className="notif">🔔</div>
            <img src="https://ui-avatars.com/api/?name=Fresh+Mart&background=4a7c59&color=fff" alt="user" />
          </div>
        </header>

        <section className="content">
          <div className="welcome-hero">
            <h1>Good morning, Alex.</h1>
            <p>Your market is 12% busier than last Saturday.</p>
          </div>

          <div className="summary-grid">
            <div className="summary-card gold">
              <span className="card-tag">Today's Sales</span>
              <h3>$14,205.90</h3>
              <p>+340 new transactions</p>
            </div>
            <div className="summary-card green">
              <span className="card-tag">Active Inventory</span>
              <h3>2,401 Items</h3>
              <p>12 categories active</p>
            </div>
            <div className="summary-card clay">
              <span className="card-tag">Orders Pending</span>
              <h3>18 Orders</h3>
              <p>Needs fulfillment</p>
            </div>
          </div>

          <div className="data-section">
            <div className="recent-activity">
              <div className="section-head">
                <h3>Low Stock Alerts</h3>
                <button className="btn-link">View All</button>
              </div>
              <ul className="alert-list">
                <li>
                  <span className="product-name">Organic Bananas</span>
                  <span className="stock-label critical">Only 4kg left</span>
                </li>
                <li>
                  <span className="product-name">Almond Milk (1L)</span>
                  <span className="stock-label warning">12 units left</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;