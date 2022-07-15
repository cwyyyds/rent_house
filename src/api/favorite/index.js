import request from '@/utils/request'

export const favorite = (token) => {
  return request({
    url: '/user',
    Parameters: { token }
  })
}
