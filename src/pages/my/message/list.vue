<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'message',
  },
})
const spinShow = ref(false)
const loadMoreLoad = ref(false)
const loadMoreTip = ref('暂无数据')
const tableData = ref([])
const total = ref(1)
const queryParam = reactive({
  pageIndex: 1,
  pageSize: app.globalData.pageSize,
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
  <view>
    <i-cell-group>
      <i-cell wx:for="{{tableData}}" data-item="item" label="{{item.content}}" wx:key="{{item.id}}" url="/pages/my/message/info/index?id={{item.id}}" title="{{item.title}}" lable="{{item.content}}" is-link value="{{enumItem.format(enumItem.state.user.message.readText,item.readed)}}" />
    </i-cell-group>
  </view>

  <i-load-more tip="{{loadMoreTip}}" loading="{{loadMoreLoad}}" />
  <i-spin size="large" fix wx:if="{{ spinShow }}" />
  <i-message id="message" />
</template>
