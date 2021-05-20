import React, {useState, useEffect} from 'react';
import {Container} from '@material-ui/core';
import Search from './Search'
import MovieList from './MovieList'

const Main = props => {
    console.log('props in main.js:', props);
    const [
        query,
        setQuery
    ] = useState()
    const [
        movieList,
        setMovieList
    ] = useState([])


    const handleChange = async e => {
        let query = encodeURI(e.target.value)
        console.log('e.target.value:', query);
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(resp => {
                console.log('resp:', resp);
                setMovieList([
                    ...movieList,
                    resp.results
                ])
                console.log('movieList:', movieList.length);
                query = decodeURI(query)
                // const filtered = movieList.results.filter(movie =>{
                //     console.log('movie:', movie);
                //     const filter = (movie.indexOf(query)>-1)	
                //     console.log('movie.indexOf(query)>-1:', movie.title,movie.indexOf(query)>-1);
                // })
                // console.log('filtered:', filtered);
            })
            .catch(error => {
                console.error(error);
            })
    }
    
    return (
        <Container>
            <>
                <Search options={movieList} handleChange={e=>handleChange(e)}/>
                <MovieList options={movieList} handleChange={e=>handleChange(e)}/>
            </>
        </Container>
    )
}
	
export default Main
