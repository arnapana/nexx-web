import { NextPage } from 'next'
import { ButtonContact } from '@components/index'
import { Container, HeroBanner, BreadCrumb, ImageLoader } from '@components/common'
import {
  HeaderContentContainer,
  ContactContainer,
  OurBranchContainer,
  RelativeBranchContainer
} from '@containers/ourstore'

const Stores: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/stores.png'>
        <div className='flex relative mb-10'>
          <p className='font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] 2xl:text-[80px] 2xl:leading-[90px]'>
            Our Stores
          </p>
          <div className='flex absolute top-[30%] -right-[30%] items-center'>
            <ImageLoader src='/images/carousel/left-arrow-green.png' width={84} height={52} />
          </div>
        </div>
        <div className=''>
          <p className='font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] md:text-3xl 2xl:text-[2.5rem] 2xl:leading-[55px]'>
            ร้านยาของเรา
          </p>
        </div>
      </HeroBanner>
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <HeaderContentContainer />
      <OurBranchContainer />
      <RelativeBranchContainer />

      <ContactContainer />
      <style jsx>{`
        th,
        td {
          padding: 0.5rem 1rem;
        }
      `}</style>
    </Container>
  )
}

export default Stores
