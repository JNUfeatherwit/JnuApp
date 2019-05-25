import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, Platform, TextInput, Picker, View, Button } from 'react-native'
import Dimensions from 'Dimensions'
import Util from '../../Common/util.js'
import Icon from 'react-native-vector-icons/Ionicons'
import { observer, inject } from 'mobx-react'
import Header from '../../component/Header'
const { width, height } = Dimensions.get('window')

@inject('tableStore')
@observer
class DIYClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      week: '一',
      time: '',
      fclassName: '',
      fPlace: '',
      fTeachar: '',
      totalTeacher: [],
      id: ''
    }
  }
  render() {
    // alert(this.state.zhouqi);
    return (
      <View style={styles.container}>
        <Header title={'自定义课程'} />
        <View style={styles.textWrap}>
          <Text style={styles.textName}>课程名称：</Text>
          {/*<Text style={styles.textMessage}>小狐狸</Text>*/}
          <TextInput
            placeholder="请输入课程名称"
            underlineColorAndroid="transparent"
            keyboardType="default"
            style={styles.textMessage}
            onChangeText={text => {
              this.setState({
                fclassName: text
              })
            }}
          >
            {this.state.fclassName}
          </TextInput>
          <View style={{ width: 50, position: 'absolute', right: 5 }}>
            <Button
              title={'更新'}
              onPress={() => {
                const newClass = this.props.tableStore.getClass(this.state.fclassName)
                if (newClass) {
                  this.setState(newClass)
                }
              }}
            />
          </View>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>课程编号：</Text>
          {/*<Text style={styles.textMessage}>小狐狸</Text>*/}
          <TextInput
            placeholder="请输入课程编号"
            underlineColorAndroid="transparent"
            keyboardType="default"
            style={styles.textMessage}
            onChangeText={text => {
              this.setState({
                id: text
              })
            }}
          >
            {this.state.id}
          </TextInput>
          <View style={{ width: 50, position: 'absolute', right: 5 }}>
            <Button
              title={'更新'}
              onPress={() => {
                const newClass = this.props.tableStore.getId(this.state.id)
                if (newClass) {
                  this.setState(newClass)
                }
              }}
            />
          </View>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>上课地点：</Text>
          <TextInput
            placeholder="请输入上课地点"
            underlineColorAndroid="transparent"
            keyboardType="default"
            style={styles.textMessage}
            onChangeText={text => {
              this.setState({
                fPlace: text
              })
            }}
          >
            {this.state.fPlace}
          </TextInput>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>上课教师：</Text>
          <Picker
            style={{ width: (width * 2) / 3, position: 'absolute', right: 0 }}
            selectedValue={this.state.fTeachar}
            onValueChange={value => this.setState({ fTeachar: value })}
          >
            {this.state.totalTeacher.map((value, i) => (
              <Picker.Item label={value} value={value} key={i.toString} />
            ))}
          </Picker>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>星期：</Text>
          <Picker
            style={{ width: (width * 4) / 5, position: 'absolute', right: 0 }}
            selectedValue={this.state.week}
            onValueChange={value => this.setState({ week: value })}
          >
            <Picker.Item label="一" value="一" />
            <Picker.Item label="二" value="二" />
            <Picker.Item label="三" value="三" />
            <Picker.Item label="四" value="四" />
            <Picker.Item label="五" value="五" />
            <Picker.Item label="六" value="六" />
            <Picker.Item label="日" value="日" />
          </Picker>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>课时：</Text>
          <Picker
            style={{ width: (width * 4) / 5, position: 'absolute', right: 0 }}
            selectedValue={this.state.time}
            onValueChange={value => this.setState({ time: value })}
          >
            <Picker.Item label="1~2" value="1~2" />
            <Picker.Item label="3~4" value="3~4" />
            <Picker.Item label="4~5" value="4~5" />
            <Picker.Item label="6~8" value="6~8" />
            <Picker.Item label="10~12" value="10~12" />
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this._fetchData()

          }}
        >
          <Text style={styles.btnText}>添加</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _fetchData() {
    if (!this.state.id) {
      alert('请输入课程编号')
      return
    }
    const { tableList } = this.props.tableStore
    let key = ''
    switch (this.state.week) {
      case '一':
        key = 'Mon'
        break
      case '二':
        key = 'Tus'
        break
      case '三':
        key = 'Wes'
        break
      case '四':
        key = 'Thu'
        break
      case '五':
        key = 'Fri'
        break
      case '六':
        key = 'Sat'
        break
      case '日':
        key = 'Sun'
        break
    }
    if (!key) {
      return
    }
    const list = tableList[key]
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === this.state.id) {
        list.splice(i, i + 1)
        break
      }
    }
    list.push({
      fweek: this.state.week,
      fclassName: this.state.fclassName,
      fPlace: this.state.fPlace,
      fClasstime: this.state.time,
      fTeachar: this.state.fTeachar,
      id: this.state.id
    })
    tableList[key] = list
    this.props.tableStore.setTableList(tableList)
    this.props.navigation.goBack()
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedfe1'
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    paddingTop: 12,
    paddingBottom: 12,
    height: 48,
    backgroundColor: '#00b3ca',
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 15
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    position: 'absolute',
    left: 40,
    top: 12
  },
  backBox: {
    position: 'absolute',
    left: 0,
    top: 12,
    width: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor:'yellow',
  },
  backIcon: {
    color: '#fff',
    fontSize: 28
    //marginRight:10
  },
  textWrap: {
    paddingLeft: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 40,
    paddingRight: 15,
    alignItems: 'center',
    marginBottom: 10
  },
  textName: {
    fontSize: 18,
    color: 'black'
  },
  textMessage: {
    width: width * 0.7,
    textAlign: 'left',
    fontSize: 16,
    position: 'absolute',
    right: 15
  },
  btn: {
    marginTop: 30,
    width: width * 0.9,
    marginLeft: width * 0.05,
    backgroundColor: '#00b3cb',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00b3cb'
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
})
export default DIYClass
