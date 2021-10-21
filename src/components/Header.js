import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div className="mutual-aid-btn">Mutual Aid Resource</div>
            </Link>
            <Link to="/home/about">
                <div className="right-side-nav">About</div>
            </Link>
            <Link to="/home/contact">
                <div className="right-side-nav">Contact</div>
            </Link>
        </nav>
    )
}

export default Header;