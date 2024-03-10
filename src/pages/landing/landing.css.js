import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
`;

export const CurveWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 80vh; 
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;


  svg {
    width: 100%;
    height: auto;
    display: block; 
    preserveAspectRatio: xMidYMid meet;
  }

  @media (max-width: 768px) {
    top: 40vh; 

  }
  
  @media (max-width: 480px) {
    height: 30vh; 
    top: 20vh; 
    background-size: auto 100%; 
  }
`;