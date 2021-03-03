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
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/public/logout',
    method: 'delete'
  })
}

export function getUser(params) {
  return request({
    url: '/user',
    method: 'get',
    params
  })
}