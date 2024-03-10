import styled from 'styled-components';
import TrustSectionImage from '../../assets/images/trust-builder-section.png'

export const TrustSectionCover = styled.div`
  background-image: url(${TrustSectionImage});
  background-size: cover;
  background-color: #5A89EA;
  background-position: center;
  min-height: 100vh; 
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  padding: 15px;
`;


export const Title = styled.h1`
  font-size: 62px; 
  margin: -10px;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 46px;
    margin: 0px;

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

export const IconWrapper = styled.div`
  display: flex;
  justify-content: start;
`;


export const CardTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif; 
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: -15px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const CardDescription = styled.h5`
  font-family: 'Poppins', sans-serif; 
  font-weight: 400;
  font-size: 13px;
  line-height: 18.2px; 
  
`;
export const CardWrapper = styled.div`
  width: 172px;
  padding: 17px;
  height: auto; 
  border-radius: 10px;
  border: 1px solid #E9EBEF;
  display: flex;
  background: white; 
  color: black;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
  flex-direction: column;
  text-align: left; 

  @media (max-width: 480px) {
    font-size: 20px;
  }
}`


export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items:start;

  gap: 20px; 
  position: relative;
  padding: 20px; 

  @media (max-width: 768px) {
    align-items:stretch;
  }
`;
