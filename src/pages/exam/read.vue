<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { studentExamPaperAnswerReadAPI } from '@/api/student/exampaper'
import type { IExamPaperReadVM } from '@/api/student/exampaper'
import { trueFalseFormatter } from '@/utils/examFun'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'read',
  },
})
const spinShow = ref(false)
const doTime = ref(0)
const paperId = ref(10001)
const remainTime = ref(0)
const remainTimeStr = ref('')
const modalShow = ref(false)
const result = ref(0)
const timeOutShow = ref(false)

const paper = reactive<IExamPaperReadVM['paper']>({
  name: '工业机器人运维综合测试试卷',
  titleItems: [
    {
      name: '一、单项选择题',
      questionItems: [
        {
          id: 101,
          itemOrder: 1,
          questionType: 1,
          title: '机器人运动学主要研究的是？',
          score: 5,
          difficult: 3,
          correct: 'B',
          analyze: '机器人运动学建立关节角度与末端执行器位姿之间映射关系。',
          items: [
            { prefix: 'A', content: '电机电流控制' },
            { prefix: 'B', content: '关节角度与末端位姿关系' },
            { prefix: 'C', content: '伺服通讯协议' },
            { prefix: 'D', content: '设备散热方案' },
          ],
          rightAnswerText: 'B',
        },
        {
          id: 102,
          itemOrder: 2,
          questionType: 1,
          title: '机器人TCP指的是？',
          score: 5,
          difficult: 2,
          correct: 'B',
          analyze: 'TCP(Tool Center Point)即工具中心点。',
          items: [
            { prefix: 'A', content: '传输控制协议' },
            { prefix: 'B', content: '工具中心点' },
            { prefix: 'C', content: '任务优先级' },
            { prefix: 'D', content: '通讯端口' },
          ],
          rightAnswerText: 'B',
        },
      ],
    },
    {
      name: '二、多项选择题',
      questionItems: [
        {
          id: 201,
          itemOrder: 3,
          questionType: 2,
          title: '机器人日常点检包含哪些项目？',
          score: 6,
          difficult: 3,
          correct: 'A,B,C,D',
          analyze: '线缆、减速器异响、零点、控制柜除尘均属于日常点检内容。',
          items: [
            { prefix: 'A', content: '线缆有无破损' },
            { prefix: 'B', content: '减速器异响检查' },
            { prefix: 'C', content: '零点位置确认' },
            { prefix: 'D', content: '控制柜除尘' },
          ],
          rightAnswerText: 'A,B,C,D',
        },
      ],
    },
    {
      name: '三、判断题',
      questionItems: [
        {
          id: 301,
          itemOrder: 4,
          questionType: 3,
          title: '机器人运行中可以打开安全门。',
          score: 4,
          difficult: 1,
          correct: '错误',
          analyze: '运行时打开安全门会触发安全停止，禁止违规开门。',
          items: [
            { prefix: '正确', content: '正确' },
            { prefix: '错误', content: '错误' },
          ],
          rightAnswerText: '错误',
        },
      ],
    },
    {
      name: '四、填空题',
      questionItems: [
        {
          id: 401,
          itemOrder: 5,
          questionType: 4,
          title: '机器人____标定用于获取工具坐标。',
          score: 5,
          difficult: 3,
          correctArray: ['TCP'],
          analyze: 'TCP标定可以定义工具中心点坐标。',
          items: [
            { prefix: 1, content: '' },
          ],
          rightAnswerText: 'TCP',
        },
        {
          id: 402,
          itemOrder: 6,
          questionType: 4,
          title: '机器人____用于记录关节机械原点位置，断电后丢失需要重新标定。',
          score: 4,
          difficult: 3,
          correctArray: ['零点'],
          analyze: '零点编码器存储关节零点位置，电池耗尽零点丢失，需要重新零点标定。',
          items: [
            { prefix: 1, content: '' },
          ],
          rightAnswerText: '零点',
        },
        {
          id: 403,
          itemOrder: 7,
          questionType: 4,
          title: '机器人控制柜由____系统与____驱动单元组成。',
          score: 6,
          difficult: 4,
          correctArray: ['主控', '伺服'],
          analyze: '机器人控制柜分为主控系统负责运动规划，伺服驱动单元控制各轴电机。',
          items: [
            { prefix: 1, content: '' },
            { prefix: 2, content: '' },
          ],
          rightAnswerText: '主控,伺服',
        },
        {
          id: 404,
          itemOrder: 8,
          questionType: 4,
          title: '机器人急停回路属于____安全回路，断开后所有轴立即停止输出。',
          score: 4,
          difficult: 2,
          correctArray: ['硬接线'],
          analyze: '硬接线安全回路不依赖软件，硬件触点切断动力，是工业机器人最高等级安全保护。',
          items: [
            { prefix: 1, content: '' },
          ],
          rightAnswerText: '硬接线',
        },
      ],
    },
    {
      name: '五、简答题',
      questionItems: [
        {
          id: 501,
          itemOrder: 9,
          questionType: 5,
          title: '简述机器人发生碰撞报警后的标准处理流程。',
          score: 10,
          difficult: 4,
          correct: '1.紧急停止机器人；2.检查碰撞位置；3.解除干涉；4.确认无损伤后复位零点；5.低速试运行。',
          analyze: '碰撞后首要保障人身与设备安全，逐步排查再恢复运行。',
          items: [],
          rightAnswerText: '1.紧急停止机器人；2.检查碰撞位置；3.解除干涉；4.确认无损伤后复位零点；5.低速试运行。',
        },
      ],
    },
  ],
})

