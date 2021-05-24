import React, {useEffect, useState} from 'react'
import {Card,CardMedia,CardContent} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
	const {options, query, handleChange} = props

	const [
		movieList,
		setMovieList
	] = useState(options)
	
	useEffect(()=>{
		movieList.forEach(l=>{
			const lCTitle = l.title.toLowerCase()
			const lCQuery = query.toLowerCase()
			const falseIndex = lCTitle.indexOf(lCQuery) <= -1 === true ? movieList.indexOf(l)  : null
			movieList[falseIndex] = 0
			setMovieList(movieList.filter(m=>m!==0))
			return movieList
		})
		if(movieList.length < 20) {
			return handleChange(query)
				.then(t=>{
					setMovieList(t)
				})
		}
	},[options])
	

	return (
		<div>
			<InfiniteScroll
				dataLength={movieList.length}
				hasMore={true}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{movieList.length > 0 &&
				movieList.map (i=>{
					return (
						<Card key={i.id * Math.random()}>
							<CardMedia component="img" image={`https://image.tmdb.org/t/p/w342/${i.backdrop_path ? i.backdrop_path : i.poster_path}`}></CardMedia>
							<CardContent children={
								<>
									<div>{i.genreName}</div>
									<div className="title">{i.original_title}</div>
									<div>{i.release_date}</div>
									<div className="overview">{i.overview}</div>
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
