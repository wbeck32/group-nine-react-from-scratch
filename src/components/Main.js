import React, {useState, useEffect} from 'react';
import {Container} from '@material-ui/core';
import Search from './Search'
import MovieList from './MovieList'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Main = () => {
	console.log(1,'Main')
	const [
		query,
		setQuery
	] = useState('')
	
	const [
		movieList,
		setMovieList
	] = useState([])
	
	const handleChange = e => {
		const q = e.target.value
		setQuery(e.target.value)
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&page=1&query=${encodeURI(q)}&append_to_response=images`)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error('Something went wrong on api server!');
				}
			})
			.then(resp => {
				const results = resp.results
				setMovieList(results)
			})
			.catch(error => {
				console.error(error);
			})
	}
	
	return (
		<Container>
			<>
				<div style={{ width: 300 }}>
					<Autocomplete
						autoComplete
						id="free-solo-demo"
						freeSolo
						open={false}
						options={movieList.map(o=>o.title)}
						renderInput={(params) => (
							<TextField {...params}
								label="freeSolo" onChange={(e)=>handleChange(e)} margin="normal" variant="outlined" />
						)}
					/>
				</div>
				<MovieList options={movieList} query={query}/>
			</>
		</Container>
	)
}
	
export default Main
