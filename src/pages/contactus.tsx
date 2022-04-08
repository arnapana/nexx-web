import { NextPage } from 'next'
import { BreadCrumb, Container } from '@components/common'
import { ContactusContainer } from '@containers/contactus'

const Contactus: NextPage = () => {
  return (
    <Container>
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <ContactusContainer />
    </Container>
  )
}

export default Contactus
