import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${({theme}) => theme.sizes.navbarHeight};

  position: fixed;
  top: 0;

  z-index: 100;
`;

export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.a`
  display: block;
  width: 122px;

  > img {
    width: 100%;
  }
`;
