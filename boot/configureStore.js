/**
 * Created by ZhangZhiShuo on 2019/4/27 20:14.
 * file description:
 */
import TableStore from '../store/tableStore'

export default function() {
  const tableStore = new TableStore()
  return {
    tableStore
  }
}
