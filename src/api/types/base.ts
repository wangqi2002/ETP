/**
 * 后端基础类型 ts 定义，对应Java：BaseApiController、BaseEntity、BasePage、RestResponse、SystemCode
 */
/**
 * 系统返回码枚举，对应 SystemCode.java
 */
export enum ESystemCode {
  /** 成功 */
  OK = 1,
  /** 用户登录令牌失效 */
  AccessTokenError = 400,
  /** 用户未登录 */
  UNAUTHORIZED = 401,
  /** 用户名或密码错误 */
  AuthError = 402,
  /** 系统内部错误 */
  InnerError = 500,
  /** 参数验证错误 */
  ParameterValidError = 501,
  /** 用户没有权限访问 */
  AccessDenied = 502,
}
/**
 * 分页基础入参，对应 BasePage.java
 */
export interface IBasePage {
  pageIndex?: number
  pageSize?: number
}

/**
 * 后端分页返回对象 PageInfo<T>
 * total:总条数；pageIndex:当前页；pageSize:每页大小；list:数据数组
 */
export interface IPageInfo<T> {
  total: number
  pageIndex: number
  pageSize: number
  list: T[]
}

/**
 * 基础实体标记，对应 BaseEntity.java
 */
export interface IBaseEntity {
  // 抽象标记基类，无字段，用于类型约束
  [key: string]: any
}
/**
 * 后端统一返回泛型结构 RestResponse<T>
 */
export interface IRestResponse<T = any> {
  code: number
  message: string
  response: T
}
/**
 * 判断接口是否业务成功（code === ESystemCode.OK）
 * @param res 后端返回对象
 * @returns boolean
 */
export function isRestSuccess<T>(res: IRestResponse<T>): boolean {
  return res.code === ESystemCode.OK
}
/**
 * 用户基础简要信息，来自 BaseApiController#getCurrentUser()
 * 这里只保留基础占位，实际项目根据真实User实体扩展字段
 */
export interface ICurrentUser {
  id?: number
  userName?: string
  [key: string]: any
}
/**
 * BaseApiController 相关常量导出
 */
export const BaseApiConstant = {
  DEFAULT_PAGE_SIZE: '10',
} as const
