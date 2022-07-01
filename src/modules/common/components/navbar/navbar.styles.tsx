import { NavLink } from "react-router-dom";
import styled from "styled-components";

// TODO: move colors to design systme file
export const StyledNav = styled.nav<{ activeItemIndex: number }>`
  position: relative;
  margin-bottom: 1.25rem;
  padding: 0 1.5rem;
  border-bottom: 1.5px solid #ebecf0;

  &::after {
    content: '';
    position: absolute;
    bottom: -1.5px;
    left: 1.5rem;
    display: inline-block;
    width: 78px;
    height: 1.5px;
    background: #6922d3;
    /* TODO: Working bad, should be aware of item offset or sth */
    transform: translate3d(${({ activeItemIndex }) => activeItemIndex * 100}%, 0, 0);
    /* TODO: Can think of react-spring lib so its smoother/more bouncy */
    transition: transform 0.2s ease-in-out;
  }
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

export const StyledNavLinkName = styled.span`
  margin-right: 0.5rem;
`;

export const StyledNavLinkCount = styled.span`
  width: 1.75rem;
  height: 1.5rem;
  padding: 0.125rem 0.375rem;
  border-radius: 0.5rem;
  background: #ebecf0;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.3px;
  text-decoration: none;
  color: #5e6484;

  &.active {
    color: #6922d3;
  }

  /* TODO: maybe there is cleaner way, except children as a function */
  &.active ${StyledNavLinkCount} {
    background: #f0e9fa;
  }
`;
