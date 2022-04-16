import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt, ...props }) => (
  <Image borderRadius="lg" src={src} alt={alt} mb={4} {...props} />
)

export const WorkFirstImage = ({ src, alt }) => (
  <Image
    borderRadius="lg"
    w="full"
    h={{ base: '6rem', md: '10rem' }}
    src={src}
    alt={alt}
    mb={4}
    objectFit="cover"
    objectPosition="top"
  />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
