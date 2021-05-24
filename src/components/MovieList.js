import React, {useEffect} from 'react'
import {Card,CardMedia,CardContent} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
	const {options, query, handleChange} = props
	console.log('options, query:', options, query);

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
	
	// useEffect(()=>{
	// 	return filteredMovieList.map(f=>{
	// 		return fetch(`https://api.themoviedb.org/3/movie/${f.id}?api_key=${process.env.REACT_APP_API_KEY }`)
	// 			.then(r=>{
	// 				return r.json()
	// 			})
	// 			.then(b=>{
	// 				const genreName = b.genres[0].name
	// 				console.log('genreName:', genreName);
	// 				f =  {...f, genreName}
	// 				console.log('f:', f);
	// 			})
	// 	})
	// },[filteredMovieList])
	
	
	console.log('filteredMovieList:', filteredMovieList);
		

	// return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&page=1&query=${encodeURI(q)}&append_to_response=movie`)



	
	const handleNext = query => {
		console.log('e in next:', query);
		return handleChange(query)
	}

	return (
		<div>
			<InfiniteScroll
				dataLength={options.length > 0 ? 500 : 0}
				hasMore={true}
				next={e=>handleNext(query)}
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
