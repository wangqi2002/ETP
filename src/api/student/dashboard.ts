import { http } from '@/http/http'
import type { IRestResponse } from '@/api/types/base'

/**
 * 首页-试卷信息（固定试卷）
 */
export interface IPaperInfoVM {
  id: number
  name: string
  [key: string]: any
}

/**
 * 首页-时段试卷
 */
export interface ITimeLimitPaperInfoVM extends IPaperInfoVM {
  startTime: string
  endTime: string
  [key: string]: any
}

/**
 * 首页IndexVM 接口返回主体
 */
export interface IIndexVM {
  fixedPaper: IPaperInfoVM[]
  timeLimitPaper: ITimeLimitPaperInfoVM[]
}

/**
 * 任务中心-单份试卷项 TaskItemPaperVm
 */
export interface ITaskItemPaperVm {
  examPaperId: number
  examPaperName: string
  /** 答卷id，未作答为null */
  examPaperAnswerId: number | null
  /** 试卷作答状态 */
  status: number | null
  [key: string]: any
}

/**
 * 任务中心-任务分组 TaskItemVm
 */
export interface ITaskItemVm {
  id: number
  title: string
  paperItems: ITaskItemPaperVm[]
  [key: string]: any
}

/**
 * /api/student/dashboard/index POST
 * 首页面板数据：固定试卷、时段试卷
 */
export function studentDashboardIndexAPI() {
  return http.post<IRestResponse<IIndexVM>>('/api/student/dashboard/index')
}

/**
 * /api/student/dashboard/task POST
 * 获取任务中心列表数据
 */
export function studentDashboardTaskAPI() {
  return http.post<IRestResponse<ITaskItemVm[]>>('/api/student/dashboard/task')
}
