### 组件间传值

父组件传值 : 直接通过属性参数传值

子组件接收值: 通过this.props 获取属性参数



### StyleSheet 使用方式

引入StyleSheet 

import { StyleSheet } from 'react-native'

语法 : 

```js
// StyleSheet 可以同时定义多个属性值,方便管理,类似于vue的style标签
// 注意: 当一个dom有多个属性值控制时, 使用数组管理 , 具有优先级 , 后面的样式属性会覆盖前面的样式属性
const styles = StyleSheet.create({
    red: {
        color:'red'
    },
    blue: {
        color:"blue"
    },
    bigRed: {
        color: 'red',
        fontWeight : '600',
        fontSize: 30
    },
    bigBlue: {
        color: 'blue',
        fontWeight: '600',
        fontSize : 30
    }
})
```

### 标题栏样式

1. 通过静态属性 navigationOptions 配置一个对象 或 返回一个对象属性
2. 根据不同的对象属性进行样式的调整
3. 可自定义标题的显示方式（可图片加文字组合）
4. 跨页面共享标题默认属性，可在根组件的createStackNavigator 中配置默认样式属性

```
 title：标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用 
header：可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为``null
headerTitle：设置导航栏标题，推荐 
headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为``null
headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成``"返回"
headerRight：设置导航条右侧。可以是按钮或者其他视图控件 
headerLeft：设置导航条左侧。可以是按钮或者其他视图控件 
headerStyle：设置导航条的样式。背景色，宽高等 
headerTitleStyle：设置导航栏文字样式 
headerBackTitleStyle：设置导航栏‘返回’文字样式 
headerTintColor：设置导航栏颜色 
headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0 
gesturesEnabled：是否支持滑动返回手势，iOS默认支持，安卓默认关闭 
screen：对应界面名称，需要填入import之后的页面 
mode：定义跳转风格 
card：使用iOS和安卓默认的风格 
modal：iOS独有的使屏幕从底部画出。类似iOS的present效果 
headerMode：返回上级页面时动画效果 
float：iOS默认的效果 
screen：滑动过程中，整个页面都会返回 
none：无动画 
cardStyle：自定义设置跳转效果 
transitionConfig： 自定义设置滑动返回的配置 
onTransitionStart：当转换动画即将开始时被调用的功能 
onTransitionEnd：当转换动画完成，将被调用的功能 
path：路由中设置的路径的覆盖映射配置 
initialRouteName：设置默认的页面组件，必须是上面已注册的页面组件 
initialRouteParams：初始路由参数
```

语法：

```js
// 单个组件的标题栏样式  
static navigationOptions = {
        // header:null,
        headerBackTitle:'返回',
        headerTitle: 'DetailScreen',
        headerStyle: {
            backgroundColor:"pink"
        },
        headerTitleStyle : {
            color:'skyblue',
            fontSize: 16
        }

  };
// 根组件定义默认样式
const SimpleApp = createStackNavigator({
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTitle: 'Home',
        headerStyle: {
            backgroundColor:"#2A60E4"
        },
        headerTitleStyle : {
            color:'#fff',
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
});

// 自定义标题内容
static navigationOptions = {
        headerTitle:()=> <LogoTitle />
}
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={{uri:'https://...'}} // source={require('./...')}
                style={{ width: 30, height: 30 }}
            />
        )
    }
}
```



### react-navigation (路由的配置)

https://reactnavigation.org/docs/getting-started

1. 安装核心包 yarn add @react-navigation/native

2. 安装依赖 yarn add 

   ​				react-native-reanimated 

   ​				react-native-gesture-handler 

   ​				react-native-screens

   ​				react-native-safe-area-context 

   ​				@react-native-community/masked-view

3. 使用createStackNavigator 配置 基础导航器

   ​				yarn add @react-navigation/stack

4. iOS  端需要 pod install 重新安装依赖

5. 基础步骤

   1. 引入 import { createStackNavigator } from '@react-navigation/stack';
   2. 配置路由信息 createStackNavigator({路由项}，{基础路由配置})
   3. 使用 NavigationContairner / createStackNavigator 生成组件进行包裹 ，导出组件作为根组件
   4. onPress 事件 调用 navigation.navigate({ routeName: Path }) 方法

#### 路由API

​	https://reactnavigation.org/docs/navigation-prop

1. 应用中的每个页面组件都会自动提供 this.props.navigation

this.props.navigation可以获取的一些方法：

