import React from 'react'
import { CardDescription, CardTitle, CardWrapper, CardsContainer, IconWrapper, SubTitle, Title, TrustSectionCover } from './trust-builder-section.css'
import { BlueFeatureIcon } from '../../assets/images/icon.svgs';

export default function TrustBuilderSection() {

  const cards = [
    {
      title: 'VERIFIED BUYERS',
      description: 'Secure and verified registration',
    },
    {
      title: 'NO TIME WASTERS',
      description: 'Buyers undergo a credit check before to be able to book a test drive',
    },
    {
      title: 'SCHEDULING',
      description: 'Set test drive scheduling',
    },
    {
      title: 'EASY UPLOAD',
      description: 'Add a car ad in minutes via our extensive database of car models',
    },
    {
      title: 'GEO-LOCATED',
      description: 'Notifications to get Geo-located opportunities',
    },
    {
      title: 'CHAT IN A TAP',
      description: 'Direct messaging with buyer',
    },
  ];

  return (
    <TrustSectionCover>
      <Title>Private Seller?</Title>
      <Title>We got your back</Title>

      <SubTitle>Want to sell your current car? Put it on Dealr, schedule appointments and take advantage of our integrated financing engine.</SubTitle>

      <CardsContainer>
        {cards.map((card, index) => (
          <CardWrapper>
            <IconWrapper>
              <BlueFeatureIcon />
            </IconWrapper>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardWrapper>

        ))}
      </CardsContainer>
    </TrustSectionCover>
  )
}
