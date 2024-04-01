// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <nav className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-img"
      />
      <ul className="nav-options-container">
        <li className="nav-option">Home</li>
        <li className="nav-option">Products</li>
        <li className="nav-option">Cart</li>
        <button type="button" className="logout-btn">
          Logout
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-logo"
        />
      </ul>
    </nav>
    <div className="nav-images">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-option-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-option-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-option-img"
      />
    </div>
  </>
)
export default Header
