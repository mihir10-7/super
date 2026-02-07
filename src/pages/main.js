import '../css/app.css'

function Main() {
    return (
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
    )
}

export default Main;
