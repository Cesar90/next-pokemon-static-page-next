import React from 'react'
import NextLink from 'next/link'
import { useTheme, Text, Spacer, Link } from '@nextui-org/react'
import Image from 'next/image'

export const Navbar = () => {
  const { theme } = useTheme()
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray300.value
    }}>
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        alt="Icon of app"
        width={70}
        height={70}  
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link> 
      </NextLink>
      
      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link>
          <Text color='white' h3>Favourites</Text>
        </Link>
      </NextLink>
      
    </div>
  )
}
