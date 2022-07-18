import request from '@/utils/request'

export const city = (number) => {
  return request({
    url: '/area/city',
    params: { level: number }
  })
}
export const hot = () => {
  return request({
    url: '/area/hot'
  })
}
