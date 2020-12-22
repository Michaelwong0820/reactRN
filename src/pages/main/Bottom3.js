import React from 'react'
import {Button, Text,View} from 'react-native'

class Page3Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page3</Text>
                <Button 
                    title="goToFetch"
                    onPress={()=>{
                        this.props.navigation.navigate('fetch')
                    }}
                />
                <Button 
                    title="goToAsyncStorage"
                    onPress={()=>{
                        this.props.navigation.navigate('asyncStorage')
                    }}
                />
                
            </View>
        )
    }
}
export default Page3Screen