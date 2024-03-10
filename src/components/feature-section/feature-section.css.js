import styled from "styled-components";

export const SectionContainer = styled.section`
  color: white;
  padding: 40px; 
  border-radius: 8px; 
  margin: 20px; 
  
  max-width: 400px; 
  text-align: center; 
`;
export const SectionHeading = styled.h2`
  font-size: 1.8em; 
  margin-bottom: 0.5em; 
  text-align: left;
  
`;

export const SectionSubText = styled.p`
  margin-bottom: 2em; 
  text-align: left;
  
  font-size: 0.7em; 

`;

export const FeatureList = styled.ul`
  list-style: none; 
  padding: 0; 
`;

export const FeatureItem = styled.li`
  font-size: 0.7em; 
  margin-bottom: 1em; 
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:10px;
`;

export const ImageContainer = styled.div`
  img {
    max-width:400px;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  margin-bottom:100px;
`;

export const FeatureSectionContainer = styled.div`
  background: #5A89EA;
  z-index: 2 !important; 

  display: flex;
  flex-direction: ${({ imgPosition }) => imgPosition === 'left' ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: center; 
  padding: ${({ spacing }) => spacing || '50px'}; 

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
