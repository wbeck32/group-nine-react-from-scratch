/* eslint-disable no-undef */
import React, { Component } from "react";
import { hot } from 'react-hot-loader'
import PageContainer from './components/PageContainer'

class App extends Component {
	render() {
		return (
			<PageContainer />
		);
	}
}

export default hot(module)(App);
