import React, {useState} from 'react'
import {Card} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = props => {
	console.log(3,"ML")
	// console.log('props in ML:', props);
	const {options} = props
	console.log('options in ML:', options,typeof options);
	for (const [
		key,
		value
	] of Object.entries(options)) {
		console.log(`${key}: ${value.title}`);
	}

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

	// if(options.length > 0) {
	// 	movieList = options.filter(o=>{
	// 		const lCTitle = o.title.toLowerCase()
	// 		const lCQuery = query.toLowerCase()
	// 		return lCTitle.indexOf(lCQuery)>-1 === true
	// 	})
	// }

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
				{top100Films !==[]  &&
				top100Films.map(i=>{
					return <Card key={i.year * Math.random()}>{i.title}</Card>
				})
				}
			</InfiniteScroll>
		</div>	
	)		
}
		
export default MovieList