- **`navigate`** - 转到另一个页面, 计算出需要执行的操作　　（常用）
- **`goBack`** - 关闭活动屏幕并在堆栈中向后移动　　（常用）
- `addListener` - 订阅导航生命周期的更新
- `isFocused` - 函数返回 `true` 如果屏幕焦点和 `false` 否则。
- **`state`** - 当前状态/路由　　（常用）
- **`setParams`** - 对路由的参数进行更改　　（常用）
- **`getParam`** - 获取具有回退的特定参数　　（常用）
- **`dispatch`** - 向路由发送 action　　（常用）
- `dangerouslyGetParent` - 返回父级 navigator 的函数

注意： this.props.navigation并不是在所有页面（组件）中都可以使用，而是必须在StackNavigator、DrawerNavigator中声明的screen组件，才可以使用this.props.navigation

也就是说，screen组件会自动获得这个props

 

**`this.props.navigation` 上还有一些方法取决于当前 navigator 的附加函数（StackNavigator 和 DrawerNavigator）**

2. 如果是StackNavigator，除了以上方法，this.props.navigation还提供如下的一些方法：

- **`push`** - 推一个新的路由到堆栈　　（常用）
- **`pop`** - 返回堆栈中的上一个页面　　（常用）
- **`popToTop`** - 跳转到堆栈中最顶层的页面　　（常用）
- `replace` - 用新路由替换当前路由
- **reset**- 操作会擦除整个导航状态，并将其替换为多个操作的结果。　　（常用）
- `dismiss` - 关闭当前堆栈

3. 如果是DrawerNavigator，除了以上方法，this.props.navigation还提供如下的一些方法：

- `openDrawer` - 打开
- `closeDrawer` - 关闭
- `toggleDrawer` - 切换，如果是打开则关闭，反之亦然  

#### 路由传参

navigation.navigate(routeName, {

​		key1 : 值1，

​		key2 : 值2，

​		......

}) // 路由传参

navigation.getParam(key，默认值)  // 获取路由中的参数，此方法是4.x版本

5.x版本接收路由参数

const {route} = this.props

路由的参数都存放在route.params中

#### 路由配置

createAppContainer 路由容器，包裹路由配置在根组件

```
import { createAppContainer } from 'react-navigation'

// ...///

export default createAppContainer('')
```

createStackNavigator 路由配置，创建页面，配置路由跳转的属性，可自定义标题栏的样式属性

```js
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions: {
		// 配置单组件的路由标题栏样式
  }
	...//
}
class PageScreen extends React.Component {
	...//
}  
  
const AppStack = createStackNavigator(
  {
    Home: {
        screen: HomeScreen
    },
    Page: {
        screen:PageScreen
    }
}, {
  // 默认标题栏配置项
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTitle: null,
        headerStyle: {
            backgroundColor: "#2A60E4"
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
)

```

createSwitchNavigator 主页面的跳转，适用于登录页面或者注册页面跳转到主页面

```js
import { createSwitchNavigator} from 'react-navigation'

const App = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Page: {
        screen:Page1Screen
    },
    Login: {
        screen:LoginScreen
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTitle: null,
        headerStyle: {
            backgroundColor: "#2A60E4"
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
})

const Auth = createStackNavigator({
    Login:{
        screen:LoginScreen
    }
},{
    initialRouteName:'Login'
})

const switchNavigator = createSwitchNavigator({
    App:{
        screen:App
    },
    Auth:{
        screen:Auth
    }
},{
    initialRouteName:'Auth'
})

// 在路由容器中导出
export default createAppContainer(switchNavigator)
```

注意 ：使用createSwitchNavigator配置的页面不能使用navigation.goBack()返回到上一级

#### 路由工具

新建文件NavigationUtil.js

```js
class NavigationUtil {
    static goPage(page,params) {
        const navigation = NavigationUtil.navigation
        if(!navigation) {
            alert('navigation can not be null !')
            return
        }
        navigation.navigate(page,params)
    }
    static goBack(navigation) {
        navigation.goBack()
    }
    static goHome(params) {
        const navigation = params
        navigation.navigate('home')
    }
}

export default NavigationUtil
```



#### 5.x版本的路由配置

```js
import React from 'react'
import { View, Text, Button, SectionList, SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button
                    title="goToPage"
                    color="#f00"
                    onPress={() => {
                        this.props.navigation.navigate('Section',{id:1,name:'john'})
                    }}
                />
            </View>
        )
    }
}

class SectionScreen extends React.Component {
    render() {
        return (
            <View>
          			....
          	</View>
        )
    }
}

const Stack = createStackNavigator()

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Section" component={SectionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack


```



### RN原生组件

https://reactnative.cn/docs/components-and-apis

#### DrawerNavigation 抽屉式导航

安装依赖 yarn add @react-navigation/drawer

引包 ： import { createDrawerNavigator } from '@react-navigation/drawer'

语法：

