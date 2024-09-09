import axios from 'axios';

export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';

export const fetchCharacters = (page = 1) => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data.results });
    } catch (error) {
      console.error(error);
    }
  };
};
