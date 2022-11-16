import { NavLinkStyled, LinkStyled } from "./NavLink.style";

const NavLink = ({ children, url }) => {
  return (
    <NavLinkStyled>
      <LinkStyled to={url}>{children}</LinkStyled>
    </NavLinkStyled>
  );
};

export default NavLink;
