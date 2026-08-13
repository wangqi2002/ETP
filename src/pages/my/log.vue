<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'log',
  },
})

const logList = reactive([{
  id: 1,
  createTime: '2026-08-11 09:22:15',
  content: '用户发起申请，提交基础资料等待审核',
}, {
  id: 2,
  createTime: '2026-08-11 10:05:32',
  content: '管理员接收单据，开始核对提交信息',
}, {
  id: 3,
  createTime: '2026-08-11 11:18:40',
  content: '资料核验通过，进入下一审批环节',
}, {
  id: 4,
  createTime: '2026-08-11 14:30:11',
  content: '上级完成审批，系统生成办理单号',
}, {
  id: 5,
  createTime: '2026-08-11 15:42:26',
  content: '流程办结，相关凭证已发送至用户账号',
}])
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
  <view class="user_log_page">
    <view
      v-for="item in logList"
      :key="item.id"
      class="i-step-item i-step-process i-step-vertical"
      style="width:100%;"
    >
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

<style scoped lang="scss">
.user_log_page {
  background: #fff;
  padding: 5px;
  padding-top: 10px;

  .i-step-ico {
    background: #fff !important;
    box-sizing: border-box !important;
  }

  .i-step-item-title {
    font-size: 12px;
    font-weight: 400 !important;
  }

  .i-step-item-content {
    font-size: 12px;
    font-weight: 400 !important;
  }
}
</style>
