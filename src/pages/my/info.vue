<script lang="ts" setup>
import { reactive } from 'vue'
import * as enumItem from '@/utils/enumItem.ts'

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
function bindLevelChange() {
  console.log('bindLevelChange')
}
function bindDateChange() {
  console.log('bindDateChange')
}
function formSubmit() {
  console.log('formSubmit')
}

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
  loadUserInfo()
})
</script>

<template>
  <uni-forms
    class="my_info"
    :model-value="userInfo"
    label-position="top"
  >
    <uni-forms-item label="姓名" required>
      <input v-model="userInfo.name" placeholder="请输入姓名">
    </uni-forms-item>
    <uni-forms-item label="年龄" required>
      <input v-model="userInfo.age" placeholder="请输入年龄">
    </uni-forms-item>
    <uni-forms-item label="性别" required>
      <uni-data-checkbox v-model="userInfo.sex" class="my_info_sex" :localdata="enumItem.state.user.sexEnum" />
    </uni-forms-item>
    <uni-forms-item label="出生日期">
      <uni-datetime-picker v-model="userInfo.birthday" type="date" return-type="timestamp" />
    </uni-forms-item>
    <uni-forms-item label="手机号">
      <input v-model="userInfo.telephone" placeholder="请输入电话号码">
    </uni-forms-item>
    <uni-forms-item label="年级">
      <input v-model="userInfo.age" placeholder="请输入年级">
    </uni-forms-item>
    <button class="my_info_submit" @click="formSubmit">
      提交
    </button>
  </uni-forms>
</template>

<style scoped lang="scss">
.my_info {
  margin: 10px 20px;
  .my_info_sex {
    height: 45px;
    font-size: 13px;
  }
  .my_info_submit {
    background-color: #2d8cf0;
    color: white;
  }
}
</style>
