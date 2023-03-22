import './Home.css';
import {useFetch} from '../../hooks/useFetch'

import RecipeList from '../../components/RecipeList'

import React from 'react'

export default function Home() {
    const {data, isPending, error } = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
        {error && <p className='errror'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && <RecipeList recipes={data}/>}

    </div>
  )
}
