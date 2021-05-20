import React, {useState, useEffect} from 'react';
import {Container} from '@material-ui/core';
import Search from './Search'
import MovieList from './MovieList'

const Main = () => {
    const [
        pageNumber,
        setPageNumber
    ] = useState(1)

    const [
        movieList,
        setMovieList
    ] = useState([])


    const handleChange = e => {
        let query = encodeURI(e.target.value)
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}&include_adult=false&query=${query}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(resp => {
                setPageNumber(pageNumber+1)
                const results = resp.results
                setMovieList(movieList.concat(results))
                query = decodeURI(query)
                console.log('movieList after concat:', movieList.length);
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
