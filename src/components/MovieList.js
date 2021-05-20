import React, {useState} from 'react'
import {Card,CardMedia,CardContent} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
	console.log(3,"ML")
	// console.log('props in ML:', props);
	const {options, query} = props
	console.log('options in ML:', options);
	// for (const [
	// 	key,
	// 	value
	// ] of Object.entries(options)) {
	// 	console.log(`${key}: ${value.title}`);
	// }

	const top100Films = [
		{ title: 'The Shawshank Redemption', year: 1994 },
		{ title: 'The Godfather', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },
		{ title: 'The Dark Knight', year: 2008 },
		{ title: '12 Angry Men', year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: 'Pulp Fiction', year: 1994 },
		{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
		{ title: 'The Good, the Bad and the Ugly', year: 1966 },
		{ title: 'Fight Club', year: 1999 }
	]

	const [
		movieList,
		setMovieList
	] = useState(options)
	let tmp=[]

	const filteredMovieList = options.filter(o=>{
		console.log('o:', o);
		if(movieList.length > 0) {
			const lCTitle = o.title.toLowerCase()
			console.log('lCTitle:', lCTitle);
			const lCQuery = query.toLowerCase()
			console.log('lCQuery:', lCQuery);
			lCTitle.indexOf(lCQuery)>-1 === true ? tmp.push[0] : null
			return tmp
		}
		return tmp
	})
	console.log('tmp:', tmp);
	console.log('filteredMovieList:', filteredMovieList);

	const handleRefresh = e =>{
		console.log('e in refresh:', e);


	}
	return (
		<div>
			<InfiniteScroll
				dataLength={options.length > 0 ? 500 : 0}
				hasMore={true}
				loader={<h4>Loading...</h4>}
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
					return <Card key={i.id * Math.random()}>{i.original_title}</Card>
				})
				}
			</InfiniteScroll>
		</div>	
	)		
}
		
export default MovieList
