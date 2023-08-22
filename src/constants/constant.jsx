export const API_KEY =process.env.REACT_APP_API_KEY
export const BASE_URL ='https://api.themoviedb.org/3'
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original'
export const trending = 'trending/all/week?api_key='
export const action = 'discover/movie?with_genres=28&api_key='
export const comedy = 'discover/movie?with_genres=35&api_key='
export const horror = 'discover/movie?with_genres=27&api_key='
export const documentary = 'discover/movie?with_genres=99&api_key='
export const video = (id,api_key)=> `movie/${id}/videos?api_key=${api_key}`