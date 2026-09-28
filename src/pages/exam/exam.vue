<script lang="ts" setup>
import { studentExamPaperPageListAPI } from '@/api/student/exampaper'
import type { IPaperInfoVM } from '@/api/student/exampaper'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: '考试',
  },
  enablePullDownRefresh: true,
})

const current = ref(0)
const tabItems = ref(['固定试卷', '时段试卷'])
const paperType = ref(1)
const spinShow = ref(false)
const loadMoreStatus = ref<'more' | 'loading' | 'noMore'>('more')
const contentText = ref({
  contentdown: '上拉加载更多',
  contentrefresh: '正在加载',
  contentnomore: '暂无数据',
})
const total = ref(5)
const tableData = reactive([
  {
    id: 1,
    name: '工业机器人基础理论试卷（一）',
    subjectName: '机器人应用技术',
  },
  {
    id: 2,
    name: 'PLC电气控制专项考卷',
    subjectName: '电气自动化',
  },
  {
    id: 3,
    name: '设备安全操作规范测试卷',
    subjectName: '安全生产管理',
  },
  {
    id: 4,
    name: '机器视觉调试模拟试题',
    subjectName: '视觉系统应用',
  },
  {
    id: 5,
    name: '多机协同运维综合试卷',
    subjectName: '智能产线运维',
  },
])
const queryParam = reactive({
  paperType: 1,
  pageIndex: 1,
  pageSize: 10,
})

onLoad(() => {
  spinShow.value = true
  search(true)
})

function tabChange(e: { currentIndex: number }) {
  console.log('tabChange', e)
  // 0固定试卷=1，1时段试卷=4（和后端枚举 paperTypeEnum）
  const typeMap: Record<number, number> = {
    0: 1,
    1: 4,
  }
  const newType = typeMap[e.currentIndex]
  paperType.value = newType
  queryParam.paperType = newType
  queryParam.pageIndex = 1
  spinShow.value = true
  search(true)
}
/**
 * @param override true 覆盖(下拉/切换tab) false 追加(上拉加载)
 */
async function search(override: boolean) {
  spinShow.value = true
  try {
    const res = await studentExamPaperPageListAPI(queryParam)
    uni.stopPullDownRefresh()
    if (res.code === 1) {
      const re = res.response
      queryParam.pageIndex = re.pageIndex
      if (override) {
        tableData.value = re.list
      }
      else {
        tableData.value = [...tableData.value, ...re.list]
      }
      total.value = re.total

      const maxPage = Math.ceil(re.total / re.pageSize)
      if (re.pageIndex >= maxPage) {
        loadMoreStatus.value = 'noMore'
      }
      else {
        loadMoreStatus.value = 'more'
      }
    }
  }
  catch (e) {
    uni.showToast({ title: e?.message || '请求异常', icon: 'none' })
  }
  finally {
    spinShow.value = false
  }
}

// 下拉刷新
async function onPullDownRefresh() {
  queryParam.pageIndex = 1
  loadMoreStatus.value = 'more'
  await search(true)
}

// 上拉触底
async function onReachBottom() {
  const maxPage = Math.ceil(total.value / queryParam.pageSize)
  if (queryParam.pageIndex < maxPage && loadMoreStatus.value !== 'loading') {
    loadMoreStatus.value = 'loading'
    queryParam.pageIndex += 1
    await search(false)
  }
}
</script>

<template>
  <view class="uni-padding-wrap uni-common-mt">
    <uni-segmented-control
      class="my_tab_item"
      :current="current" :values="tabItems" style-type="text"
      active-color="#007aff" @click-item="tabChange"
    />
  </view>
  <uni-section>
    <uni-list>
      <uni-list-item
        v-for="item in tableData"
        :key="item.id"
        show-arrow
        :title="item.name"
        :to="`/pages/exam/do?id=${item.id}`"
        :right-text="item.subjectName ?? ''"
      />
    </uni-list>
  </uni-section>
  <uni-load-more :status="loadMoreStatus" :content-text="contentText" />
</template>

<style scoped lang="scss">
</style>
