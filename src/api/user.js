import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/public/login',
    method: 'post',
    params
  })
}

export function getInfo() {
  return request({
    url: '/getinfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
