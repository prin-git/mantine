import { NavLink } from "react-router-dom";

const Header = () => (
  <>
    <header className="header-style">
      <div>App Name</div>
    </header>
    <nav className="nav-bar">
      <div style={{ position: "relative" }} className="linkwrap">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "links")}
        >
          Home
        </NavLink>

        <div className="sublink">fgggfgfgfgfg</div>
      </div>
      <NavLink
        to="/page2"
        className={({ isActive }) => (isActive ? "link-active" : "links")}
        aria-label="t dummy link, no navigation"
      >
        Page2
      </NavLink>
      <NavLink
        to="/dummy-link2"
        className={({ isActive }) => (isActive ? "link-active" : "links")}
        aria-label=" dummy link, no navigation"
      >
        DummyLink2
      </NavLink>{" "}
    </nav>
  </>
);

export default Header;
