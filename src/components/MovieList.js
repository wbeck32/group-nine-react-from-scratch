import React from 'react'
import {Card,CardMedia,CardContent} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
	const {options, query} = props

	const filteredMovieList = options.filter(o=>{
		let tmp=[]
		if(options.length > 0) {
			const lCTitle = o.title.toLowerCase()
			const lCQuery = query.toLowerCase()
			lCTitle.indexOf(lCQuery)>-1 === true ? tmp.push[0] : null
			return tmp
		}
		return tmp
	})

	const handleRefresh = e =>{
		console.log('e in refresh:', e);
	}

	return (
		<div>
			<InfiniteScroll
				dataLength={options.length > 0 ? 500 : 0}
				hasMore={true}
				pullDownToRefresh
				refreshFunction={e=>handleRefresh(e)}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{filteredMovieList.length > 0  &&
				filteredMovieList.map(i=>{
					return (
						<Card css={{color:'darkorchid'}}  key={i.id * Math.random()}>
							<CardMedia component="img" image={`https://image.tmdb.org/t/p/w342/${i.backdrop_path ? i.backdrop_path : i.poster_path}`}></CardMedia>
							<CardContent children={
								<>
									<div>{i.original_title}</div>
									<div>{i.release_date}</div>
									<div>{i.overview}</div>
									<div>{i.vote_average}</div>
								</>
							}/>
						</Card>
					)
				})
				}
			</InfiniteScroll>
		</div>	
	)		
}
		
export default MovieList
