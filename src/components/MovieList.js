import React from 'react'
import {Card} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
    const {options} = props
    console.log('movie List in ML:', Object.entries(options), typeof options);
	
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
                {options.length > 0 &&
									options.map(i=>{
			    				return <Card key={i.id * Math.random()}>{i.title}</Card>
									})
                }
            </InfiniteScroll>
        </div>	
    )		
}
	
export default MovieList
