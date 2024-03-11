import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/images/Logo.png';

const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background: transparent;
position: absolute;
top:0;
margin-top:50px;
margin-left:50px;
margin-right:50px;
left: 20;
z-index: 22;
`;

const NavLink = styled.a`
color: white;
text-decoration: none;
font-family: Poppins, sans-serif;
font-size: 16px;
font-weight: 600;
line-height: 100%;
padding: 0.5em; 
border-radius: 10px; 

&:hover {
  background: rgba(255, 255, 255, 0.2); 
}
`;

const StyledLogo = styled.img`
width: 131px;
height: 132px;
`;

const NavItemWrapper = styled.div`
display: flex;
align-items: center;
gap: 10px; 
`;

const DemoButton = styled.button`
padding: 16px 20px;
font-weight: 600;
font-size: 16px; 
color: white;
background: #5A89EA;
border: none;
border-radius: 10px;
cursor: pointer;
transition: background-color 0.3s ease; 

&:hover {
  background: #3A69CA; 
}
`;

export const NavBar = () => {
  return (
    <Nav>
      <StyledLogo src={Logo} alt="Logo" />
      <NavItemWrapper>
        <NavLink href="#for-buyers">For buyers</NavLink>
        <NavLink href="#for-sellers">For sellers</NavLink>
        <DemoButton onClick={() => alert('Request a demo clicked')}>Request a demo</DemoButton>
      </NavItemWrapper>
    </Nav>
  );
};

export default NavBar;
