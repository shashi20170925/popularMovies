import axios from 'axios';

export const searchMovies_v3 = (searchText: string) => {
    ////full url for images: http://image.tmdb.org/t/p/w185/3jmMRaO8WMjKsf1LWzo6Q6E5zMP.jpg
   return axios.get('https://api.themoviedb.org/3/search/movie?api_key=07d07b85fa33956093a02448d632b1ba&language=en-US&query=game%20of&page=1&include_adult=false')        
}

export const getPopularMovies_v3 = () => {
   return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=07d07b85fa33956093a02448d632b1ba&language=en-US&page=1')
       
}
export const getPopularTV_v3 = () => {
   return axios.get('https://api.themoviedb.org/3/tv/popular?api_key=07d07b85fa33956093a02448d632b1ba&language=en-US&page=1')
}

export const getMoviesWithGenres_v4 = () => {
    const config = {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2QwN2I4NWZhMzM5NTYwOTNhMDI0NDhkNjMyYjFiYSIsInN1YiI6IjU5Yzk1NjI4YzNhMzY4MTNhOTA3NTc4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SJxYuM0RV-rC2ov0HjPwqgoGB1dfmwlKUB1Tf8IaXfM'
        }
    };
    axios.get('https://api.themoviedb.org/4/discover/movie?with_genres=18&'
        + 'primary_release_year= 2016 & api_key=07d07b85fa33956093a02448d632b1ba', config)
        .then((response) => {
            console.log(response.data); // ex.: { user: 'Your User'}
            console.log(response.status); // ex.: 200
        });
}