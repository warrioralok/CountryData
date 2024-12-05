/* eslint-disable react/jsx-no-undef */
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1>World Arlus</h1>
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to='/home'>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about'>
                    About
                </NavLink>
              </li>
              <li>
                <NavLink to='/country'>
                    Country
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
