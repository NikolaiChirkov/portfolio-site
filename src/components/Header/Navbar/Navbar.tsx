import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = (): JSX.Element => (
  <ul className="navbar">
    <li className="navbar_home">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="navbar_programming">
      <NavLink to="/programming">Programming</NavLink>
    </li>
  </ul>
);

export default Navbar;
