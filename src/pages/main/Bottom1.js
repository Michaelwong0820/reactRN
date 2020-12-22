import React from 'react'
import TopNavigation from '../Navigation/TopNavigation'
import NavigationUtil from '../../utils/navigationUtil'
class Page1Screen extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        NavigationUtil.navigation = this.props.navigation
        return <TopNavigation />
    }
}

export default Page1Screen