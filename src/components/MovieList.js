import React from 'react'
import {Card} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
    const {options} = props
    console.log('movie List in ML:', options ? options : 0);
	
    return (
        <div>
            <InfiniteScroll
                dataLength={options ? options.length : 0}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {options[0] !== undefined &&
									options[0].forEach(i=>{
			    				console.log('i:', i);	
			    				return <Card key={(i.id+2) * Math.random()}>{i.title}</Card>
									})
                }
            </InfiniteScroll>
        </div>	
    )		
}
	
export default MovieList
