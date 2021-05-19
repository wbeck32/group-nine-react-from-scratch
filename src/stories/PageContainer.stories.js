import React from 'react'
import PageContainer from '../components/PageContainer'

export default  {
	title:'Movie Search',
	component:PageContainer,
	argTypes: {
		backgroundColor: { control: 'color' },

		onSelect:{
			action:'selected'
		},
		control:{
			type:'select',
			options: [
				1,
				2,
				3
			]
		}
	}
}	


const PageContainerTemplate = args => <PageContainer {...args}/>
export const Default = PageContainerTemplate.bind({})
Default.args = {
	
}
