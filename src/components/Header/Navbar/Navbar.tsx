import { NavLink } from 'react-router-dom';

const Navbar = (): JSX.Element => (
  <ul className="navbar">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/programming">Programming</NavLink>
    </li>
  </ul>
);

export default Navbar;
