import { useGetFilms } from "../../../films/services/films.api";
import {
  StyledNav,
  StyledNavItem,
  StyledNavItems,
  StyledNavLink,
  StyledNavLinkCount,
  StyledNavLinkName,
} from "./navbar.styles";

export const Navbar = () => {
  const films = useGetFilms();

  return (
    <StyledNav>
      <StyledNavItems>
        <StyledNavItem>
          <StyledNavLink to="films">
            <StyledNavLinkName>Films</StyledNavLinkName>
            <StyledNavLinkCount>{films.data?.count}</StyledNavLinkCount>
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="people">People</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="planets">Planets</StyledNavLink>
        </StyledNavItem>
      </StyledNavItems>
    </StyledNav>
  );
};
