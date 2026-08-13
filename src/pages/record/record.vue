<script lang="ts" setup>
import * as enumItem from '@/utils/enumItem.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: '记录',
  },
})

const spinShow = ref(false)
const loadMoreLoad = ref('more')
const loadMoreTip = ref('上拉加载更多')
const tableData = reactive([
  {
    id: 1,
    paperName: '2026年度理论综合试卷',
    subjectName: '安全生产基础知识',
    questionCorrect: 28,
    questionCount: 35,
    createTime: '2026-08-10 09:15:22',
    status: 1,
  },
  {

    id: 2,
    paperName: '设备操作专项测试卷',
    subjectName: '工业机器人运维',
    questionCorrect: 22,
    questionCount: 30,
    createTime: '2026-08-10 14:32:10',
    status: 2,
  },
  {
    id: 3,
    paperName: '电气安全模拟考卷',
    subjectName: '电气控制与PLC',
    questionCorrect: 30,
    questionCount: 30,
    createTime: '2026-08-11 10:06:44',
    status: 1,
  },
  {
    id: 4,
    paperName: '现场应急处置练习题',
    subjectName: '现场管理规范',
    questionCorrect: 16,
    questionCount: 25,
    createTime: '2026-08-11 15:20:18',
    status: 1,
  },
])
const total = ref(5)
const queryParam = reactive({
  pageIndex: 1,
  pageSize: 10,
})

function onPullDownRefresh() {
  console.log('onPullDownRefresh')
}
function onReachBottom() {
  console.log('onReachBottom')
}
function search() {
  console.log('search')
}

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
})
</script>

<template>
  <uni-section type="line">
    <uni-list>
      <uni-list-item
        v-for="item in tableData" :key="item.id" show-arrow
        :title="item.paperName"
        :note="`${item.subjectName}  对错：${item.questionCorrect}/${item.questionCount}   时间：${item.createTime}`"
        :to="`/pages/exam/do?id=${item.id}`"
        :right-text="`${enumItem.format(enumItem.state.exam.examPaperAnswer.statusEnum, item.status)}`"
      />
    </uni-list>
  </uni-section>
  <uni-load-more :status="loadMoreStatus" :content-text="loadMoreTip" />
</template>

<style scoped lang="scss">
</style>
