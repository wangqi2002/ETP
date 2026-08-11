<script lang="ts" setup>
import { enumItem } from '/utils/enumItem.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'bind',
  },
})

const spinShow = ref(false)
const userName = ref('')
const password = ref('')

function formSubmit() {
  console.log('formSubmit')
}
function register() {
  console.log('register')
}

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
})
</script>

<template>
  <view class="card-image-container">
    <image src="/assets/logo2.png" style="width:175px;height:147px" />
  </view>

  <form bindsubmit="formSubmit">
    <i-panel title="用户名">
      <i-input value="{{ userName }}" name="userName" maxlength="-1" />
    </i-panel>

    <i-panel title="密码">
      <i-input value="{{ password }}" name="password" maxlength="-1" />
    </i-panel>

    <view>
      <button class="i-btn i-btn- i-btn-primary i-btn-square" form-type="submit">
        登录
      </button>
    </view>
    <view style="padding:font-size: 26rpx;color: #606266;padding: 20rpx 50rpx;">
      学之思是一款学校考试系统，仅供学校内部学生使用，需要提供账号密码。没有账号?
      <text bindtap="register" style="color:#4399fc">马上注册</text>
    </view>
    <i-spin size="large" fix wx:if="{{ spinShow }}" />
  </form>

  <i-message id="message" />
</template>
