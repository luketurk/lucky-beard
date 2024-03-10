import styled from 'styled-components';
import TrustSectionImage from '../../assets/images/trust-builder-section.png'

export const TrustSectionCover = styled.div`
  background-image: url(${TrustSectionImage});
  background-size: cover;
  background-color:#5A89EA;
  background-position: center;
  height: 100vh; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  color: white;
  text-align: center;
  position: relative;
  padding: 15px;
//   z-index:-2;

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

export const SubTitle = styled.h5`
  font-size: 1.5rem; 

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem; 
  }
`;
