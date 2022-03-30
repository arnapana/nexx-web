import React from 'react'
import type { NextPage } from 'next'
import SocialContact from './social-contact'
import SerivceHighlight from './service-highlight'

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
      {/* Highligt */}
      <SerivceHighlight />

      {/* Review */}

      {/* Introduction */}

      {/* Social Contact */}
      <SocialContact />
    </Container>
  )
}
