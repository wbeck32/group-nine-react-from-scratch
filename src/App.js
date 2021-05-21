/* eslint-disable no-undef */
import React, { Component } from "react";
import { hot } from 'react-hot-loader'
import "./App.css"
import PageContainer from './components/PageContainer'

const theme = {}
class App extends Component {
	render() {
		return (
			<PageContainer />
		);
	}
}

export default hot(module)(App);
