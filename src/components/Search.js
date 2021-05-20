import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Search = props => {
	const {options, handleChange,currentPageNumber,handlePagination} = props
	console.log(2, 'search');

	const [
		optionList,
		setOptionList
	] = useState(options)	

	const [
		pageNumber,
		setPageNumber
	] = useState(currentPageNumber+1)	
	for (const [
		key,
		value
	] of Object.entries(optionList)) {
		console.log(`${key}: ${value.title}`);
	}
	// console.log('pageNumber in search:', pageNumber,optionList);
	// useEffect(()=>{
	// 	console.log('currentPageNumber in effect:', currentPageNumber);
	// 	if(currentPageNumber < totalPages)	
	// 	{
	// 		console.log('effect: ', currentPageNumber)
	// 		setCurrentPageNumber(currentPageNumber+1)
	// 	}
	// },[currentPageNumber])
	return (
		<div style={{ width: 300 }}>
			<Autocomplete
				autoComplete
				id="free-solo-demo"
				freeSolo
				open={false}
				onInputChange={(e)=>handlePagination(e)}
				options={optionList !== [] && optionList.map(o=>{console.log(o);o.title})}
				// options={optionList !== undefined && optionList.map((option) => option.title)}
				renderInput={(params) => (
					<TextField {...params}
						label="freeSolo" margin="normal" variant="outlined" />
				)}
			/>
		</div>
			
	)
}
export default Search
