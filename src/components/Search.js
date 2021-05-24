import React,{useState, useEffect} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from '@material-ui/core'
import MovieList from './MovieList'

const Search = props => {
	const {movies, handleChange, query} = props
	console.log(2, "Search", movies);
	
	const [
		options,
		setOptions
	] = useState(movies)
	
	const [
		isLoading,
		setIsLoading
	] = useState(false)
	
	return (
		<div style={{ width: 300 }}>
			<Autocomplete
				autoComplete
				id="free-solo-demo"
				freeSolo
				loading={isLoading}
				options={options.map(c =>{c.title})}
				open={true}
				onInputChange={e=>handleChange(e.target.value)}
				getOptionLabel={option=>option.id}
				renderInput={(params) => (
					<TextField {...params} label="Enter some text" margin="normal" variant="outlined" />
				)}
			/>
		</div>	
	);
}
		
export default Search
