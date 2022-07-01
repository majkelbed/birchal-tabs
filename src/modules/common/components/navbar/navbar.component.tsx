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

export const Navbar = () => {
  const films = useGetFilms();
  const people = useGetPeople();

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
          <StyledNavLink to="people">
            <StyledNavLinkName>People</StyledNavLinkName>
            <StyledNavLinkCount>{people.data?.count}</StyledNavLinkCount>
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="planets">
            <StyledNavLinkName>Planets</StyledNavLinkName>
            <StyledNavLinkCount>asd</StyledNavLinkCount>
          </StyledNavLink>
        </StyledNavItem>
      </StyledNavItems>
    </StyledNav>
  );
};
