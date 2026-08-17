<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: '试题',
  },
})

const spinShow = ref(false)
const paperId = ref(10001)
const form = reactive({
  name: '工业机器人运维综合测试试卷',
  titleItems: [
    {
      name: '一、单项选择题',
      questionItems: [
        {
          id: 101,
          itemOrder: 1,
          questionType: 1, // 单选
          title: '机器人运动学主要研究的是？',
          items: [
            { prefix: 'A', content: '电机电流控制', checked: false },
            { prefix: 'B', content: '关节角度与末端位姿关系', checked: false },
            { prefix: 'C', content: '伺服通讯协议', checked: false },
            { prefix: 'D', content: '设备散热方案', checked: false },
          ],
        },
        {
          id: 102,
          itemOrder: 2,
          questionType: 1,
          title: '机器人TCP指的是？',
          items: [
            { prefix: 'A', content: '传输控制协议', checked: false },
            { prefix: 'B', content: '工具中心点', checked: false },
            { prefix: 'C', content: '任务优先级', checked: false },
            { prefix: 'D', content: '通讯端口', checked: false },
          ],
        },
      ],
    },
    {
      name: '二、多项选择题',
      questionItems: [
        {
          id: 201,
          itemOrder: 3,
          questionType: 2, // 多选
          title: '机器人日常点检包含哪些项目？',
          items: [
            { prefix: 'A', content: '线缆有无破损', checked: false },
            { prefix: 'B', content: '减速器异响检查', checked: false },
            { prefix: 'C', content: '零点位置确认', checked: false },
            { prefix: 'D', content: '控制柜除尘', checked: false },
          ],
        },
      ],
    },
    {
      name: '三、判断题',
      questionItems: [
        {
          id: 301,
          itemOrder: 4,
          questionType: 3, // 判断
          title: '机器人运行中可以打开安全门。',
          items: [
            { prefix: '正确', content: '正确', checked: false },
            { prefix: '错误', content: '错误', checked: false },
          ],
        },
      ],
    },
    {
      name: '四、填空题',
      questionItems: [
        {
          id: 401,
          itemOrder: 5,
          questionType: 4, // 填空
          title: '机器人____标定用于获取工具坐标。',
          items: [
            { prefix: '空1：', content: '' },
          ],
        },
      ],
    },
    {
      name: '五、简答题',
      questionItems: [
        {
          id: 501,
          itemOrder: 6,
          questionType: 5, // 简答 wx:else
          title: '简述机器人发生碰撞报警后的标准处理流程。',
          items: [],
        },
      ],
    },
  ],
})
const timer = ref(null)
const doTime = ref(0)
const remainTime = ref(3600)
const remainTimeStr = ref('01:00:00')
const modalShow = ref(false)
const result = ref(0)
const timeOutShow = ref(false)
const timeOutStr = ref('考试试卷结束，请提交试卷！')

function timeReduce() {
  console.log('timeReduce')
}
function returnRecord() {
  console.log('returnRecord')
}
function timeOut() {
  console.log('timeOut')
}
function formSubmit() {
  console.log('formSubmit')
}

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
})
</script>

