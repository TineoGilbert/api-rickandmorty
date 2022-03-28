import axios from 'axios'

const getSingleCharacter = async(id, state) =>{
    const singleCharacter = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    state(singleCharacter.data);
}


export {getSingleCharacter}