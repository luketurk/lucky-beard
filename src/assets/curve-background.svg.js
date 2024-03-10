import styled from "styled-components";

export const StyledSVG = styled.svg`
  width: 100%;
  height: auto;

  @media (max-width: 480px) {
    g.arrow {
      transform: scale(20) translate(-20px, 10px);
      transform-origin: center center;
    }
  }
`;


    export const CombinedSVG = () => (
        <StyledSVG viewBox="0 -20 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Curve SVG paths */}
          <ellipse cx="959.5" cy="300" rx="1102.5" ry="275" fill="white" />
          <ellipse cx="959.5" cy="425" rx="1102.5" ry="411" fill="#030303" />
        <rect y="271" width="1920" height="1500" fill="#5A89EA" />

          <path fillRule="evenodd" clipRule="evenodd" d="M1934.16 273H-15.1553C169.917 110.611 536.948 0 959.5 0C1382.05 0 1749.08 110.611 1934.16 273Z" fill="#5A89EA" />
          

          <g id="arrow" transform="translate(927 -20)"> 
            <circle cx="34" cy="25" r="25" fill="#030303" />
            <circle cx="34" cy="25" r="25" fill="url(#paint0_linear)" fillOpacity="0.2" />
            <path d="M34 12L34 36" stroke="#5A89EA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 25.0205L34.0208 37.0413L46.0416 25.0205" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </g>
      
          <defs>
            <filter id="filter0_d_1_367" x="0.534883" y="0" width="66.9302" height="66.9302" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="8.46512" />
              <feGaussianBlur stdDeviation="4.23256" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_367" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_367" result="shape" />
            </filter>
            <linearGradient id="paint0_linear" x1="34" y1="0" x2="34" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </StyledSVG>
      );
      