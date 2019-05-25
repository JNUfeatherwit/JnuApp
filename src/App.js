/**
 * Created by ZZ on 2019/4/14 11:10.
 * file description:
 */
import React from 'react'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import Main from './screens/Main'
import LoginScreen from './screens/Login'
import Home from './screens/Main/Home'
import Timetable from './screens/Main/Timetable'
import Mine from './screens/Main/Mine'
import Find from './screens/Main/Find'
import announcement from './screens/Main/Home/announcement'
import activity from './screens/Main/Home/activity'
import course from './screens/Main/Home/course'
import NavigationService from './utils/NavigationService'
import { StatusBar, View } from 'react-native'
import { basicStyle } from './theme/MainStyle'
import DIYClass from './Classes/Model/DIYClass'
import ClassMessage from './Classes/classMessage'
import PublishMomentScreen from './screens/PublishMomentScreen'

const AppStack = createStackNavigator(
  {
    Main: Main,
    Home: Home,
    Timetable: Timetable,
    Find: Find,
    Mine: Mine,
    announcement: announcement,
    activity: activity,
    course: course,
    classMessage: ClassMessage,
    DIYClass: DIYClass,
    PublishMoment:PublishMomentScreen
  },
  {
    headerMode: 'none'
  }
)

const switchStack = createSwitchNavigator(
  {
    App: AppStack,
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login'
  }
)
const RootStack = createAppContainer(switchStack)
export default class App extends React.Component {
  render() {
    return (
      <View style={basicStyle.container}>
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        <RootStack
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}
