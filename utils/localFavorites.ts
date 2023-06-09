const toggleFavorite = (id: number) => {
  console.log('toggleFavorite called')

  let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' )
  
  if( favorites.includes(id) ){
      favorites = favorites.filter( pokeId => pokeId !== id )
  } else {
    favorites.push( id )
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existPokemonInFavorites = (id: number): boolean => {

  if ( typeof window === 'undefined' ) return false
  
  const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' )
  return favorites.includes(id)
}

const pokemos = (): number[] => {
  return JSON.parse( localStorage.getItem('favorites') || '[]' )
}

export default {
  existPokemonInFavorites,
  toggleFavorite,
  pokemos
}