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
			tmp.forEach(t=>{
				console.log('t:', t);
				// return getFirstListedGenre(t.id)
			})
				.then(x=>{
					console.log('x:', x);
					return {...o, x}
				})
		}
	})
	
	console.log('filteredMovieList:', filteredMovieList);
	
	const getFirstListedGenre = filteredMovieList => {
		filteredMovieList.map(o=>{
			console.log('o:', o);
			return fetch(`https://api.themoviedb.org/3/movie/${ o.id }?api_key=${process.env.REACT_APP_API_KEY }`)
				.then(r=>{
					console.log('r:', r);
					return r.json()
				})
				.then(b=>{
					const genreName = b.genres[0].name
					o = {...o, genreName}
					console.log('o:', o);
					return o
				})
		})
	}
		

	// return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&page=1&query=${encodeURI(q)}&append_to_response=movie`)



	
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
				filteredMovieList.map (i=>{
					return (
						<Card key={i.id * Math.random()}>
							<CardMedia component="img" image={`https://image.tmdb.org/t/p/w342/${i.backdrop_path ? i.backdrop_path : i.poster_path}`}></CardMedia>
							<CardContent children={
								<>
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
