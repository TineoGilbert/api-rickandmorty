import axios from 'axios'

const getAllCharacters = async (state) =>{
    const characters = await axios.get('https://rickandmortyapi.com/api/character');
    state(characters.data.results);
}


export { getAllCharacters }