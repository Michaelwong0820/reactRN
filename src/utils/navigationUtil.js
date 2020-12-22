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