import React,{useState} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from '@material-ui/core'



const Search = props => {
	const {options} = props
	console.log(2, "Search", options);
	
	const [
		isLoading,
		setIsLoading
	] = useState(true)
	
	
	const [
		value,
		setValue
	] = useState(null);

	return (
		<Autocomplete
			value={value}
			onChange={(event, newValue) => {
				if (typeof newValue === 'string') {
					setValue({
						title: newValue,
					});
				} else if (newValue && newValue.inputValue) {
					// Create a new value from the user input
					setValue({
						title: newValue.inputValue,
					});
				} else {
					setValue(newValue);
				}
			}}
			selectOnFocus
			open={false}
			clearOnBlur
			handleHomeEndKeys
			id="free-solo-with-text-demo"
			options={options}
			getOptionLabel={(option) => {
				// Value selected with enter, right from the input
				if (typeof option === 'string') {
					return option;
				}
				// Add "xxx" option created dynamically
				if (option.inputValue) {
					return option.inputValue;
				}
				// Regular option
				return option.title;
			}}
			renderOption={(option) => option.title}
			style={{ width: 300 }}
			freeSolo
			renderInput={(params) => (
				<TextField {...params} label="Free solo with text demo" variant="outlined" />
			)}
		/>
	);
}
		
export default Search

// <div style={{ width: 300 }}>
// 	{options &&
// 	<Autocomplete
// 		autoComplete
// 		id="free-solo-demo"
// 		freeSolo
// 		loading={isLoading}
// 		options={options.map(c =>{c.title})}
// 		open={true}
// 		getOptionLabel={option=>option.id}
// 		renderInput={(params) => (
// 			<TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
// 		)}
// 	/>}
// </div>	
