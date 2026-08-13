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

const message = reactive({ title: '账户变动通知', sendUserName: '系统管理员', createTime: '2026-08-11 14:25:36', content: '您好，您提交的业务申请已审核完成。审核结果：通过。您可以前往订单页面查看详细单据信息，如有疑问可联系在线客服。' })

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
})
</script>

<template>
  <view class="msg_page">
    <view class="msg_title">
      {{ message.title }}
    </view>
    <view>
      <view class="msg_content">
        发送人：{{ message.sendUserName }}
      </view>
      <view class="msg_content">
        发送时间：{{ message.createTime }}
      </view>
      <view class="msg_content">
        发送内容：{{ message.content }}
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.msg_page {
  background: white;
  width: 100%;
  height: 100%;
  padding: 10px 0px;

  .msg_title {
    text-align: center;
    font-size: 14px;
  }

  .msg_content {
    padding: 8px 15px;
    font-size: 14px;
  }
}
</style>