const answer = reactive<IExamPaperReadVM['answer']>({
  score: 44,
  doTime: 1560,
  contentArray: ['TCP', '零点', '主控', '伺服', '硬接线'],
  answerItems: [
    { itemOrder: 1, content: 'B', doRight: true, score: 5 },
    { itemOrder: 2, content: 'A', doRight: false, score: 0 },
    { itemOrder: 3, content: 'A,B,D', doRight: false, score: 0 },
    { itemOrder: 4, content: '错误', doRight: true, score: 4 },
    { itemOrder: 5, content: ['TCP'], doRight: true, score: 5 },
    { itemOrder: 6, content: ['零点'], doRight: true, score: 4 },
    { itemOrder: 7, content: ['主控', '伺服'], doRight: true, score: 6 },
    { itemOrder: 8, content: ['硬接线'], doRight: false, score: 0 },
    { itemOrder: 9, content: '先停机，检查碰撞位置，清理干涉，复位零点试运行。', doRight: null, score: 10 },
  ],
})

let timer: number | null = null

/** 返回记录页面 */
function returnRecord() {
  uni.reLaunch({
    url: '/pages/record/index',
  })
}

/** 超时触发 */
function timeOut() {
  if (timer)
    clearInterval(timer)
  timeOutShow.value = true
}

onLoad(async (options: { id?: string }) => {
  if (!options?.id)
    return
  const id = Number(options.id)
  paperId.value = id
  spinShow.value = true
  try {
    const res = await studentExamPaperAnswerReadAPI(id)
    if (res.code === 1) {
      const vm: IExamPaperReadVM = res.response
      // 预处理：提前计算每道题正确答案文本，模板不再调用函数，解决rich-text递归报错
      vm.paper.titleItems.forEach((titleItem) => {
        titleItem.questionItems.forEach((q) => {
          if (q.questionType === 3) {
            q.rightAnswerText = trueFalseFormatter(q)
          }
          else if ([1, 2, 5].includes(q.questionType)) {
            q.rightAnswerText = q.correct ?? ''
          }
          else if (q.questionType === 4) {
            q.rightAnswerText = q.correctArray?.join(',') ?? ''
          }
          else {
            q.rightAnswerText = ''
          }
        })
      })
      Object.assign(paper, vm.paper)
      Object.assign(answer, vm.answer)
    }
  }
  catch (e) {
    uni.showToast({ title: e?.message || '请求异常', icon: 'none' })
  }
  finally {
    spinShow.value = false
  }
})

onUnload(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
})
</script>

