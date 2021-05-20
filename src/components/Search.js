import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Search = props => {
    const {options, handleChange} = props


    // useEffect(()=>{
    //     console.log(1, options)
    // },[options])

    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                autoComplete
                id="free-solo-demo"
                freeSolo
                open={false}
                options={options.map((option) => option.title)}
                onInputChange={e=>handleChange(e)}
                renderInput={(params) => (
                    <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
                )}
            />
        </div>
	
    )
}

export default Search
