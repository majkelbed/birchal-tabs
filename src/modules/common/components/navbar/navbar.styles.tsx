import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  margin-bottom: 1.25rem;
  padding: 0 1.5rem;
  border-bottom: 1.5px solid #ebecf0;
`;

export const StyledNavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const StyledNavItem = styled.li`
  padding: 0.25rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.625rem;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.3px;
  text-decoration: none;
  color: #5e6484;
`;

export const StyledNavLinkName = styled.span`
  margin-right: 0.5rem;
`;

export const StyledNavLinkCount = styled.span`
  width: 1.75rem;
  height: 1.5rem;
  padding: 0.125rem 0.375rem;
  border-radius: 0.5rem;
  background: #f0e9fa;
`;
