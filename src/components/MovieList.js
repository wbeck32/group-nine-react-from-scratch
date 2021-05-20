import React from 'react'
import {Card} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
    const {options, query} = props

    const movieList = options.filter(o=>{
        const lCTitle = o.title.toLowerCase()
        const lCQuery = query.toLowerCase()
				console.log('lCTitle.indexOf(lCQuery)>-1:', lCTitle.indexOf(lCQuery)>-1,lCTitle,lCQuery);
        return lCTitle.indexOf(lCQuery)>-1 === true
    })

    return (
        <div>
            <InfiniteScroll
                dataLength={movieList ? movieList.length : 0}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {movieList && movieList.length > 0 &&
									movieList.map(i=>{
			    				return <Card key={i.id * Math.random()}>{i.title}</Card>
									})
                }
            </InfiniteScroll>
        </div>	
    )		
}
	
export default MovieList
