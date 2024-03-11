import React from 'react';
import { ButtonWrapper, Hero, SubTitle, Title } from './hero-section.css';
import { AppleStoreButtonSVG, ArrowIcon, GooglePlaystoreButtonSVG } from '../../assets/images/icon.svgs';
import NavBar from '../navbar/navbar';

const HeroSection = () => {
  return (
    <>
        <Hero>
          <NavBar/>
        <Title>A New Era for Test-Drives</Title>
        <SubTitle>
        Enhanced test drive experience through the connection of people in a secure, scheduled and convenient manner to ensure the seamless buying and selling of new and used vehicles. 
        </SubTitle>
        <ButtonWrapper>
        <AppleStoreButtonSVG/>
        <GooglePlaystoreButtonSVG/>
        </ButtonWrapper>

      </Hero>
    </>
  );
};

export default HeroSection;