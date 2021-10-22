import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h4 className="mutual-aid-btn">Mutual Aid Resource</h4>
      </Link>
      <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
        <h4 className="right-side-nav" id="about">About</h4>
      </Link>
      <Link to="/add" style={{ textDecoration: "none", color: "inherit" }}>
        <h4 className="right-side-nav" id="add">Add A Person In Need</h4>
      </Link>
    </nav>
  );
}

export default Header;
