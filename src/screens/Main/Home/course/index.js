/**
 * Created by ZZ on 2019/4/20 18:58.
 * file description:
 */
import React, { Component } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Button from '../../../../component/Button'
import Header from '../../../../component/Header'


class course extends Component {
  renderItem = item => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          paddingTop: 10,
          paddingBottom: 10
        }}>
        <Image source={item.image} style={styles.imgStyle} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.name}>{item.teacher}</Text>
          <Text style={styles.name}>{item.no}</Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title={'社团活动'} />
        <FlatList
          data={[
            {
              title: '高等数学',
              image: require('../../../../assets/GS.jpg'),
              teacher: '窦庆萍',
              no: '课程编号：001'
            },
            {
              title: '概率论与数理统计',
              image: require('../../../../assets/GLL.jpg'),
              teacher: '刘中学',
              no: '课程编号：002'
            },
            {
              title: '离散数学',
              image: require('../../../../assets/LS.jpg'),
              teacher: '周密、陈双平',
              no: '课程编号：003'
            },
            {
              title: '马克思主义基本原理概论',
              image: require('../../../../assets/MZ.jpg'),
              teacher: '袁一达',
              no: '课程编号：004'
            },
            {
              title: '大学体育',
              image: require('../../../../assets/TY.jpg'),
              teacher: '窦庆萍',
              no: '课程编号：005'
            },
            {
              title: '线性代数',
              image: require('../../../../assets/XD.gif'),
              teacher: '窦庆萍',
              no: '课程编号：006'
            },
            {
              title: '商务英语视听说',
              image: require('../../../../assets/SWYY.jpg'),
              teacher: '吴瑾',
              no: '课程编号：007'
            },
            {
              title: '数字电子技术',
              image: require('../../../../assets/XD.gif'),
              teacher: '秦岭松',
              no: '课程编号：008'
            },
            {
              title: 'python程序设计',
              image: require('../../../../assets/Python.jpg'),
              teacher: '林聪',
              no: '课程编号：009'
            },
            {
              title: 'Java程序设计',
              image: require('../../../../assets/JAVA.gif'),
              teacher: '王勇杰',
              no: '课程编号：010'
            },
            {
              title: '大学生心理健康',
              image: require('../../../../assets/DX.jpg'),
              teacher: '王佩佩',
              no: '课程编号：011'
            }
          ]}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF'
  },
  name: {
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'center'
  },
  // 图像样式
  imgStyle: {
    width: 53,
    height: 81
  }
})
export default course
