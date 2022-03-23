import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, WorkFirstImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => (
  <Layout title="ADwebmanager">
    <Container maxW="container.md">
      <WorkFirstImage src="/images/thumbADwebmanager.jpg" alt="ADwebmanager" />
      <Title>
        ADwebmanager <Badge>2016-</Badge>
      </Title>
      <P>
        A web interface for Active Directory made using Flask and python-ldap,
        focusing in easy of use and simplicity. It's using the connecting user's
        own credentials to connect to the directory and allow a variety of
        operations. The goal is to be able to do most common directory
        operations directly through this web interface rather than have to rely
        on command tools or Windows interfaces.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/Universidad-Tecnologica-CUJAE/AD-webmanager">
            Universidad-Tecnologica-CUJAE / AD-webmanager
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Flask</span>
        </ListItem>
      </List>

      <WorkImage src="/images/thumbADwebmanager.jpg" alt="ADwebmanager" />
      <WorkImage src="/images/thumbADwebmanager.jpg" alt="ADwebmanager" />
    </Container>
  </Layout>
)

export default Work
