import React from 'react'
import type { NextPage } from 'next'
import SocialContact from './social-contact'
import SerivceHighlight from './service-highlight'
import CarouselSlider from './carousel-slider'
import Introduction from './introduction'
import CustomerReview from './customer-review'

import { ButtonContact } from '@components/index'

import { Container } from '@components/common'

//    TODO Create 4 Component
//         1. HighLight
//         2.
//         3. Review
//         4. Intro
//         5. Social

export const HomePage: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />

      <CarouselSlider />
      {/* Highligt */}
      <SerivceHighlight />

      {/* Review */}
      <CustomerReview />

      {/* Introduction */}
      <Introduction />

      {/* Social Contact */}
      <SocialContact />
    </Container>
  )
}
