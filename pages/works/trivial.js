import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, WorkFirstImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => (
  <Layout title="Trivial">
    <Container maxW="container.md">
      <WorkFirstImage src="/images/thumbTrivial.jpg" alt="Trivial" />
      <Title>
        Trivial <Badge>2022-</Badge>
      </Title>
      <P>
        <strong>Trivial</strong> is a type of game in which players are asked
        questions about different topics and they have to get as many correct
        answers as possible. Besides having the benefit of improving and
        expanding your knowledge, either general or in more specific areas, this
        style of game is designed so that the contestants have fun playing, and
        its main objective is to create discussion and healthy debate among
        participants. In fact it is not mandatory that Trivia winners have to
        get a prize and almost everyone is ok with that as their main objective
        is to have fun and learn at the same time. Trivia questions and answers
        can be adapted to any audience and can be used in schools and
        universities to assist in language skills development and to test
        knowledge and skills levels.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="/404">
            /404 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Souce Code</Meta>
          <Link href="/404">
            /404 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, Node.JS, React.JS, Next.JS, Chackra-UI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/thumbTrivial.jpg" alt="Trivial" />
      <WorkImage src="/images/thumbTrivial.jpg" alt="Trivial" />
    </Container>
  </Layout>
)

export default Work
