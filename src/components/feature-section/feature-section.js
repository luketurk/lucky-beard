import React from "react";

import {
  FeatureItem,
  FeatureList,
  FeatureSectionContainer,
  FeatureTextContainer,
  ImageContainer,
  SectionContainer,
  SectionHeading,
  SectionSubText,
  StyledIcon,
  TextContainer,
} from "./feature-section.css";

import { WhiteFeatureIcon } from "../../assets/images/icon.svgs";
import FeatureImage from "../../assets/images/feature-image.png";

export default function FeatureSection({
  heading = "",
  subtext = "",
  features = [],
  imgPosition = "left",
  spacing,
}) {
  return (
    <FeatureSectionContainer spacing={spacing} imgPosition={imgPosition}>
      <ImageContainer>
        <img src={FeatureImage} alt="Description" />
      </ImageContainer>
      <SectionContainer>
        <TextContainer>
          <SectionHeading>{heading}</SectionHeading>
          <SectionSubText>{subtext}</SectionSubText>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <StyledIcon>
                  <WhiteFeatureIcon />
                </StyledIcon>
                <FeatureTextContainer>{feature}</FeatureTextContainer>
              </FeatureItem>
            ))}
          </FeatureList>
        </TextContainer>
      </SectionContainer>
    </FeatureSectionContainer>
  );
}
