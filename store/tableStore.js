/**
 * Created by ZhangZhiShuo on 2019/4/27 20:19.
 * file description:
 */
import { observable } from 'mobx'
const totalCourses = [
  {
    fclassName: 'c',
    fPlace: 'c205',
    id: '00010',
    fClasstime: '1~2',
    fweek: '一',
    totalTeacher: ['刘老师', '张老师', '李老师']
  },
  {
    fclassName: 'a',
    fPlace: 'c405',
    id: '00001',
    fClasstime: '1~2',
    fweek: '二',
    totalTeacher: ['李老师']
  },
  {
    fclassName: 'b',
    fPlace: 'c413',
    id: '00011',
    fClasstime: '1~2',
    fweek: '三',
    totalTeacher: ['刘老师', '张老师', '李老师']
  },
  {
    fclassName: 'cd',
    fPlace: 'c207',
    id: '00100',
    fClasstime: '3~4',
    fweek: '五',
    totalTeacher: ['张老师', '李老师']
  }
]

export default class TableStore {
  @observable tableList = {
    Mon: [],
    Tus: [],
    Wes: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: []
  }
  @observable curWeek = ''
  @observable curTerm = ''
  @observable momentList=[]

  setCurWeek = week => {
    this.curWeek = week
  }
  setCurTerm = term => {
    this.curTerm = term
  }
  setMomentList=data=>{
    this.momentList=data
  }
  getClass = className => {
    for (let item of totalCourses) {
      if (item.fclassName === className) {
        return {
          week: item.fweek,
          time: item.fClasstime,
          fPlace: item.fPlace,
          totalTeacher: item.totalTeacher,
          id: item.id
        }
      }
    }
  }
  getId = id => {
    for (let item of totalCourses) {
      if (item.id === id) {
        return {
          fclassName: item.fclassName,
          week: item.fweek,
          time: item.fClasstime,
          fPlace: item.fPlace,
          totalTeacher: item.totalTeacher,
          id: item.id
        }
      }
    }
  }
  setTableList = list => {
    Object.assign(this.tableList, list)
  }
}
