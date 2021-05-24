import React, {useEffect, useState} from 'react';
import {Container, TextField} from '@material-ui/core';
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
	
	const handleChange = query => {
		console.log('query:', query);
		setCurrentPage(currentPage+1)
		setQuery(query)
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&page=${currentPage}&query=${encodeURI(query)}`)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error('Something went wrong on api server!');
				}
			})
			.then(resp => {
				const results = resp.results
				const tmp = movieList.concat(results)
				setMovieList(tmp)
			})
			.catch(error => {
				console.error(error);
			})
	}

		
	// const filterMovieList = mL =>{
	// 	console.log('mL:', mL);
	// 	let tmp=[]
	// 	return mL.filter(o=>{
	// 		if(mL.length > 0) {
	// 			const lCTitle = o.title.toLowerCase()
	// 			const lCQuery = query.toLowerCase()
	// 			lCTitle.indexOf(lCQuery)>-1 === true ? tmp.push[0] : null
	// 			return tmp
	// 		}
	// 		return tmp
	// 	})
		
	// }


	const fetchPrimaryGenre = async movies =>{
		console.log('movies in fetch genre:', movies);
		const filtered = await filterMovieList(movies)
		console.log('filtered:', filtered);
		return filtered.map(f=>{
			return fetch(`https://api.themoviedb.org/3/movie/${f.id}?api_key=${process.env.REACT_APP_API_KEY }`)
				.then(details=>{
					return details.json()
				})
				.then(b=>{
					const genreName = b.genres[0].name
					console.log('genreName:', genreName);
					setMovieList({...f, genreName})
					console.log('MovieList:', movieList);
				})
		})
	}
	// const handleFilterOptions = choices => {
	// 	console.log('choices in filter:', choices);
	// 	let tmp=[]
	// 	if(choices) {
	// 		return choices.filter(o=>{
	// 			const lCTitle = o.title.toLowerCase()
	// 			const lCQuery = query.toLowerCase()
	// 			lCTitle.indexOf(lCQuery)>-1 === true ? tmp.push[0] : null
	// 			return tmp
	// 		})
	// 	}
	// }


	
	return (
		<Container>
			<>
				<TextField
					label="Enter a movie title" onChange={(e)=>handleChange(e.target.value)} value={query} />
				{movieList.length > 0 && <Search options={movieList} query={query} />}
				{movieList.length > 0 && 
				<MovieList options={movieList} query={query}/>}
			</>
		</Container>
	)
}
	
export default Main
