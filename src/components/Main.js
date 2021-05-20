import React, {useState, useEffect} from 'react';
import {Container} from '@material-ui/core';
import Search from './Search'
import MovieList from './MovieList'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Main = () => {
	console.log(1,'Main')
	const top100Films = [
		{ title: 'The Shawshank Redemption', year: 1994 },
		{ title: 'The Godfather', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },
		{ title: 'The Dark Knight', year: 2008 },
		{ title: '12 Angry Men', year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: 'Pulp Fiction', year: 1994 },
		{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
		{ title: 'The Good, the Bad and the Ugly', year: 1966 },
		{ title: 'Fight Club', year: 1999 }
	]
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
	
	const handleChange = e => {
		console.log('e in handle change:', e.target.value,currentPageNumber);
		const q = e.target.value
		setQuery(e.target.value)
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&page=1&query=${encodeURI(q)}`)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error('Something went wrong on api server!');
				}
			})
			.then(resp => {
				setTotalPages(resp.total_pages)
				setCurrentPageNumber(currentPageNumber+1)
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
