<script lang="ts" setup>
import { getCurrentInstance, onMounted, ref } from 'vue'
import { isRestSuccess } from '@/api/types/base'
import { wxStudentAuthBindAPI } from '@/api/auth.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'bind',
  },
})

const { proxy } = getCurrentInstance()!
const app = proxy?.$app

const spinShow = ref(false)
const userName = ref('student')
const password = ref('123456')

/**
 * 表单提交 - 微信绑定账号
 */
async function formSubmit() {
  spinShow.value = true
  uni.login({
    success: async (wxres) => {
      if (wxres.code) {
        try {
          const req = {
            userName: userName.value,
            password: password.value,
            code: wxres.code,
          }
          const res = await wxStudentAuthBindAPI(req)
          if (isRestSuccess(res)) {
            uni.setStorageSync('token', res.response)
            uni.reLaunch({
              url: '/pages/index/index',
            })
          }
          else {
            app?.message(res.message, 'error')
          }
        }
        catch (e) {
          app?.message(e, 'error')
        }
        finally {
          spinShow.value = false
        }
      }
      else {
        spinShow.value = false
        app?.message(wxres.errMsg, 'error')
      }
    },
    fail: () => {
      spinShow.value = false
    },
  })
}

/**
 * 跳转注册页
 */
function register() {
  uni.navigateTo({
    url: '../register/index',
  })
}

onMounted(() => {
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
