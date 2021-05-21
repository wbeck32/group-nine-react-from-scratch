import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardMedia,CardContent} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTheme, ThemeProvider } from '@material-ui/core/styles';


const MovieList = props => {
	console.log(3,"ML")
	const theme = useTheme()
	
	// console.log('props in ML:', props);
	const {options, query} = props

	const useStyles = makeStyles({
		root: {
			maxWidth: 154,
		},
		media: {
			height: 140,
		},
		card:{
			border: `1px solid ${theme.palette.primary}`,
			margin: '12px 0 12px 0',
			boxShadow: `${theme.shadows[6]}`
		},
		cardContent:{
			fontSize:`${theme.typography.h1}`
		}
	});

	const classes = useStyles()
	
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
		<ThemeProvider theme={theme}>
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
						<Card className={classes.card} key={i.id * Math.random()}>
							<CardMedia component="img" className={classes.media} image={`https://image.tmdb.org/t/p/w342/${i.backdrop_path ? i.backdrop_path : i.poster_path}`}></CardMedia>
							<CardContent children={
								<>
									<div className={classes.cardContent}>{i.original_title}</div>
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
		</ThemeProvider>
	)		
}
		
export default MovieList
