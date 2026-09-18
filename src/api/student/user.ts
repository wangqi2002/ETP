import { http } from '@/http/http'
import type { IBasePage, IRestResponse } from '@/api/types/base'

/**
 * 用户返回VM
 */
export interface IUserResponseVM {
  id: number
  userName: string
  realName: string
  age?: number
  sex?: number
  birthDay?: string
  status: number
  role: number
  [key: string]: any
}

/**
 * 学生注册 请求体
 */
export interface IUserRegisterVM {
  userName: string
  password: string
  realName: string
  sex?: number
  birthDay?: string
  [key: string]: any
}

/**
 * 更新用户资料 请求体
 */
export interface IUserUpdateVM {
  realName?: string
  sex?: number
  birthDay?: string | null
  [key: string]: any
}

/**
 * 用户操作日志项
 */
export interface IUserEventLogVM {
  id: number
  userId: number
  userName: string
  realName: string
  content: string
  createTime: string
  [key: string]: any
}

/**
 * 消息分页请求VM
 */
export interface IMessageRequestVM extends IBasePage {
  receiveUserId?: number
  [key: string]: any
}

/**
 * 消息返回项
 */
export interface IMessageResponseVM {
  id: number
  messageId: number
  receiveUserId: number
  read: boolean
  title: string
  content: string
  sendUserName: string
  createTime: string
  [key: string]: any
}

/**
 * 分页返回结构
 */
export interface IPageInfo<T> {
  total: number
  pageIndex: number
  pageSize: number
  list: T[]
}

/**
 * /api/student/user/current POST
 * 获取当前登录学生用户信息
 */
export function studentUserCurrentAPI() {
  return http.post<IRestResponse<IUserResponseVM>>('/api/student/user/current')
}

/**
 * /api/student/user/register POST
 * 学生账号注册
 */
export function studentUserRegisterAPI(data: IUserRegisterVM) {
  return http.post<IRestResponse<void>>('/api/student/user/register', data)
}

/**
 * /api/student/user/update POST
 * 更新学生个人资料
 */
export function studentUserUpdateAPI(data: IUserUpdateVM) {
  return http.post<IRestResponse<void>>('/api/student/user/update', data)
}

/**
 * /api/student/user/log POST
 * 获取用户操作日志
 */
export function studentUserLogAPI() {
  return http.post<IRestResponse<IUserEventLogVM[]>>('/api/student/user/log')
}

/**
 * /api/student/user/message/page POST
 * 学生消息分页列表
 */
export function studentUserMessagePageAPI(data: IMessageRequestVM) {
  return http.post<IRestResponse<IPageInfo<IMessageResponseVM>>>('/api/student/user/message/page', data)
}

/**
 * /api/student/user/message/unreadCount POST
 * 获取未读消息数量
 */
export function studentUserMessageUnReadCountAPI() {
  return http.post<IRestResponse<number>>('/api/student/user/message/unreadCount')
}

/**
 * /api/student/user/message/read/{id} POST
 * 设置消息已读，路径参数id
 * @param id 消息用户关联id
 */
export function studentUserMessageReadAPI(id: number) {
  return http.post<IRestResponse<void>>(`/api/student/user/message/read/${id}`)
}
