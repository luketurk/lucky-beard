import styled from "styled-components";
import { ArrowIcon } from "../../assets/images/icon.svgs";

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
    top: 60vh; 

  }
  
  @media (max-width: 480px) {
    top: 85vh; 
    background-size: auto 100%; 
  }
`;

export const InnerCurveWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%; // or set to the height of your CurveBackground component
`;

export const StyledArrowIcon = styled(ArrowIcon)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 50px; // or any other fixed size
  height: auto;
  z-index:9999 !important;
`;