<script lang="ts" setup>
import { reactive } from 'vue'
import { enumItem } from '/utils/enumItem.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'message',
  },
})

const userInfo = reactive({})
const spinShow = ref(false)
const levelIndex = ref(0)

function loadUserInfo() {
  console.log('获取用户信息')
}
function su() {
  console.log('提交')
}
function cancels() {
  console.log('取消')
}

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
  loadUserInfo()
})
</script>

<template>
  <uni-forms
    ref="userInfo"
  >
    <i-panel title="真实姓名">
      <i-input value="{{ userInfo.realName }}" name="realName" maxlength="-1" />
    </i-panel>
    <i-panel title="年龄">
      <i-input value="{{ userInfo.age }}" name="age" maxlength="-1" />
    </i-panel>
    <i-panel title="性别">
      <radio-group class="radio-group my-info-sex" name="sex">
        <label class="radio my-info-sex-item" wx:for="{{ enumItem.state.user.sexEnum }}" wx:key="{{item.key}}" wx:for-item="radioItem">
          <radio color="#2d8cf0" value="{{radioItem.key}}" checked="{{radioItem.key===userInfo.sex}}" />
          <text>{{ radioItem.value }}</text>
        </label>
      </radio-group>
    </i-panel>
    <i-panel title="出生日期">
      <picker class="weui-btn" mode="date" value="{{userInfo.birthDay}}" bindchange="bindDateChange">
        <view class="i-cell i-input exam-pick-input">
          {{ userInfo.birthDay }}
        </view>
        <i-input value="{{ userInfo.birthDay }}" class="exam-hidden" name="birthDay" maxlength="-1" />
      </picker>
    </i-panel>
    <i-panel title="手机">
      <i-input value="{{ userInfo.phone }}" name="phone" maxlength="-1" />
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
        保存
      </button>
    </view>
    <button @click="su()">
      提交
    </button>
    <button @click="cancels()">
      重置
    </button>
  </uni-forms>
</template>
