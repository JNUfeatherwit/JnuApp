/**
 * Created by ZZ on 2019/4/14 11:13.
 * file description:
 */
import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import FormProvider from './FormProvider'
import FormItem from './FormItem'

@observer
class App extends Component {
  form = new LoginForm()

  navigateHome = () => {
    this.props.navigation.navigate('Main')
  }

  loginSuccess = async () => {
    await this.navigateHome()
  }

  login = async () => {
    let username = ''

    let url = 'http://app.yubo725.top/login2'
    let formData = new FormData()
    formData.append('username', 'hello')
    formData.append('password', 'hello')

    fetch(url, { method: 'POST', body: formData })
      .then(res => res.json())
      .then(json => {
        this.setState({ showProgress: false })
        if (json.code === 1) {
          this.loginSuccess()
        } else {
        }
      })
      .catch(e => {
        this.setState({ showProgress: false })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <Text style={{ fontSize: 28, color: '#000' }}>登录</Text>
        </View>
        <FormProvider form={this.form}>
          <FormItem name={'userName'} placeholder="请输入账号" defaultValue={'ss'}>
            账号
          </FormItem>
          <FormItem name={'password'} type={'password'} placeholder="请输入密码">
            密码
          </FormItem>
        </FormProvider>
        <View style={{ marginTop: 20, paddingHorizontal: 40 }}>
          <Button onPress={this.login} title={'登录'} />
        </View>
      </View>
    )
  }
}
class LoginForm {
  @observable
  userName = ''

  @observable
  password = ''
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 50
  }
})

export default App
