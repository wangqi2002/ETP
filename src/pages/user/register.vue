<script lang="ts" setup>
import { getCurrentInstance, onMounted, ref } from 'vue'
import { isRestSuccess } from '@/api/types/base'
import { wxStudentUserRegisterAPI } from '@/api/auth.ts'
import * as enumItem from '@/utils/enumItem.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'register',
  },
})

const { proxy } = getCurrentInstance()!
const app = proxy?.$app

const spinShow = ref(false)
const levelIndex = ref(0)
const userName = ref('')
const password = ref('')

function bindLevelChange(e: any) {
  levelIndex.value = e.detail.value
}

async function formSubmit() {
  const form = {
    userName: userName.value,
    password: password.value,
    userLevel: enumItem.state.user.levelEnum[levelIndex.value].key,
  }

  if (!form.userName) {
    app?.message('用户名不能为空', 'error')
    return
  }
  if (!form.password) {
    app?.message('密码不能为空', 'error')
    return
  }
  if (!form.userLevel) {
    app?.message('年级不能为空', 'error')
    return
  }

  spinShow.value = true
  try {
    const res = await wxStudentUserRegisterAPI(form)
    if (isRestSuccess(res)) {
      uni.reLaunch({
        url: '/pages/user/bind/index',
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
    <i-panel title="年级">
      <picker mode="selector" range="{{ enumItem.state.user.levelEnum }}" range-key="{{'value'}}" value="{{levelIndex}}" bindchange="bindLevelChange">
        <view class="i-cell i-input exam-pick-input">
          {{ enumItem.state.user.levelEnum[levelIndex].value }}
        </view>
        <i-input value="{{enumItem.state.user.levelEnum[levelIndex].key}}" maxlength="-1" name="userLevel" class="exam-hidden" />
      </picker>
    </i-panel>
    <view>
      <button class="i-btn i-btn- i-btn-primary i-btn-square" form-type="submit">
        注册
      </button>
    </view>
    <i-spin size="large" fix wx:if="{{ spinShow }}" />
  </form>

  <i-message id="message" />
</template>
