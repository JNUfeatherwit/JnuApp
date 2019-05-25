/**
 * Created by ZhangZhiShuo on 2019/4/14 11:25.
 * file description:
 */
import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../../component/Header'
import { basicColor } from '../../../theme/MainStyle'

class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={'个人中心'} noBack />
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={require('../../../img/avatar.png')} />
          <Text style={{ fontSize: 18}}>hello</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate('Login')
            }}
          >
            <Text style={styles.btnText}>注销</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: basicColor.backgroundColor
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  },
  avatar: {
    width: 110,
    height: 110
  },
  btn: {
    marginTop: 30,
    width: '60%',
    backgroundColor: '#00b3cb',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00b3cb'
  }
})
export default Mine
