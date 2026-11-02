<script lang="ts" setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
import { studentExamPaperAnswerPageListAPI } from '@/api/student/exampaper'
import type { IExamPaperAnswerPageResponseVM, IExamPaperAnswerPageVM, IPageInfo } from '@/api/student/exampaper'
import { isRestSuccess } from '@/api/types/base'
import * as enumItem from '@/utils/enumItem.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: '记录',
    enablePullDownRefresh: true,
  },
})

const { proxy } = getCurrentInstance()!
const app = proxy?.$app

const spinShow = ref(false)
const loading = ref(false)
const loadMoreStatus = ref<'more' | 'loading' | 'noMore'>('more')
const contentText = ref({
  contentdown: '上拉加载更多',
  contentrefresh: '正在加载',
  contentnomore: '暂无数据',
})

const totalPage = ref(0)
const queryParam = reactive<IExamPaperAnswerPageVM>({
  pageIndex: 1,
  pageSize: 10,
})
const tableData = reactive<IExamPaperAnswerPageResponseVM[]>([
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

/**
 * @param override true：下拉刷新，覆盖数据；false：上拉加载，追加数据
 */
async function search(override: boolean) {
  loading.value = true
  spinShow.value = true
  try {
    const res = await studentExamPaperAnswerPageListAPI(queryParam)
    uni.stopPullDownRefresh()
    if (isRestSuccess(res)) {
      const re: IPageInfo<IExamPaperAnswerPageResponseVM> = res.response
      queryParam.pageIndex = re.pageIndex
      totalPage.value = re.pages

      if (override) {
        tableData.splice(0, tableData.length, ...re.list)
      }
      else {
        tableData.push(...re.list)
      }

      if (re.pageIndex >= re.pages) {
        loadMoreStatus.value = 'noMore'
      }
      else {
        loadMoreStatus.value = 'more'
      }
    }
  }
  catch (e) {
    app?.message(e, 'error')
  }
  finally {
    spinShow.value = false
    loading.value = false
  }
}

// 下拉刷新
async function onPullDownRefresh() {
  if (loading.value)
    return
  queryParam.pageIndex = 1
  loadMoreStatus.value = 'more'
  await search(true)
}

// 上拉触底加载更多
async function onReachBottom() {
  if (loading.value || queryParam.pageIndex! >= totalPage.value)
    return
  loadMoreStatus.value = 'loading'
  queryParam.pageIndex! += 1
  await search(false)
}

onMounted(() => {
  search(true)
})
</script>

<template>
  <uni-section type="line">
    <uni-list>
      <uni-list-item
        v-for="item in tableData" :key="item.id" show-arrow
        :title="item.paperName"
        :note="`${item.subjectName}  对错：${item.questionCorrect}/${item.questionCount}   时间：${item.createTime}`"
        :to="`/pages/exam/read?id=${item.id}`"
        :right-text="`${enumItem.format(enumItem.state.exam.examPaperAnswer.statusEnum, item.status)}`"
      />
    </uni-list>
  </uni-section>
  <uni-load-more :status="loadMoreStatus" :content-text="contentText" />
</template>

<style scoped lang="scss">
</style>
