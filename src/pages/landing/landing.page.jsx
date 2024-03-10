import React from 'react'

import FeatureSection from '../../components/feature-section/feature-section'
import HeroSection from '../../components/hero/hero-section'
import TrustBuilderSection from '../../components/trust-builder-section/trust-builder-section';

import { CurveBackground } from '../../assets/curve-background.svg';
import { CurveWrapper, PageContainer } from './landing.css';



export default function LandingPage() {
  return (
    <>
      <PageContainer>
        <HeroSection />
        <CurveWrapper>
          <CurveBackground />
        </CurveWrapper>
        <FeatureSection
          heading="Search for the car of your dreams and test drive it"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada habitant odio eu etiam proin odio habitant. Elit felis aliquam suspendisse amet nunc. Erat."
          features={[
            "Multiple filtering options",
            "Test drives with both private sellers or dealerships",
            "Take pictures and notes during test drive"
          ]}
        />

        <FeatureSection
          heading="Only real people"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada habitant odio eu etiam proin odio habitant. Elit felis aliquam suspendisse amet nunc. Erat."
          features={[
            "Secure and verified registration",
            "Direct messaging with the seller",
            "Instant armed response if something goes wrong"
          ]}
          imgPosition='right'

        />
        <TrustBuilderSection/>
      </PageContainer>

    </>
  )
}
