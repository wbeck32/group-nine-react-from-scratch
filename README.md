# group nine coding challenge

Setup

```git clone git@github.com:wbeck32/group-nine-react-from-scratch.git```

```npm i```

```npm start```



My goals for this project were these:

* Search the movie database with a search query and return results for that query
	- Every time the query changed perform another search with the new query.
	- In a second API call use the ID for each movie to retrieve the name of the first genre in the movie's array of genres.
	- As the user reached the bottom of the search results, call a next() function to retrieve the next page of results.
	- Filter the current and new results to make sure that they matched the new query.

* Roadblocks
	- The API call would only return 20 results per page. Subsequent calls needed an updated page number.
	- In the filter process the array of movies could be reduced to way less than a page's worth. This would require calling the ```handleChange``` function repeatedly while incrementing the page number used in the query.

* Look and feel

	![post](/thrillistDesign.png)
	- I decided to match the design of a post on [thrillist](https://thrillist.com).
	- I found some similar fonts and was fetching the movie's genre to use in place of the post tag. I'd replace the byline with the director's name.

* Tech
	- I don't like ```create-react-app``` because too much of it is hidden. I have a template repo called [react-from-scratch](https://github.com/wbeck32/react-from-scratch) that I use for react projects because I can fiddle around under the hood with the webpack config and the babelrc and fun stuff like that :).
	- I used [Material-UI](https://material-ui.com/) as the component library.
	- I started a Storybook instance but didn't finish it.

* Future improvements with more time
	- Implement the genre fetch.
	- Refine the styling. Ensure media breakpoints and accessibility attributes.
	- Leverage [```append_to_response```](https://developers.themoviedb.org/3/getting-started/append-to-response) in the movie database.
	- Make a Storybook.
