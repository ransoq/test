import { Link } from "react-router-dom";

import './header.css';

const Header = () => {
    return (
        <header className="header row">
        <div className="logoPanel">
          <Link to="/">
            <div className="logo">YouTube</div>
            <div className="logo-api ml-2">API</div>
          </Link>
        </div>
      </header>
    )
}

export default Header;