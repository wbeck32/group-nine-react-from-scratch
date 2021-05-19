import React from 'react';
import {Container} from '@material-ui/core'
import Header from './Search'
import Main from './Main'
import Footer from './Footer'

const PageContainer = () => {

    return (
        <Container
            maxWidth="sm"   
        >
            <Main />
        </Container>
    )
}
	
export default PageContainer
