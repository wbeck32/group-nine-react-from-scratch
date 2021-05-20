import React, {useState, useEffect} from 'react';
import {Container} from '@material-ui/core';
import Search from './Search'
import MovieList from './MovieList'

const Main = () => {
    const [
      currentPageNumber,
      setCurrentPageNumber
    ] = useState(1)

		const [
			totalPages,
			setTotalPages
	] = useState(1)

    const [
        query,
        setQuery
    ] = useState('')

    const [
        movieList,
        setMovieList
    ] = useState([])

// useEffect(()=>{
// 	console.log('effect')
// return setCurrentPageNumber(currentPageNumber+1)

// },[currentPageNumber])


    const handleChange = e => {
        console.log('e in handle change:', e.target.value);
        setQuery(encodeURI(e.target.value))
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPageNumber}&include_adult=false&query=${query}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(resp => {
							setTotalPages(resp.total_pages)
							setCurrentPageNumber(currentPageNumber)
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
                <MovieList options={movieList} query={decodeURI(query)}/>
            </>
        </Container>
    )
}
	
export default Main
