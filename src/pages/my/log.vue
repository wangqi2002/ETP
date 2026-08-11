<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'log',
  },
})

const logList = ref(null)
const len = ref(0)

function search() {
  console.log('search,search,search')
}

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
  search()
})
</script>

<template>
  <view class="user-log-page">
    <view wx:for="{{logList}}" data-item="item" wx:key="{{item.id}}" class="i-step-item i-step-process i-step-vertical" style="width : 100%;">
      <view class="i-step-item-ico">
        <view class="i-step-ico" />
        <view class="i-step-line" wx:if="{{ index !== len - 1 }}" />
      </view>
      <view class="i-step-item-main">
        <view class="i-step-item-title">
          {{ item.createTime }}
        </view>
        <view class="i-step-item-content">
          {{ item.content }}
        </view>
      </view>
      <i-spin size="large" fix wx:if="{{ spinShow }}" />
      <i-message id="message" />
    </view>
  </view>
</template>
