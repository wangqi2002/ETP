<script lang="ts" setup>
import { enumItem } from '/utils/enumItem.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'register',
  },
})

const levelIndex = ref(0)

function bindLevelChange() {
  console.log('bindLevelChange')
}
function formSubmit() {
  console.log('bindLevelChange')
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
