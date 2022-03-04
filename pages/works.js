import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbADwebmanager from '../public/images/thumbADwebmanager.jpg'
import thumbTrivial from '../public/images/thumbTrivial.jpg'
import Layout from '../components/layout/article'

const Works = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Heading as="h3" fontSize={20} mb={4} mt={5}>
          Collaborations
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="adwebmanager"
              title="ADwebmanager"
              thumbnail={thumbADwebmanager}
            >
              A web interface for Active Directory
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Divider />

        <Heading as="h3" fontSize={20} mb={4} mt={5}>
          Personal Proyects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="trivial" title="Trivial" thumbnail={thumbTrivial}>
              A game in which players are asked questions about different topics
              and they have to get as many correct answers as possible.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
