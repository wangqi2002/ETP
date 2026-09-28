import { http } from '@/http/http'
import type { IBasePage, IPageInfo, IRestResponse } from '@/api/types/base'
/**
 * 答卷分页查询入参 ExamPaperAnswerPageVM
 */
export interface IExamPaperAnswerPageVM extends IBasePage {
  subjectId?: number
  [key: string]: any
}
/**
 * 答卷分页列表项 ExamPaperAnswerPageResponseVM
 */
export interface IExamPaperAnswerPageResponseVM {
  id: number
  examPaperId: number
  paperName: string
  subjectId: number
  subjectName: string
  doTime: string
  systemScore: string
  userScore: string
  paperScore: string
  status: number
  createTime: string
  [key: string]: any
}
/**
 * 单题作答项 提交试卷使用
 */
export interface IExamPaperSubmitItemVM {
  questionId: number
  itemOrder: number
  content?: string | string[] | null
  doRight?: boolean | null
  score?: number | null
  [key: string]: any
}
/**
 * 提交试卷 VM ExamPaperSubmitVM
 */
export interface IExamPaperSubmitVM {
  id?: number
  examPaperId: number
  doTime: number
  answerItems: IExamPaperSubmitItemVM[]
  [key: string]: any
}
/**
 * 试卷阅读-试卷本体部分 ExamPaperEditRequestVM（简化）
 */
export interface IExamPaperEditRequestVM {
  id: number
  name: string
  subjectId: number
  paperScore: number
  questionItems: Array<{
    id: number
    itemOrder: number
    questionType: number
    title: string
    score: number
    difficult: number
    analyze: string
    correct?: string
    correctArray?: string[]
    items?: Array<{ prefix: number | string, content: string }>
    rightAnswerText?: string
    [key: string]: any
  }>
  [key: string]: any
}
/**
 * 答卷阅读返回VM ExamPaperReadVM
 */
export interface IExamPaperReadVM {
  paper: IExamPaperEditRequestVM
  answer: IExamPaperSubmitVM
  [key: string]: any
}

// ========== 新增 WXStudentExamController 接口类型与请求函数 ==========

/**
 * 试卷分页入参 ExamPaperPageVM
 */
export interface IExamPaperPageVM extends IBasePage {
  paperType?: number
  subjectId?: number
  [key: string]: any
}

/**
 * 试卷分页列表项 ExamPaperPageResponseVM
 */
export interface IExamPaperPageResponseVM {
  id: number
  name: string
  subjectId: number
  subjectName: string
  createTime: string
  [key: string]: any
}

/**
 * /api/wx/student/exampaper/pageList POST
 * 学生试卷分页列表（固定试卷/时段试卷）
 */
export function studentExamPaperPageListAPI(data: IExamPaperPageVM) {
  return http.post<IRestResponse<IPageInfo<IExamPaperPageResponseVM>>>(
    '/api/wx/student/exampaper/pageList',
    data,
  )
}

/**
 * /api/wx/student/exampaper/select/{id} POST
 * 获取试卷详情（进入考试页面，拿到整套试卷题目）
 * @param id 试卷id
 */
export function studentExamPaperSelectAPI(id: number) {
  return http.post<IRestResponse<IExamPaperEditRequestVM>>(`/api/wx/student/exampaper/select/${id}`)
}

/**
 * /api/student/exampaper/answer/pageList POST
 * 学生答卷记录分页列表
 */
export function studentExamPaperAnswerPageListAPI(data: IExamPaperAnswerPageVM) {
  return http.post<IRestResponse<IPageInfo<IExamPaperAnswerPageResponseVM>>>(
    '/api/student/exampaper/answer/pageList',
    data,
  )
}
/**
 * /api/student/exampaper/answer/answerSubmit POST
 * 提交试卷（考试结束交卷），返回得分字符串
 */
export function studentExamPaperAnswerSubmitAPI(data: IExamPaperSubmitVM) {
  return http.post<IRestResponse<string>>('/api/student/exampaper/answer/answerSubmit', data)
}
/**
 * /api/student/exampaper/answer/edit POST
 * 编辑/批改答卷（主观题批改），返回得分字符串
 */
export function studentExamPaperAnswerEditAPI(data: IExamPaperSubmitVM) {
  return http.post<IRestResponse<string>>('/api/student/exampaper/answer/edit', data)
}
/**
 * /api/student/exampaper/answer/read/{id} POST
 * 读取答卷详情（查看试卷作答结果，read页面）
 * @param id 答卷主键id
 */
export function studentExamPaperAnswerReadAPI(id: number) {
  return http.post<IRestResponse<IExamPaperReadVM>>(`/api/student/exampaper/answer/read/${id}`)
}
