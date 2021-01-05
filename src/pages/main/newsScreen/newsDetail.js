import React from 'react'
import {View,Text} from 'react-native'
import {WebView} from 'react-native-webview'

// class NewsDetail extends React.Component {
//     render() {
//         return(
//             <View>
//                 <Text>newsDetail</Text>
//             </View>
//         )
//     }
// }
function NewsDetail ({route,navigation}) {
    console.log(route);
    const {params} = route
    return (
        <WebView
            source={{
                uri:params.url
            }}
        />
    )
}

export default NewsDetail