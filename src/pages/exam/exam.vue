<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: '考试',
  },
})

const paperType = ref(1)
const spinShow = ref(false)
const loadMoreLoad = ref(false)
const loadMoreTip = ref('暂无数据')
const total = ref(1)
const tableData = reactive([])
const queryParam = reactive({
  paperType: 1,
  pageIndex: 1,
  pageSize: app.globalData.pageSize,
})

function tabChange() {
  console.log('tabChange')
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
  <view>
    <i-tabs current="{{ paperType }}" bindchange="tabChange" fixed="true">
      <i-tab key="1" title="固定试卷" />
      <i-tab key="4" title="时段试卷" />
    </i-tabs>
    <view class="exam-tab-view">
      <i-cell-group>
        <i-cell
          wx:for="{{tableData}}" data-item="item" wx:key="{{item.id}}" title="{{item.name}}" is-link
          url="/pages/exam/do/index?id={{item.id}}" value="{{item.subjectName}}"
        />
      </i-cell-group>
    </view>
    <i-load-more tip="{{loadMoreTip}}" loading="{{loadMoreLoad}}" i-class="xzs-load-more" />
    <i-spin size="large" fix wx:if="{{ spinShow }}" />
    <i-message id="message" />
  </view>
</template>
