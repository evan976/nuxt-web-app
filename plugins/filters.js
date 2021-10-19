import Vue from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export const dateFormat = (date, type) => {
  if (!type) {
    return dayjs(date).fromNow()
  } else {
    return dayjs(date).format(type)
  }
}

const filters = {
  dateFormat
}

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