<template>
  <view class="exam-page">
    <view class="view-wrap">
      <view class="exam-count-down">
        {{ remainTimeStr }}
      </view>
    </view>
    <view class="view-wrap-hidden" />

    <view>
      <view class="exam-name-title">
        <h1>{{ form.name }}</h1>
      </view>
      <form>
        <uni-forms>
          <uni-section
            v-for="titleItem in form.titleItems"
            :key="titleItem.name"
            :title="titleItem.name"
            class="exam-panel-title"
          >
            <uni-list :border="false">
              <uni-list-item
                v-for="questionItem in titleItem.questionItems"
                :key="questionItem.id"
                class="exam-cell"
              >
                <template #body>
                  <view v-if="questionItem.questionType === 1">
                    <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" />
                    <radio-group :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}`" class="exam-item">
                      <label v-for="radioItem in questionItem.items" :key="radioItem.prefix" class="radio exam-radio-item-label">
                        <radio color="#2d8cf0" :value="radioItem.prefix" :checked="radioItem.checked" class="exam-item-left" />
                        <rich-text :nodes="`${radioItem.prefix}. ${radioItem.content}`" class="exam-item-left" />
                      </label>
                    </radio-group>
                  </view>
                  <view v-else-if="questionItem.questionType === 2">
                    <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" class="exam-item-left" style="line-height:35px" />
                    <checkbox-group :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}`" class="exam-item exam-item-left">
                      <label v-for="radioItem in questionItem.items" :key="radioItem.prefix" class="exam-radio-item-label">
                        <checkbox color="#2d8cf0" :value="radioItem.prefix" :checked="radioItem.checked" class="exam-item-left" />
                        <rich-text :nodes="`${radioItem.prefix}. ${radioItem.content}`" class="exam-item-left" />
                      </label>
                    </checkbox-group>
                  </view>
                  <view v-else-if="questionItem.questionType === 3">
                    <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" />
                    <radio-group :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}`" class="exam-item">
                      <label v-for="radioItem in questionItem.items" :key="radioItem.prefix" class="radio exam-radio-item-label">
                        <radio :value="radioItem.prefix" :checked="radioItem.checked" class="exam-item-left" color="#2d8cf0" />
                        <rich-text :nodes="radioItem.content" class="exam-item-left" />
                      </label>
                    </radio-group>
                  </view>
                  <view v-else-if="questionItem.questionType === 4">
                    <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" />
                    <view v-for="(inputItem, idx) in questionItem.items" :key="inputItem.prefix" class="exam-input-contain">
                      <view class="exam-input-contain-label">
                        {{ inputItem.prefix }}
                      </view>
                      <input maxlength="-1" :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}_${idx}`" class="exam-input-contain-content">
                    </view>
                  </view>
                  <view v-else>
                    <rich-text :nodes="`${questionItem.itemOrder}. ${questionItem.title}`" />
                    <view class="exam-textarea-contain">
                      <textarea placeholder="答案" maxlength="-1" :name="`${questionItem.itemOrder}_${questionItem.id}_${questionItem.questionType}`" />
                    </view>
                  </view>
                </template>
              </uni-list-item>
            </uni-list>
          </uni-section>
          <button @click="formSubmit">
            提交
          </button>
        </uni-forms>
        <view>
          <uni-popup ref="alertDialog" type="dialog">
            <uni-popup-dialog
              :type="timeOutStr" show-close="false" confirm-text="提交" title="通知" :content="timeOutStr" @confirm="formSubmit"
            />
          </uni-popup>
        </view>
      </form>

      <!-- <u-modal :show="modalShow" :title="title" cancel="returnRecord" confirm="returnRecord">
        <view>得分：{{ result }}</view>
      </u-modal>
      <i-modal title="考试结果" visible="{{modalShow}}" bind:ok="returnRecord" bind:cancel="returnRecord">
        <view>得分：{{ result }}</view>
      </i-modal> -->

      <!-- <i-spin size="large" fix wx:if="{{ spinShow }}" />
      <i-message id="message" /> -->
    </view>
  </view>
</template>

<style scoped lang="scss">
.exam-page {
  background: white;

  .view-wrap {
    position: fixed;
    width: 100%;
    background: #fff6f6;
    text-align: center;
    height: 35px;
    z-index: 999;

    .exam-count-down {
      font-size: 15px;
      line-height: 35px;
    }
  }
  .view-wrap-hidden {
    height: 35px;
  }
  .exam-name-title {
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
  }
  .exam-panel-title {
    margin-top: 30px;

    .exam-item {
      display: flex;
      flex-direction: column; /* 垂直排布，一行一个 */
      gap: 16rpx; /* 选项上下间距 */
      padding: 10rpx 0;
    }

    .exam-radio-item-label {
      float: left;
      margin-left: 10px;
      line-height: 35px;
      display: flex;
      align-items: center; // 单选框和文字垂直居中
    }

    .exam-item-left {
      float: left;
    }
    .exam-input-contain {
      margin: 10px 2px !important;
      border-width: 1px;
      border-color: #dddee1;
      border-style: solid;
      width: 95%;
      height: 40px;
    }

    .exam-input-contain-label {
      float: left;
      padding: 0px 15px;
      line-height: 40px;
    }

    .exam-input-contain-content {
      float: left;
      height: 40px;
    }

    .exam-textarea-contain {
      margin: 10px 2px !important;
      border-width: 1px;
      border-color: #dddee1;
      border-style: solid;
      width: 100%;
    }

    .exam-timeout-title {
      font-size: 16px;
      color: red;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>
