import { NextPage } from 'next'
import { Container, HeroBanner, BreadCrumb, ImageLoader } from '@components/common'
import { TelephamacyContainer, ContactTelephamacyContainer } from '@containers/telephamacy'
import { ButtonContact } from '@components/button-contact'

const Telephamacy: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/telepharmacy.png'>
        <div className='flex relative mb-10'>
          <p className='font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] 2xl:text-[80px] 2xl:leading-[90px]'>
            Telepharmacy
          </p>
          <div className='flex absolute top-[30%] -right-[20%] items-center'>
            <ImageLoader src='/images/carousel/left-arrow-green.png' width={84} height={52} />
          </div>
        </div>
        <div className=''>
          <p className='font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] md:text-3xl 2xl:text-[2.5rem] 2xl:leading-[55px]'>
            ปรึกษาเภสัชกรและแพทย์ออนไลน์
          </p>
        </div>
      </HeroBanner>
      <BreadCrumb outerClassName='container mx-auto my-10' />

      <TelephamacyContainer />
      <ContactTelephamacyContainer />
    </Container>
  )
}

export default Telephamacy
