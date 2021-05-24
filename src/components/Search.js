import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const Search = props => {
	console.log('props:', props);
	const {handleChange,movieList} = props
	
	return (
		<div style={{ width: 300 }}>
			<Autocomplete
				autoComplete
				id="free-solo-demo"
				freeSolo
				open={false}
				options={movieList.map(o=>o.title)}
				renderInput={(params) => (
					<TextField {...params}
						label="Enter a movie title" onChange={(e)=>handleChange(e.target.value)} margin="normal" variant="outlined" />
				)}
			/>
		</div>



	)
}

export default Search
