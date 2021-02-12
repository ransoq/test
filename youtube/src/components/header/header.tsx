import { Link } from "react-router-dom";

import './header.css';

const Header = () => {
    return (
        <header className="header row">
        <div className="logoPanel col">
          <Link to="/">
            <div className="logo">YouTube</div>
            <div className="logo-api ml-2">API</div>
          </Link>
        </div>
        <div className="loginPanel col">
          <button className="btn btn-danger mr-4" id="authorize-button">Log in</button>
          <button className="btn btn-danger" id="signout-button">Log out</button>
        </div>
      </header>
    )
}

export default Header;