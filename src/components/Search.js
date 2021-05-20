import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Search = props => {
	console.log('props in search:', props);
	const {options, handleChange} = props
	
	return (
		<div style={{ width: 300 }}>
		<Autocomplete
		autoComplete
		id="free-solo-demo"
		freeSolo
		open={false}
		onInputChange={e=>handleChange(e)}
		options={options.map((option) => option.title)}
		renderInput={(params) => (
			<TextField {...params}
			label="freeSolo" margin="normal" variant="outlined" />
			)}
			/>
			</div>
			
			)
		}
		
		export default Search
