import styled from "styled-components";
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";


export const Nav = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  position: fixed;
  top: 0;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  z-index: 5;

  @media (max-width: 768px) {  
    width: 80%;   
  }

  @media (max-width: 576px) {  
    width: 80%;  
    margin-top: 30px;
    margin-left: 15px;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  padding: 0.5em; 
  border-radius: 10px; 

`;
export const StyledLogo = styled.img`
  width: 131px; 
  height: 132px;
  margin-left:50px;

  @media (max-width: 992px) {  
    width: 100px;  
    height: 100px;
  }

  @media (max-width: 768px) {  
    width: 80px;   
    height: 80px;
  }

  @media (max-width: 576px) {  
    width: 60px;   
    height: 60px;
    margin-left:15px;

  }
`;

export const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
    background-color: #5A89EA; 
  z-index: 4; // Below the navbar but above other content
`;

export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: white; 

  &:hover,
  &:active,
  &:visited {
    text-decoration: none; 
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 63px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    background-color: rgba(90, 137, 234, 0.95); 
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    width: 100vw; 
    height: 100vh; 
    z-index: 4;
    transition: all 0.3s ease; 
  }
`;


export const DemoButton = styled.button`
  padding: 16px 20px;
  font-weight: 600;
  font-size: 16px; 
  color: white;
  background: #5A89EA;
  font-family: 'Poppins', sans-serif; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease; 

`;

export const BurgerIcon = styled(FaBars)`
  display: none;
  width: 44px;
  height: 44px;
  z-index:5;

  @media (max-width: 768px) { 
    display: block;
    color: white;
    cursor: pointer;
    margin-left:auto;
  }
`;
