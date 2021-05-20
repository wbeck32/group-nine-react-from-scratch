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
        query,
        setQuery
    ] = useState('')

    const [
        movieList,
        setMovieList
    ] = useState([])

    const handleChange = e => {
        let q = encodeURI(e.target.value)
        setQuery(e.target.value)
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}&include_adult=false&query=${q}`)
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
            })
            .catch(error => {
                console.error(error);
            })
    }
    
    return (
        <Container>
            <>
                <Search options={movieList} handleChange={e=>handleChange(e)}/>
                <MovieList query={query} options={movieList}/>
            </>
        </Container>
    )
}
	
export default Main
