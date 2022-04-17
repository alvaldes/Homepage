import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumb from '../public/images/angel.png'

const Posts = () => (
  <Layout title="Posts">
    <Container maxW="container.md">
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="lafl sdf" thumbnail={thumb} href="/" />
          <GridItem title="aiojf sdalfji" thumbnail={thumb} href="/" />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="post" thumbnail={thumb} href="/" />
          <GridItem title="post" thumbnail={thumb} href="/" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
