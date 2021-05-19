import React, {useState} from 'react';
import {Container} from '@material-ui/core';
import Search from './Search'
import MovieList from './MovieList'

const Main = () => {
    const [
        query,
        setQuery
    ] = useState()
    const value=0;

    const handleChange= e => {
        if(e !== undefined){
            console.log('process.env:', process.env);
            console.info('e:', e, typeof e);
            setQuery(e.target.value)
            encodeURI(query)
            console.log('query:', query);
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
                .then(response => {
                    console.log('response:', response);
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong on api server!');
                    }
                })
                .then(resp => {
                    console.log('resp:', resp);
					
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }
    
    return (
        <Container>
            <>
                <Search value={value} handleChange={e=>handleChange(e)}/>
                <MovieList value={value} handleChange={e=>handleChange(e)}/>
            </>
        </Container>
    )
}
	
export default Main
