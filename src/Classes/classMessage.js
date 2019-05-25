import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
  View
} from 'react-native'

import { observer, inject } from 'mobx-react'
import Header from '../component/Header'
const { width, height } = Dimensions.get('window')

@inject('tableStore')
@observer
class ClassMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      item: ''
    }
  }
  render() {
    // alert(this.props.navigation.state.params.MyID);
    return (
      <View style={styles.container}>
        <Header title={'课程详情'} />
        <Text style={styles.title}>课程信息</Text>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>课程名称：</Text>
          <Text style={styles.textMessage} numberOfLines={1}>
            {this.props.navigation.state.params.item.fclassName}
          </Text>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>上课地点：</Text>
          <Text style={styles.textMessage}>{this.props.navigation.state.params.item.fPlace}</Text>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>上课教师：</Text>
          <Text style={styles.textMessage}>{this.props.navigation.state.params.item.fTeachar}</Text>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>星期：</Text>
          <Text style={styles.textMessage}>{this.props.navigation.state.params.item.fweek}</Text>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.textName}>课时：</Text>
          <Text style={styles.textMessage}>{this.props.navigation.state.params.item.fClasstime}</Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            const { tableList } = this.props.tableStore
            let key = ''
            switch (this.props.navigation.state.params.item.fweek) {
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
              if (list[i].id === this.props.navigation.state.params.item.id) {
                list.splice(i, i + 1)
                break
              }
            }
            tableList[key] = list
            this.props.tableStore.setTableList(tableList)
            this.props.navigation.goBack()
          }}
        >
          <Text style={styles.btnText}>删除</Text>
        </TouchableOpacity>
      </View>
    )
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
    paddingLeft: 10
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
  },
  textWrap: {
    paddingLeft: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 40,
    paddingRight: 15,
    alignItems: 'center',
    marginBottom: 1
  },
  textName: {
    fontSize: 18,
    color: 'black'
  },
  textMessage: {
    fontSize: 16,
    position: 'absolute',
    right: 15,
    width: width * 0.5,
    textAlign: 'right'
  },
  title: {
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
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
  },
  ImgGroup: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center'
  },
  headImg: {
    width: 40,
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 50
  },
  commentIcon: {
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 15
  },
  dot: {
    position: 'absolute',
    right: 40,
    fontSize: 40
  }
})
export default ClassMessage
