import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { Grid, Card, Row, Text } from '@nextui-org/react'

import { Layout } from '@components/layouts'
import { PokemonCard } from '@components/pokemon'
import { pokeApi } from 'api'
import { PokemonListResponse, SmallPokemon } from 'interfaces'

interface Props{
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  // console.log(pokemons)
  return (
    <Layout title="List of Pokemon">
      {/* Hi, I am here */}
      {/* <Button>
        Hola Mundo
      </Button> */}
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(( pokemon ) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async(ctx) => {
  // const { data } = await //your fetch function here
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1}.svg`
    }
  })

  return {
    props:{
      pokemons: pokemons
    }
  }
}

// export async function getStaticPorps(context){
//   return {
//     props: {}
//   }
// }


export default HomePage