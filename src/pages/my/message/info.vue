<script lang="ts" setup>
import { reactive } from 'vue'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'info',
  },
})

const message = reactive({})

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
})
</script>

<template>
  <view class="msg-page">
    <view class="msg-title">
      <h1>{{ message.title }}</h1>
    </view>
    <view>
      <view class="msg-content">
        <h1>发送人：{{ message.sendUserName }}</h1>
      </view>
      <view class="msg-content">
        <h1>发送时间：{{ message.createTime }}</h1>
      </view>
      <view class="msg-content">
        <h1>发送内容：{{ message.content }}</h1>
      </view>

      <i-spin size="large" fix wx:if="{{ spinShow }}" />
      <i-message id="message" />
    </view>
  </view>
</template>
