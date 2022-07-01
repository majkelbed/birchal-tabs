import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="films">Films</NavLink>
        </li>
        <li>
          <NavLink to="people">People</NavLink>
        </li>
        <li>
          <NavLink to="planets">Planets</NavLink>
        </li>
      </ul>
    </nav>
  );
};
