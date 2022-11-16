import { useTheme } from "styled-components";
import { Logo, NavContainer, StyledNavbar } from "./index.style";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const theme = useTheme();

  return (
    <StyledNavbar>
      <NavContainer className="container">
        <Logo href="/">
          <img src={theme.images.logo} alt="" />
        </Logo>
        <NavLinks />
      </NavContainer>
    </StyledNavbar>
  );
};

export default Navbar;
