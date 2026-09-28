/**
 * 工具过滤器，由es4 wxs语法转换为TypeScript
 */

interface IFilterQuestionItem {
  prefix: string | number
  content: string
  [key: string]: any
}

interface IFilterQuestion {
  items: IFilterQuestionItem[]
  correct?: string | number
  [key: string]: any
}

/**
 * 数字保留两位小数
 * @param value 数字
 * @returns 保留两位小数字符串
 */
export function numberToFixed(value: number): string {
  return value.toFixed(2)
}

/**
 * 判断题格式化，根据correct匹配items返回展示文本
 * @param question 题目对象
 * @returns 匹配到的content，无匹配返回空字符串
 */
export function trueFalseFormatter(question: IFilterQuestion): string {
  for (let i = 0; i < question.items.length; i++) {
    const item = question.items[i]
    if (item.prefix === question.correct) {
      return item.content
    }
  }
  return ''
}

/**
 * 判断arg1字符串是否包含arg2
 * @param arg1 源值
 * @param arg2 查找值
 * @returns 是否包含
 */
export function indexOf(arg1: string | number, arg2: string | number): boolean {
  return arg1.toString().includes(arg2.toString())
}

/**
 * 根据数字生成0~n‑1的数字数组
 * @param number 长度
 * @returns 数组 [0,1,2...]
 */
export function numberToArray(number: number): number[] {
  const array: number[] = []
  for (let i = 0; i < number; i++) {
    array.push(i)
  }
  return array
}
