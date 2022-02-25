import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    animation: out 0.8s ease;
  }

  @keyframes in {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-180deg);
    }
  }

  @keyframes out {
    from {
      transform: rotate(-180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  &:hover img {
    animation: in 0.8s ease forwards;
  }
`
const Logo = () => {
  const logoSVG = `/images/logoSVG${useColorModeValue('', '-dark')}.svg`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoSVG} alt="logo" width={20} height={20} />
          <Text
            color={useColorModeValue('gray800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Angel Valdés
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
