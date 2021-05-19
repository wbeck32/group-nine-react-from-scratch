import React from 'react';
import {Container} from '@material-ui/core';
import Search from './Search'
import MovieList from './MovieList'

const Main = () => {
    let value = 0
    const handleChange= e => {
        console.log('e:', e.target.value);


    }
    return (
        <Container>
            <>
                <Search value={value} onChange={e=>handleChange(e)}/>
                <MovieList value={value} onChange={e=>handleChange(e)}/>
            </>
        </Container>
    )
}
	
export default Main
