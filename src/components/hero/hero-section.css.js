import styled from "styled-components";
import heroImage from '../../assets/images/hero-image.jpg'; 


export const Hero = styled.div`
  height: 100vh;
  display: flex;
  gap: 25px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  padding: 15px;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${heroImage});
    background-size: cover;
    background-position: center;
    transform: scaleX(-1); 
    z-index: -1; 
  }

  @media (max-width: 768px) {
    height: 70vh;
    padding: 10px;
  }

  @media (max-width: 480px) {
    height: 90vh;
    margin-bottom: 100px;
  }
`;
export const Title = styled.h1`
  font-size: 62px; 

  @media (max-width: 768px) {
    font-size: 46px;
  }

  @media (max-width: 480px) {
    font-size: 37px; 
  }
`;

export const SubTitle = styled.h5`
  width:583px;
  font-size: 16px;
  font-weight:400; 
  line-height: 22.4px;

  @media (max-width: 768px) {
    width:auto;
    font-size: 1rem; 
  }
  
  @media (max-width: 480px) {
    font-size: 1rem; 
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; 
`;

