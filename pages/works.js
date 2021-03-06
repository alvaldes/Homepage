import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbTrivialCard from '../public/images/trivial/thumbCard.jpeg'
import Layout from '../components/layout/article'

const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW="container.md">
        <Heading as="h3" fontSize={20} mb={4} mt={5}>
          Personal Proyects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="trivial"
              title="Trivial"
              thumbnail={thumbTrivialCard}
            >
              A game where players are asked questions on different topics and
              have to get as many answers as possible right.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
