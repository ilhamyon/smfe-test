import { StyledNavLinks } from "./NavLinks.style";
import navLinks from "../../data/nav-links";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <StyledNavLinks>
      {navLinks.map((navLink, index) => (
        <NavLink key={`${navLink.text}-${index}`} url={navLink.url}>
          {navLink.text}
        </NavLink>
      ))}
    </StyledNavLinks>
  );
};

export default NavLinks;
