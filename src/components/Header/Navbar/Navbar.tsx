import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;