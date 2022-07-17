import { NextPage } from 'next'
import { ButtonContact } from '@components/index'
import { BreadCrumb, Container, PageSEO } from '@components/common'
import { ContactusContainer, ContactStoreContainer } from '@containers/contactus'

const Contactus: NextPage = () => {
  return (
    <Container>
      <PageSEO title={`Nexx Pharma - Contact Nexx Pharma`} description='Contact Nexx Pharma' />
      {/* Floating Button */}
      <ButtonContact />
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <ContactusContainer />
      <ContactStoreContainer />
    </Container>
  )
}

export default Contactus
