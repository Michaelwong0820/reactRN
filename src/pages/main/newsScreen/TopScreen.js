import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import actionCreator from '../../../store/action/actionCreator'

class TopScreen extends React.Component {
    render() {
        return(
            <View>
                <Text>page</Text>
            </View>
        )

    }
}

function mapStateToProps(state) {
    return {
        // newsData: state.newsReducers[initCategory].newsData,
        // isFreshing: state.newsReducers[initCategory].isFresh
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewsData(type) {
            dispatch(actionCreator.actionNewsData(type))
        },
        changeFresh(data,category) {
            dispatch(actionCreator.actionNewsFresh(data,category))
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: 200,
        marginBottom: 10,
        backgroundColor: '#fff',
        alignItems: "flex-start",
        justifyContent: "center"

    },
    itemGroup1: {
        flex: 1,
        fontWeight: '600'
    },
    itemGroup2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: '#eee'
    },
    itemGroup3: {
        flex: 2,
        flexDirection: 'row'

    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10
    }
})

const TopCommonScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopScreen)

export default TopCommonScreen

