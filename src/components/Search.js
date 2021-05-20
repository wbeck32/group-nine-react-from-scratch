import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Search = props => {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 }
    ]
    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                autoComplete
                id="free-solo-demo"
                freeSolo
                open={false}
                options={top100Films.map((option) => option.title)}
                onInputChange={e=>props.handleChange(e)}
                renderInput={(params) => (
                    <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
                )}
            />
        </div>
	
    )


}

export default Search
