/**
 * Created by ZZ on 2019/4/20 17:32.
 * file description:
 */
import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Header from '../../../../component/Header'

const news = [
  '4月18日，第十届学校党委第二轮巡察动员部署暨培训会在行政楼召开。学校党委书记、学校党委巡察工作领导小组组长林如鹏作动员讲话。学校党委巡察工作领导小组办公室有关负责同志宣读本轮巡察任务分工决定。华文学院、番禺校区、艺术学院、资产经营有限公司、环境学院等5个二级党组织将接受巡察。\n' +
    '\n' +
    '根据学校党委巡察工作统一部署，经学校党委批准，5月上旬起，学校党委5个巡察组将分别对华文学院、番禺校区、艺术学院、资产经营有限公司、环境学院等5个二级党组织开展为期一个月的巡察。本轮巡察在按照政治巡察“六个围绕、一个加强”和“五个持续”总体要求的基础上，将把贯彻落实习近平总书记视察学校重要讲话精神及学校专项行动计划实施方案、贯彻执行《中国共产党支部工作条例（试行）》等情况列入巡察监督重点内容，扎实推动上级和学校重大部署落地见效。\n' +
    '\n' +
    '林如鹏强调，学校党委巡察组要坚定不移用习近平总书记重要讲话精神引领巡察工作，牢牢把握“两个维护”根本政治任务，牢牢把握加强党的领导和党的建设根本目的，牢牢把握“六个围绕、一个加强”工作主线，进一步突出政治巡察定位；要坚定不移推动巡察工作高质量发展，做到“巡察重点再聚焦、巡察方式再创新、巡察报告再精准”，进一步提高巡察工作成效；要从政治上、能力上、作风上、纪律上强化自身建设，打造团结协作、攻坚克难的巡察队伍。\n' +
    '\n' +
    '会议就《中国共产党暨南大学委员会巡察工作手册》内容对全体巡察干部开展集中培训。学校党委首轮巡察组长、副组长交流了巡察工作经验和体会。\n' +
    '\n' +
    '（学校党委巡察工作领导小组办公室）\n' +
    '\n' +
    '责编：李伟苗',

  '11月24日下午，粤港澳大湾区高校在线开放课程联盟成立大会暨在线开放课程建设研讨会在我校石牌校区曾宪梓科学馆国际会议厅举行。教育部高等教育司司长吴岩，教育部高等教育司教学条件处处长李静，广东省委教育工委副书记、教育厅党组副书记、副厅长邢锋，我校党委书记林如鹏、副校长张荣华，粤港澳大湾区高校代表300余人出席会议，共同见证联盟成立并探讨在线开放课程共建共享。我校、香港中文大学、澳门大学、香港科技大学、深圳大学代表作课程建设经验分享。我校被推选为理事长单位。\n' +
    '\n' +
    '粤港澳大湾区高校在线开放课程联盟由中山大学、华南理工大学、暨南大学、华南农业大学、南方医科大学、广州中医药大学、华南师范大学、广东工业大学、广东外语外贸大学、广州大学、深圳大学11所高校共同发起成立，已有52所高校入盟。香港大学、香港中文大学、香港理工大学、澳门大学等13所港澳高校参加联盟成立大会，并将加入联盟。\n' +
    '\n' +
    '联盟是粤港澳大湾区高校自愿结成的非营利性、开放性的高校联盟，旨在发挥粤港澳大湾区高校各自的优势，资源共享、学分互认、互惠互利，建设国内领先的课程联盟，打造一批全国领先的大学“金课”，构建粤港澳大湾区高等教育教学新生态.',

  '吴岩在讲话中表示，全世界最有名的有三大湾区，都有一个世界级的高等教育集群，高等教育集群是推动大湾区高质量发展的基础性、引领性力量。粤港澳大湾区具有独特优势，但要将其潜在优势转化为实际优势，必须大力推进粤港澳大湾区高等教育集群发展，将粤港澳三地异彩纷呈、差异化发展的各所大学实力整合、共享，使之成为引领粤港澳大湾区发展的重要力量，打造中国高质量发展的新的增长极。他说，今天我们在这里成立粤港澳大湾区高校在线开放课程联盟，是将这一愿景落地的第一步。他希望粤港澳大湾区的各所大学能够拥有大情怀、大格局、大智慧，联手为高等教育集群贡献力量；希望在线开放课程能够越跑越快，担当中国在线开放课程教育乃至中国高等教育的排头兵；希望粤港澳大湾区的高等教育跑出中国高等教育加速度，创出中国高等教育发展的新天地。\n' +
    '\n' +
    '邢锋在讲话中指出，要充分认识在线开放课程建设的作用和意义，大力推进我省在线开放课程的建设和应用。要紧紧抓住粤港澳大湾区建设这一个国家战略，深入开展与港澳高校的合作共建，实现课程的共建共享；完善课程共建共享机制；联合港澳高校建设粤港澳大湾区在线课程平台，向湾区高校免费开放使用；各高校要尽快出台有关课程学分互认的办法。他指出，课程联盟要发挥统筹建设、平台运营、课程认定、课程推广、教师培训等功能，要着力建设成为区域高校互联互通的在线开放课程建设应用共同体，将粤港澳打造成为国家高等教育中心、世界区域高等教育中心。\n' +
    '\n' +
    '林如鹏在致欢迎词中说，粤港澳大湾区是习近平总书记亲自谋划、部署和推动的国家战略。作为内地港澳台侨学生数量最多的高校，此次大会在我校召开具有重要意义。我校作为大湾区高校的一员，对推动大湾区科教人文合作，促进在线教育发展责无旁贷。在教育部和广东省教育厅的指导下，我校高度重视在线开放课程建设并取得了明显成绩。我校将以联盟成立为契机，进一步加强与各兄弟院校的交流合作，深化大湾区科教人文合作，共同提升办学水平。他相信这次大会的召开必将极大地推动粤港澳大湾区高校合作与交流、优质教育资源的共建共享，为打造世界级大湾区贡献力量。',

  '张荣华作为联盟理事长单位代表发言。他表示，联盟将紧紧抓住国家粤港澳大湾区建设的战略机遇，沿着习近平总书记视察广东讲话精神所指引的方向前进，依托联盟章程，朝着联盟未来发展蓝图，做好在线开放课程的共建共享，争取在湾区高校之间课程互选、学分互认方面有多突破，并以课程合作为基础和突破口，带动粤港澳三地高校人才培养等全面合作。作为理事长单位，我校将尽心履职，率先垂范，推动在线开放课程建设与在线教育发展，擦亮金字招牌，协同联盟广大兄弟院校，共同推动优质在线开放课程的共建与共享，探索基于在线开放课程的新型教学模式。\n' +
    '\n' +
    '会上展示了首批上线课程，总数为398门，涵盖文学、医学、理学等多个学科门类。未来上线课程将达到数千门，联盟平台课程将面向粤港澳大湾区高校免费开放共享。\n' +
    '\n' +
    '联盟的成立得到了省内、港澳主要高校的积极响应，粤港澳大湾区高校将发挥各自学科专业优势，共建共享优质在线课程，推进湾区高校的学分互认，促进粤港澳大湾区高校的人才培养合作。联盟还得到了国内主流课程平台的大力支持。目前，超星泛雅、智慧树网、爱课程、学堂在线、优课在线、好大学在线、优学院7家慕课平台已成为联盟合作慕课平台。联盟平台的合作单位将持续不断提供大量优质课程供联盟高校免费共享。省教育厅每年也将投入专门经费，组织联盟高校建设体系化、结构化的在线开放课程，供粤港澳大湾区高校免费使用。',

  '田立新肯定了海外华语研究中心在海外华语生活、华语本体、华语文教育等方面取得的成果，同时根据评审专家的意见，指出了中心在未来建设中的发展方向。她希望中心以海外华语研究为核心，不断为国家语言文字事业提供科研保障和决策咨询；进一步加强中心发展机制建设，充实研究力量，积极向智库型研究机构迈进；继续加强中心的海外华语平台整合功能，争取产出更多标志性的成果。\n' +
    '\n' +
    '林如鹏表示，我校是一所具有百年历史的华侨高等学府，坚持“侨校+名校”的发展战略，坚持将创新科学研究、建设科研平台作为学校工作的重中之重。过去的五年，海外华语研究中心取得了许多新的突破，如完成全球华语资源库的20个子库，新增国家社科基金项目3项。今后我校将一如既往地支持中心的发展。他要求，中心成员要牢记习近平总书记考察我校时的嘱托，坚持高站位，瞄准高精尖，使中心成为中华语言文化传承和传播研究的智力引擎，为助力国家语言文字事业的发展做出新的成就。\n' +
    '\n' +
    '教育部语言文字信息管理司规划协调处处长王奇、我校社会科学研究处处长潘启亮、华文学院党委书记史学浩及海外华语研究中心全体成员和多位国内专家学者参加了续约仪式。仪式由我校华文学院院长邵宜主持。'
]