<template>
  <view class="exam-page">
    <view class="view-wrap-hidden" />
    <view>
      <view class="exam-name-title">
        <h1>{{ paper.name }}</h1>
      </view>
      <view class="exam-result">
        <h1 class="exam-result-item">
          试卷得分: {{ answer.score }}
        </h1>
        <h1 class="exam-result-item exam-result-detail">
          试卷耗时: {{ answer.doTime }}秒
        </h1>
      </view>
      <uni-section
        v-for="titleItem in paper.titleItems"
        :key="titleItem.name"
        :title="titleItem.name"
        class="exam-panel-title"
      >
        <uni-list :border="false" class="exam-cell">
          <uni-list-item
            v-for="questionItem in titleItem.questionItems"
            :key="questionItem.id"
          >
            <template #body>
              <view v-if="questionItem.questionType === 1">
                <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" />
                <radio-group :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}`" class="exam-item">
                  <label v-for="radioItem in questionItem.items" :key="radioItem.prefix" class="radio exam-radio-item-label">
                    <radio color="#2d8cf0" :value="radioItem.prefix" :checked="radioItem.checked" class="exam-item-left" />
                    <rich-text
                      :nodes="`${radioItem.prefix}. ${radioItem.content}`"
                      class="exam-item-left"
                      :class="[{ 'item-content-selected': radioItem.prefix === answer.answerItems[questionItem.itemOrder - 1].content }]"
                    />
                  </label>
                </radio-group>
              </view>
              <view v-else-if="questionItem.questionType === 2">
                <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" class="exam-item-left" style="line-height:35px" />
                <checkbox-group
                  :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}`"
                  class="exam-item exam-item-left"
                >
                  <label v-for="radioItem in questionItem.items" :key="`${questionItem.id}_${radioItem.prefix}`" class="exam-radio-item-label">
                    <checkbox
                      color="#2d8cf0"
                      :value="radioItem.prefix"
                      :checked="answer.answerItems[questionItem.itemOrder - 1]?.content?.includes(radioItem.prefix)"
                      class="exam-item-left"
                    />
                    <rich-text
                      :nodes="`${radioItem.prefix}. ${radioItem.content}`"
                      class="exam-item-left"
                      :class="[
                        {
                          'item-content-selected': answer.answerItems[questionItem.itemOrder - 1]?.content?.includes(radioItem.prefix),
                        },
                      ]"
                    />
                  </label>
                </checkbox-group>
              </view>
              <view v-else-if="questionItem.questionType === 3">
                <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" />
                <radio-group :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}`" class="exam-item">
                  <label v-for="radioItem in questionItem.items" :key="radioItem.prefix" class="radio exam-radio-item-label">
                    <radio :value="radioItem.prefix" :checked="radioItem.prefix === answer.answerItems[questionItem.itemOrder - 1].content" class="exam-item-left" color="#2d8cf0" />
                    <rich-text :nodes="radioItem.content" class="exam-item-left" />
                  </label>
                </radio-group>
              </view>
              <view v-else-if="questionItem.questionType === 4">
                <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" />
                <view v-for="(inputItem, idx) in questionItem.items" :key="inputItem.prefix" class="exam-input-contain">
                  <view class="exam-input-contain-title">
                    空{{ inputItem.prefix }}：
                  </view>
                  <input
                    :value="answer.answerItems[questionItem.itemOrder - 1].content[idx]"
                    :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}_${idx}`"
                    class="exam-input-contain-content"
                  >
                </view>
              </view>
              <view v-else>
                <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" />
                <view class="exam-textarea-contain">
                  <textarea
                    v-model="answer.answerItems[questionItem.itemOrder - 1].content"
                    placeholder=""
                    :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}`"
                  />
                </view>
              </view>
              <view class="exam-clear">
                <view class="exam-extend-item" style="padding-left:0px">
                  结果:
                  <text
                    v-if="answer.answerItems[questionItem.itemOrder - 1].doRight === true"
                    class="question-answer-right question-answer-result"
                  >
                    正确
                  </text>
                  <text
                    v-else-if="answer.answerItems[questionItem.itemOrder - 1].doRight === false"
                    class="question-answer-error question-answer-result"
                  >
                    错误
                  </text>
                  <text
                    v-else-if="answer.answerItems[questionItem.itemOrder - 1].doRight === null"
                    class="question-answer-judge question-answer-result"
                  >
                    待批改
                  </text>
                </view>
                <view class="exam-extend-item">
                  得分: {{ answer.answerItems[questionItem.itemOrder - 1].score }}
                </view>
                <view class="exam-extend-item">
                  分数: {{ questionItem.score }}
                </view>
                <view class="exam-extend-item" style="padding-left:0px">
                  难度:
                  <uni-rate :value="questionItem.difficult" class="exam-item-rate" />
                </view>
                <view class="exam-extend-item">
                  <rich-text :nodes="`解析: ${questionItem.analyze}`" />
                </view>
                <!-- 直接读取预处理好的rightAnswerText，模板不再执行任何函数、join -->
                <view class="exam-extend-item">
                  <rich-text :nodes="`正确答案: ${questionItem.rightAnswerText}`" />
                </view>
              </view>
            </template>
          </uni-list-item>
        </uni-list>
      </uni-section>

      <!-- 示例返回记录按钮，可按需开启 -->
      <!-- <button @click="returnRecord">返回记录</button> -->
    </view>
  </view>
</template>

<style scoped lang="scss">
.exam-page {
  padding: 20rpx;
}
.exam-name-title {
  text-align: center;
  margin: 30rpx 0;
  h1 {
    font-size: 34rpx;
    font-weight: 600;
  }
}
.exam-result {
  display: flex;
  gap: 40rpx;
  justify-content: center;
  margin-bottom: 30rpx;
  .exam-result-item {
    font-size: 30rpx;
    color: #333;
  }
}
.exam-input-contain {
  display: flex;
  align-items: center;
  margin: 16rpx 0;
  .exam-input-contain-title {
    width: 120rpx;
    font-size: 28rpx;
  }
  .exam-input-contain-content {
    flex: 1;
    border: 1rpx solid #eee;
    padding: 12rpx 20rpx;
    border-radius: 8rpx;
  }
}
.exam-textarea-contain {
  margin: 20rpx 0;
  textarea {
    min-height: 160rpx;
    background: #f7f7f7;
    padding: 20rpx;
    border-radius: 8rpx;
  }
}
.exam-extend-item {
  margin: 12rpx 0;
  font-size: 26rpx;
}
.question-answer-right {
  color: #07c160;
}
.question-answer-error {
  color: #f56c6c;
}
.question-answer-judge {
  color: #e6a23c;
}
</style>
