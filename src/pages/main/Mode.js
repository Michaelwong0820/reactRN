import React from 'react'
import {Text,View,Button} from 'react-native'
import NavigationUtil from '../../utils/navigationUtil'

class ModeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Mode</Text>
                <Button 
                    title="goToDetails"
                    onPress={()=>{
                        NavigationUtil.goPage('details')
                    }}
                />
                 <Button 
                    title="goBack"
                    onPress={()=>{
                        NavigationUtil.goHome(this.props.navigation)
                    }}
                />
            </View>
        )
    }
}
export default ModeScreen