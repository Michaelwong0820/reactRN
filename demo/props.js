
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
class Person extends React.Component {
 
  render() {
      console.warn(this.props.name);
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Props extends React.Component {
  constructor(props) {
    super()
    console.log('APP1');
  }
  render() {
    const pic = {
      uri : 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=121352583,3553479540&fm=26&gp=0.jpg'

    }
    return (
    //   <>
    //     <StatusBar barStyle="dark-content" />
    //     <SafeAreaView>
    //       <ScrollView
    //         contentInsetAdjustmentBehavior="automatic"
    //       >
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //   <Text style={styles.mainBox}>hello1</Text>
            //   <Image source={pic} style={{width:100,height:100}}/>
            // </View>
      //     </ScrollView>
      //   </SafeAreaView>
      // </>
      <View style={{flex:1,justifyContent:'center'}}>
        <Person name="小王"/>
        <Person name="小明"/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  mainBox: {
    color: 'red'
  }
});

export default Props;
