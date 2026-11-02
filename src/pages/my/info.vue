<script lang="ts" setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
import * as enumItem from '@/utils/enumItem.ts'
import type { IRestResponse } from '@/api/types/base'
import { studentUserCurrentAPI, studentUserUpdateAPI } from '@/api/student/user.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'message',
  },
})

const { proxy } = getCurrentInstance()!
const app = proxy?.$app

const userInfo = reactive<any>({})
const spinShow = ref(false)
const levelIndex = ref(0)

/**
 * 加载用户信息
 */
async function loadUserInfo() {
  spinShow.value = true
  try {
    const res = useRequest<IRestResponse<any>>(() => studentUserCurrentAPI())
    if (res.code === 1) {
      Object.assign(userInfo, res.response)
      levelIndex.value = (res.response.userLevel ?? 1) - 1
    }
  }
  catch (e) {
    app.message(e, 'error')
  }
  finally {
    spinShow.value = false
  }
}

/**
 * 年级选择变更
 */
function bindLevelChange(e: any) {
  levelIndex.value = e.detail.value
}

/**
 * 日期选择变更
 */
function bindDateChange(e: any) {
  const { value } = e.detail
  userInfo.birthDay = value
}

/**
 * 表单提交
 */
async function formSubmit() {
  uni.showLoading({
    title: '提交中',
    mask: true,
  })
  try {
    const res = useRequest<IRestResponse<any>>(() => studentUserUpdateAPI(userInfo))
    if (res.code === 1) {
      uni.reLaunch({
        url: '/pages/my/index/index',
      })
    }
    else {
      app.message(res.message, 'error')
    }
  }
  catch (e) {
    app.message(e, 'error')
  }
  finally {
    uni.hideLoading()
  }
}

onMounted(() => {
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
