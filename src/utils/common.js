export { throttle, debounce } from 'lodash-es'

export const genImgUrl = (url, w, h) => {
  if (!h) {
    h = w
  }
  url += `?param=${w}y${h}`
  return url
}

export const pad = (num, n = 2) => {
  let len = num.toString().length
  while (len < n) {
    num = '0' + num
    len++
  }
  return num
}