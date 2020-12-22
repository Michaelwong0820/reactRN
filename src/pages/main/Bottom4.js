import React from 'react'
import { Text, View, Button } from 'react-native'

class Page4Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page4</Text>
                <Button 
                    title="goRedux"
                    onPress={()=>{
                        this.props.navigation.navigate('redux')
                    }}
                />
                <Button 
                    title="goReactRedux"
                    onPress={()=>{
                        this.props.navigation.navigate('reactRedux')
                    }}
                />
            </View>
        )
    }
}
export default Page4Screen