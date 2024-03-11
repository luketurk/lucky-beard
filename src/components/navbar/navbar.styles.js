import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 2rem; 

  &:last-child {
    margin-right: 0;
  }
`;

export const DemoButton = styled.button`

`;

export const Hero = styled.div`
`;