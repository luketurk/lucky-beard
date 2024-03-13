import styled from "styled-components";

export const SectionContainer = styled.section`
  color: white;
  padding: 40px;
  border-radius: 8px;
  margin: 20px;
  max-width: 400px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px 10px;
  }
`;
export const SectionHeading = styled.h2`
  font-size: 1.8em;
  margin-bottom: 0.5em;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

export const SectionSubText = styled.p`
  margin-bottom: 2em;
  text-align: left;
  font-size: 0.7em;

  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const FeatureTextContainer = styled.div`
  margin-left: 16px;
  text-align: left;
  flex: 1;
`;

export const FeatureItem = styled.li`
  font-size: 0.8em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    max-width: 200px;
    height: auto;

    @media (min-width: 768px) {
      max-width: 100%;
      height: auto;
    }

    @media (min-width: 1024px) {
      max-width: 400px;
      height: auto;
    }
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  margin-bottom: 100px;
`;

export const FeatureSectionContainer = styled.div`
  background: #5a89ea;
  position: relative;
  z-index: 4;
  top: 0;
  display: flex;
  flex-direction: ${({ imgPosition }) =>
    imgPosition === "left" ? "row" : "row-reverse"};
  align-items: center;
  justify-content: center;
  padding: ${({ spacing }) => spacing || "50px"};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
