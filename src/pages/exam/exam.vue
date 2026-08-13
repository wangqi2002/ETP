<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: '考试',
  },
})

const current = ref(0)
const tabItems = ref(['固定试卷', '时段试卷'])
const paperType = ref(1)
const spinShow = ref(false)
const loadMoreLoad = ref('more')
const loadMoreTip = ref('上拉加载更多')
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

function tabChange(e) {
  console.log('tabChange', e)
  if (current.value !== e.currentIndex) {
    current.value = e.currentIndex
  }
}
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
        v-show="current === 0" :key="item.id" show-arrow
        :title="item.name"
        :to="`/pages/exam/read?id=${item.id}`"
        :right-text="`${item.subjectName}`"
      />
      <uni-list-item
        v-for="item in tableData"
        v-show="current === 1" :key="item.id" show-arrow
        :title="item.name"
        :to="`/pages/exam/read?id=${item.id}`"
      />
    </uni-list>
  </uni-section>
  <uni-load-more :status="loadMoreStatus" :content-text="loadMoreTip" />
</template>

<style scoped lang="scss">
.my_tab_item {
  color: #007aff !important;
}
</style>
