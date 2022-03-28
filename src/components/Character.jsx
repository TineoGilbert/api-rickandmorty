import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getSingleCharacter } from '../functions/GetSingleCharacter';

const Character = () => {

    const [character, setCharacter] = useState(null);

    const params = useParams(null);

    useEffect(() =>{
        getSingleCharacter(params.id, setCharacter);
    },[])


  return (
    <>
      { character != null ?
       ( <div className='container'>
           <h1>{character.name}</h1>
           <img src={character.image} alt="img" />

           <div className='container mt-3'>
           <a href={`/character/${character.id + 1}`} class="btn btn-dark">
                    Next
                  </a>

                  <a href={`/character/${character.id - 1}`} class="btn btn-secondary" style={{marginLeft:'10px'}}>
                    Go Back
                  </a>
           </div>
       </div>
       
       ):
       ('')}
    </>
  )
}

export default Character