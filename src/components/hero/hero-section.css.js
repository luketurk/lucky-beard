import styled from "styled-components";
import heroImage from '../../assets/images/hero-image.jpg'; 


export const Hero = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 100vh; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  color: white;
  text-align: center;
  position: relative;
  padding: 15px;
  z-index:-2;
  
  @media (max-width: 768px) {
    height: 50vh; 
  }
  
  @media (max-width: 480px) {
    height: 30vh; 
    background-size: auto 100%; 
  }
`;

export const Title = styled.h1`
  font-size: 3rem; 

  @media (max-width: 768px) {
    font-size: 2rem; 
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem; 
  }
`;

