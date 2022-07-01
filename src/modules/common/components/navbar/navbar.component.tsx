import { NavLinkProps, useLocation, useResolvedPath } from "react-router-dom";
import { useGetFilms } from "../../../films/services/films.api";
import { useGetPeople } from "../../../people/services/people.api";
import {
  StyledNav,
  StyledNavItem,
  StyledNavItems,
  StyledNavLink,
  StyledNavLinkCount,
  StyledNavLinkName,
} from "./navbar.styles";

const getActiveClass: NavLinkProps["className"] = ({ isActive }) =>
  isActive ? "active" : undefined;

export const Navbar = () => {
  const films = useGetFilms();
  const people = useGetPeople();
  const location = useLocation();

  const navItems = [
    {
      // This could be some global var with all links in app so you can manage routing from 1 place, single source of truth
      to: "/films",
      title: "Films",
      count: films.data?.count,
    },
    {
      to: "/people",
      title: "People",
      count: people.data?.count,
    },
    {
      to: "/planets",
      title: "Planets",
      count: "asd",
    },
  ];
  const activeItemIndex = navItems.findIndex(({ to }) => to === location.pathname);

  return (
    <StyledNav activeItemIndex={activeItemIndex}>
      <StyledNavItems>
        {navItems.map(({ to, title, count }) => (
          <StyledNavItem key={to}>
            <StyledNavLink className={getActiveClass} to={to}>
              <StyledNavLinkName>{title}</StyledNavLinkName>
              <StyledNavLinkCount>{count}</StyledNavLinkCount>
            </StyledNavLink>
          </StyledNavItem>
        ))}
      </StyledNavItems>
    </StyledNav>
  );
};
