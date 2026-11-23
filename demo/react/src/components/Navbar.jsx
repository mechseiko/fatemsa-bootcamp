// FILE: src/components/Navbar.jsx | SESSION 7
// <Link> works like <a>, but it changes the page WITHOUT reloading the browser.
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* In JSX we write className instead of class, because class is a reserved word in JavaScript. */}
      <strong>FATEMSA React Demo</strong>
      <Link to="/">Home</Link>
      <Link to="/playground">Playground</Link>
    </nav>
  );
}

export default Navbar;