```js
const Drawer = createDrawerNavigator() 

const MyDrawer = () => {
    return (
        <NavigationContainer> //路由容器
            <Drawer.Navigator initialRouteName="Page1"> //导航容器
                <Drawer.Screen   //路由组件
                    name="Page1"
                    component={Page1Screen}
                    options={{
                        drawerLabel:'Page1',
                        drawerIcon:({tiniColor,focused})=> (
                            <MaterialIcon 
                                style={tiniColor}
                                size={24}
                                name={'360'}
                            />
                        )
                    }}
                />
 							</Drawer.Navigator>
  				</NavigationContainer>
```

### Hooks

在无状态组件中使用Hooks，实现在组件中可使用有状态组件同样数据操作

#### useState

语法 ： const [count,setCount] = useState(0)  // useState本质是一个数组，初始值可传Number,String,Object,Array

特殊用法： 

​		useState除了可传上述值，还可通过函数返回一个值

​		useState(()=>{ 

​				....

​				return 值

​		})

#### useEffect

作用：在render之后处理行为，可传递函数，使无状态组件可以有效访问state变量和props

语法：useEffect(()=>{

​		执行的js代码

})

运行于首次render和每次update的时候

当需采取事件监听时：

useEffect(参1，参2)

参1：执行监听的方法，必须在事件结束后清除监听，否则会产生内存泄漏

参2：监听的值，默认传空数组‘[]’(变量)，如果传空数组，事件只会执行一次，不传则每次update都会执行一次，并且当有多个useEffect的事件在同时执行时，没有设置就会发送冲突

```js
const [reWidth,setReWidth] = useState(document.body.clientWidth)
    const resetWidth = () =>{
        setReWidth(document.body.clientWidth)
    }
    useEffect(()=>{
        console.log('====================================');
        console.log('width');
        console.log('====================================');
        window.addEventListener('resize',resetWidth,false)
        return(()=>{
            window.removeEventListener('resize',resetWidth,false)
        })
    },[])
    useEffect(()=>{
        console.log('====================================');
        console.log('name');
        console.log('====================================');
        document.title = `my name is ${name.name}`
    },[name])
```

#### useContext

组件间传值，没有层级的限制，子孙组件都可以拿到父组件传的值

语法：const {Provider,Consumer} = React.createContext(默认值)

Provider：以标签的格式包裹着组件，value属性传递所需的值

Consumer：以标签的格式包裹组件，必须是js返回的组件内容，注意：不能直接对dom数据进行操作

**多个Context传值：**

当有多个context传值时，可使用context.Provider ,组件接受值也是根据对应的context.Consumer获取

​		

```js
// const { Provider, Consumer } = React.createContext("default");

// 多个context传值
const momeyContext = React.createContext(0);
const houseContext = React.createContext("default");

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      momey: 100,
      house: "复式别墅",
    };
  }
  render() {
    const momey = 100;
    return (
      <momeyContext.Provider value={this.state.momey}>
        <houseContext.Provider value={this.state.house}>
          <div
            style={{
              border: "1px solid #000",
              width: "40%",
              margin: "50px auto",
            }}
          >
            <p>father momey:{this.state.momey}</p>
            <p>father house:{this.state.house}</p>
            <Son />
          </div>
        </houseContext.Provider>
      </momeyContext.Provider>
    );
  }
}
function Son(props) {
  return (
    <momeyContext.Consumer
     
    >
      {(momey) => (
        <div  style={{ border: "1px solid #000", width: "40%", margin: 10 }}>
          <p>father give {momey}</p>
          <GrandSon name="儿子" />
        </div>
      )}
    </momeyContext.Consumer>
  );
}
function GrandSon(props) {
  return (
    <momeyContext.Consumer>
      {(momey) => (
        <houseContext.Consumer>
          {(house) => (
            <div style={{ border: "1px solid #000", width: "40%", margin: 10 }}>
              <p>son give {momey}</p>
              <p>house:{house}</p>
            </div>
          )}
        </houseContext.Consumer>
      )}
    </momeyContext.Consumer>
  );
}
```

拓展点：

**contextType：**

当有多个context嵌套时，使用contextType可以解决嵌套问题，必须作用于类组件中，只支持一个

```js
class Son extends React.Component{
			static contextType = momeyContext //固定格式

    render() {
        const momey = this.context
        return(
            <div>
                <p>son{momey}</p>
            </div>
        )
    }
}
```

当父组件的值发生改变时，子组件的值同时发生改变

**useContext**：

使用useContext 可以支持多个context.Provider传过来的值

```js
function Childs() {
  const momey = useContext(momeyContext);
  const house = useContext(houseContext);

  return (
    <div>
      <p>momey:{momey}</p>
      <p>house:{house}</p>
    </div>
  );
}
```