class announcement extends Component {
  handleShowDetails = text => {
    alert(text)
  }
  renderItem = item => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.handleShowDetails(item.news)}
          style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 20,
                color: '#006600',
                lineHeight: 30
              }}>
              {item.data}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#006600',
                lineHeight: 30,
                width: 270
              }}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title={'校园公告'} />
        <Image
          source={require('../../../../assets/news1.jpg')}
          style={styles.imgStyle}
        />
        <FlatList
          data={[
            {
              data: '  2019/2/10     ',
              title: '第十届学校党委第二轮巡察动员部署暨培训会召开',
              news: news[0]
            },
            {
              data: '  2019/3/2     ',
              title: '粤港澳大湾区高校在线开放课程联盟在我校成立',
              news: news[1]
            },
            {
              data: '  2019/3/10     ',
              title: ' 我校为理事长单位 首批上线课程398门',
              news: news[2]
            },
            {
              data: '  2019/3/13     ',
              title: '建设国内领先的课程联盟，打造一批全国领先的大学“金课”',
              news: news[3]
            },
            {
              data: '  2019/4/20     ',
              title: '以课程联盟带动粤港澳三地高校人才培养等全面合作',
              news: news[4]
            },
            {
              data: '  2019/4/22     ',
              title: '坚持“侨校+名校”的发展战略',
              news: news[3]
            },
            {
              data: '  2019/4/28     ',
              title: '开通了国内首个海外华语研究领域网站“全球华语网”',
              news: news[3]
            },
            {
              data: '  2019/5/1     ',
              title: '教育部语言文字信息管理司与我校共建“海外华语研究中心”',
              news: news[3]
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
    backgroundColor: 'white',
    flex: 1,
    // alignItems可以决定其子元素沿着次轴（与主轴垂直的轴）的排列方式
    paddingTop: 10
  },
  gundongshitu: {
    backgroundColor: 'white',
    paddingTop: 10
  },
  title: {
    color: 'green',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  // 图像样式
  imgStyle: {
    backgroundColor: 'green',
    width: Dimensions.get('window').width,
    height: 200,
    // 子组件间距
    marginTop: 20,
    paddingHorizontal: 10
  }
})
export default announcement
