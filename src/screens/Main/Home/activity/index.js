/**
 * Created by zz on 2019/4/20 18:02.
 * file description:
 */
import React, { Component } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, FlatList, View } from 'react-native'
import Button from '../../../../component/Button'
import Header from '../../../../component/Header'
import NavigationBar from '../index'

const textdetail = [
  '那大暖乡大学生志愿服务队（简称那大暖乡）是儋州籍在校大学生于2014年5月25日自发组织起来的，以“无私奉献，共享生长”为宗旨。奉行”奉献，团结，友爱，创新，自主，进步“为行为准则，以”打造那大新气象，创造那大美好明天“为目标，以”互信，互爱，互助，共进步“作为核心价值观的社会性团体。\n' +
    '\n' +
    '\n' +
    '对于以上小编的介绍，你是否对那大暖乡有了一定的了解呢？如果还不够了解或者想要深入了解，那么机会来了，那大暖乡大学生志愿服务队的招新工作正在进行中，赶紧一起来加入我们那大暖乡这个大家庭吧。 ',

  '本次“我为家乡代言”城市展演大赛要求选手以团队或者个人的形式来介绍家乡所在城市的风土民情展。选手可以通过PPT，图片，实物等形式来展现各个地方的风土名情。我们一开始就精心策划整个活动，后来大家一起商量讨论并多次修改，接着物资的购买筹备,再到收集各种名单,邀请评委嘉宾等等,一步步走来，最终成功地举办了此次活动。',

  '当天，在VR体验中心工作人员的讲解和引导下，30名市民分别体验了“VR过山车”“VR超验空间”“VR山地车”“VR滑雪”等多个项目。\n' +
    '\n' +
    '“哇，仿佛置身皑皑白雪的高山滑雪场！”在工作人员的指引下，市民赵园利戴上VR眼镜，手持感应器，做着各种动作。“身临其境的感觉，沉浸感比较强，我都感觉快要摔跤了。”赵园利激动地说。\n' +
    '\n' +
    '在当天体验活动中，不少家长带着孩子特地来见识新奇的VR虚拟世界，不少小朋友围着“VR山地车”“VR超验空间”项目跃跃欲试，一位带着孩子来体验的家长罗先生说，VR作为前沿科技，具有很强的娱乐感和体验感，对于孩子们来说充满魅力，这次体验活动满足了孩子的求知欲与好奇心。\n' +
    '\n' +
    '黄先生体验完“VR超验空间”说：“在几平方米的空间里，戴上VR眼镜，仿佛置身于太空之中，自己就是一位真正的宇航员。”\n' +
    '\n' +
    '在多个体验项目中，市民李先生最感兴趣的是VR课堂实验的应用。“VR课堂的应用，让原本呆板的教学内容变得生动形象，老师可以在课堂上向学生展示壮丽的地理山河和震撼的历史场景。让学生们可以在真实的场景中学习到该学的知识。”李先生说。',

  '团建的意义：\n' +
    '\n' +
    '1、团队建设可以明确团队的目标，提升员工的团队精神和团队意识。\n' +
    '\n' +
    '2、可以提升团队的凝聚力。可以增进员工间的相互了解，让员工之间相互包容、相互信任，让队员之间相互尊重。\n' +
    '\n' +
    '3、 能激励团队。团队精神让队员之间认识到个体的差异性，可以让团员去相互学习对方身上的优点，努力的向更好的方向进步。',

  '大学生“三下乡” 使大学生能够将自己在校所学的先进科学的生活观念在广大农村传播，紧密结合他们所学专业技术知识，在农村开展多种形式的先进科技文化知识和生活观念的宣讲活动。大学生参与新农村建设的进程，为大学生了解中国国情开启了一扇窗口，密切了高等教育与新农村建设的关系，同时提高了大学生的社会实践能力和综合素质，为国家未来的发展培养了优秀人才。\n' +
    '大学生是我国科学技术发展的后备军，应该发挥知识技能的优势，为农村建设服务，为农民群众服务。广大的农村需要大学生去发挥聪明才智，大学生也需要到农村去，在服务农民群众的实践中接触社会，了解国情，增强社会责任感和历史使命感。通过“三下乡”，大学生可以改造世界观、价值观，把农村建设的需要和青年学生的成长很好地结合起来，走正确的成长成才道路。此外，“三下乡”活动架起了党和政府与农民群众之间的又一座桥梁，通过青年学生的下乡服务，体现出党和政府对农民群众生产生活的关心。',

  '我们的创始，是因为看到在当今中国存在着严重的教育资源不均衡问题：在主要发达城市，将近80%的学生可以进入大学，然而在贫困的农村地区，只有5%的优秀学生才能进入大学。一个孩子的出生地往往决定了他的教育前景，从而影响其未来的人生选择。\n' +
    '更加严峻的是，教育资源不均衡作为一个对于未来中国影响深远的问题，其成因复杂、涉及范围大。而与此同时，基础教育行业在吸引顶尖人才上普遍存在困难。我们缺乏优秀人才长期致力于解决这个问题。'
]

class activity extends Component {
  handleShowDetails = text => {
    alert(text)
  }

  renderItem = item => {
    return (
      <TouchableOpacity onPress={() => this.handleShowDetails(item.text)}>
        <View style={styles.leftContainer}>
          <Image source={item.image} style={styles.imgStyle} />
          <View style={{ flex: 1 }}>
            <Text style={styles.newTitle}>{item.title}</Text>
            <Text style={styles.wenebn}>{item.introduction}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={'社团活动'} />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={[
            {
              title: 'Loving Spring服务队招新',
              text: textdetail[0],
              image: require('../../../../assets/ZX.jpg'),
              introduction:
                '简介：Loving Spring是暨南大学珠海校区青年志愿者协会旗下的一支服务队，多年来前往前山、慈安等多家敬老院为老人们提供温馨的服务，'
            },
            {
              title: '城市魅力大赛第二轮开始',
              text: textdetail[1],
              image: require('../../../../assets/CM.jpg'),
              introduction: '简介：家乡是我们心灵的依靠、感情的寄托。家乡是缕阳光，冷寂时可以寻得温暖.'
            },
            {
              title: '电竞社限时VR体验',
              text: textdetail[2],
              image: require('../../../../assets/VR.jpg'),
              introduction:
                '简介：虚拟现实技术通过多源信息融合的、交互式的三维动态视景和实体行为的系统仿真使用户沉浸到该环境中。'
            },
            {
              title: '青协团建活动',
              text: textdetail[3],
              image: require('../../../../assets/TJ.jpg'),
              introduction: '简介：要问团建哪家强，到暨大找青协！'
            },
            {
              title: '大学生三下乡活动',
              text: textdetail[4],
              image: require('../../../../assets/SXX.jpg'),
              introduction: '简介：促进农村文化、科技、卫生的发展。大力开展文化、科技、卫生“三下乡”活动。'
            },
            {
              title: '关于去贵州支教通知',
              text: textdetail[5],
              image: require('../../../../assets/ZJ.jpg'),
              introduction: '简介：支援落后地区乡镇中小学校的教育和教学管理工作，改善中国贫困地区教育现状。'
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
    backgroundColor: '#ffffff',
    flex: 1,
    paddingBottom: 30
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff'
  },
  newTitle: {
    color: '#4f4f4f',
    fontSize: 16,
    marginBottom: 5
  },
  wenebn: {
    color: '#bababa',
    // justifyContent: 'center',
    fontSize: 14,
    overflow: 'hidden'
  },
  // 图像样式
  imgStyle: {
    margin: 10,
    marginLeft: 0,
    width: 90,
    height: 80
  }
})
export default activity
