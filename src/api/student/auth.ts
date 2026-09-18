import { http } from '@/http/http'
import type { IRestResponse } from '@/api/types/base'

/**
 * 微信学生账号绑定 请求体
 */
export interface IWxStudentBindReq {
  userName: string
  password: string
  code: string
}

/**
 * /api/wx/student/auth/bind
 * POST 微信账号绑定，返回token字符串
 */
export function wxStudentAuthBindAPI(data: IWxStudentBindReq) {
  return http.post<IRestResponse<string>>('/api/wx/student/auth/bind', data)
}

/**
 * /api/wx/student/auth/checkBind
 * POST 校验微信是否已绑定；入参：code字符串
 */
export function wxStudentAuthCheckBindAPI(code: string) {
  return http.post<IRestResponse<string>>('/api/wx/student/auth/checkBind', { code })
}

/**
 * /api/wx/student/auth/unBind
 * POST 解除微信账号绑定，无请求body；token鉴权
 */
export function wxStudentAuthUnBindAPI() {
  return http.post<IRestResponse<void>>('/api/wx/student/auth/unBind')
}
