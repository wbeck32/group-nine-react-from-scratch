import React, {useState} from 'react';
import {Container} from '@material-ui/core';
import MovieList from './MovieList'
import '../style.scss'
import Search from './Search';

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

	const [
		currentPage,
		setCurrentPage
	] = useState(1)
	
	const handleChange = e => {
		setCurrentPage(currentPage+1)
		setQuery(e)
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&page=${currentPage}&query=${encodeURI(e)}`)
			.then(response => {
				console.log('response:', response);
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error('Something went wrong on api server!');
				}
			})
			.then(resp => {
				const results = resp.results
				setMovieList(results)
				fetchPrimaryGenre(movieList)
				console.log('MovieList:', movieList);
			})
			.catch(error => {
				console.error(error);
			})
	}

	const fetchPrimaryGenre = movies =>{
		console.log('movies:', movies);
	}
	
	return (
		<Container>
			<>
				<Search movieList={movieList} handleChange={e=>handleChange(e)}/>
				<MovieList handleChange={e=>handleChange(e)} options={movieList} query={query}/>
			</>
		</Container>
	)
}
	
export default Main
