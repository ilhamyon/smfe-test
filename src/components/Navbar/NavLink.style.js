import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const LinkStyled = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  position: relative;

  &.active,
  &:hover {
    color: inherit;

    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: "";
    width: 100%;
    height: 5px;
    background: #fff;
    opacity: 0;
    position: absolute;
    left: 0;
    bottom: -5px;

    transform: translateY(100%);
  }
`;