#### useMemo

根据依赖项变化而执行的hooks，类似于computed，不能针对副作用处理

会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行，返回的是缓存的变量

必须在第二个参数绑定依赖项，否则只会在第一渲染的时候执行，不会根据依赖项改变

优点：优化性能

```js
const [count, setCount] = useState(0);

  const add = useMemo(() => {
    return count + 1;
  }, [count]);
```

#### useCallback

useCallback是useMemo的语法糖，能够使用useCallback的必定能使用useMemo

区别：useCallback返回的是缓存的函数，useMemo返回的是缓存的变量

依赖变化会重新执行，生成一个新的函数

```js
const addCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
```

useCallback与React.memo 同时使用，性能优化效果更佳

#### useReducer

在function组件中使用类Redux功能

*const* [state, dispatch] = useReducer(reducer, *initCount*,init);

参数定义：

1. reducer：store的配置
2. *initCount*：初始数据
3. init：惰性初始化，对初始数据进行处理再返回

```js
import React, { useReducer } from "react";

function init (initCount) {
    initCount = initCount +5
    return {count:initCount}
}
 
function reducer(state, action) {
  switch (action.type) {
    case "increate":
      return {count:state.count + 1};
    case "decreate":
      return {count:state.count - 1};
    default:
      return state;
  }
}

// var initCount = {count:0}
function Counter({initCount}) {
  const [state, dispatch] = useReducer(reducer, initCount,init);
  return (
    <>
      <div>count:{state.count}</div>
      <div>
        <button onClick={()=>dispatch({type:'increate'})}>++</button>
      </div>
      <div>
        <button onClick={()=>dispatch({type:'decreate'})}>--</button>
      </div>
    </>
  );
}

const App = ()=><Counter initCount={10} />

export default App

```

#### useRef

function 组件使用hooks 绑定dom组件，即可绑定dom结构，也可绑定子组件获取子组件的数据

运用场景：当需要改变唯一值时可以使用，使输入的唯一值在发生改变时可以直接体现

意义：可以替代class组件的唯一值修改变化，同步到使用的方法内

```js
 const inputRef = useRef()
    const handleChange = (e) => {
        inputRef.current.value = e.target.value
    }
    const handleClick = () => {
        setTimeout(()=>{
            alert(inputRef.current.value)
        },3000)
    }
    return (
        <>
        <div>
            <input type="text" ref={inputRef} name="" id="" onChange={handleChange}/>
            <button onClick={handleClick}>click me</button>
        </div>
        </>
    )
```

#### useImperativeHandle

作用：父组件需要调用子组件属性方式时，暴露给父组件的实例值，`useImperativeHandle` 应当与 [`forwardRef`](https://react.docschina.org/docs/react-api.html#reactforwardref) 一起使用

```js
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

渲染 `<FancyInput ref={inputRef} />` 的父组件可以调用 `inputRef.current.focus()`

### AsyncStorage

缓存数据信息

与localStorage作用一致

方法： 

1、AsyncStorage.setItem(key,value,callback)

2、AsyncStorage.getItem(key,callback)

3、AsyncStorage.removeItem(key)

4、AsyncStorage.merge(key,value,callback) // 合并缓存

5、AsyncStorage.clear() // 清除所有缓存

即可使用then接受缓存值

### React-native-storage

https://github.com/sunnylqm/react-native-storage/blob/HEAD/README.zh-CN.md

这是一个本地持久存储的封装，可以同时支持 react-native(AsyncStorage)和浏览器(localStorage)

安装依赖

```
yarn add react-native-storage
yarn add @react-native-community/async-storage
```

封装storageUtils插件

```js
// storageUtils.js
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,

  // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
  // 如果不指定则数据只会保存在内存中，重启后即丢失
  storageBackend: AsyncStorage,

  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: 1000 * 3600 * 24,

  // 读写时在内存中缓存数据。默认启用。
  enableCache: true, 
  
  // 你可以在构造函数这里就写好sync的方法 
  // 或是在任何时候，直接对storage.sync进行赋值修改 
  // 或是写到另一个文件里，这里require引入
  // 如果storage中没有相应数据，或数据已过期，
  // 则会调用相应的sync方法，无缝返回最新数据。
  // sync方法的具体说明会在后文提到
  sync: require('你可以另外写一个文件专门处理sync'),
});

export default storage;
```

### 性能优化

浅度优化：使用生命周期shouldComponentUpdate 监听是否有变化，重新渲染dom

深度优化：class 组件：使用PureComponent 可实现直接监听子组件的dom是否发生改变，判断是否需要重新渲染

​					function组件：使用memo


