import React from 'react';
import {TextField} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
]

const Search = props => {
    console.log('props in search:', props);
    const {value,handleChange} = props
    return (
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <TextField
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        onChange={e=>handleChange(e)}
                        value={value}
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                </div>
            )}
        />
    )
}
export default Search
