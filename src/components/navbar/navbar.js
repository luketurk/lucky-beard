import React from "react";

import Logo from "../../assets/images/Logo.png";
import {
  BurgerIcon,
  DemoButton,
  Nav,
  NavItemWrapper,
  Overlay,
  StyledLink,
  StyledLogo,
} from "./navbar.styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(true);
      } else if (window.innerWidth <= 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);


  const handleNavigation = (elementId) => {
    const navigateAndScroll = () => {
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(navigateAndScroll, 0);
    } else {
      navigateAndScroll();
    }
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Nav>
        <StyledLogo src={Logo} alt="Logo" />
        <NavItemWrapper isOpen={isOpen}>
          <StyledLink
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("for-buyers");
              setIsOpen(false);
            }}
          >
            For buyers
          </StyledLink>
          <StyledLink
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("for-sellers");
              setIsOpen(false);
            }}
          >
            For sellers
          </StyledLink>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <DemoButton>Request a demo</DemoButton>
          </Link>
        </NavItemWrapper>
        <BurgerIcon onClick={() => setIsOpen(!isOpen)} />
      </Nav>
    </>
  );
};

export default NavBar;
