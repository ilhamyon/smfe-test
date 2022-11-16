import { useTheme } from "styled-components";
import { Logo, NavContainer, StyledNavbar } from "./index.style";
import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";

const Navbar = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 400;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

  return (
    <>
     
      {
        isVisible 
         && 
       <div id="hide">
          <StyledNavbar>
            <NavContainer className="container">
              <Logo href="/">
                <img src={theme.images.logo} alt="" />
              </Logo>
              <NavLinks />
            </NavContainer>
          </StyledNavbar>
       </div>
      }
    </>
   
  );
};

export default Navbar;


