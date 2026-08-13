<script lang="ts" setup>
import { reactive } from 'vue'

definePage({
  style: {
    navigationBarTitleText: '我的',
  },
})

const info = reactive({ imagePath: '/static/images/avatar.jpg', userName: '汪可' })
const extraIconList = [{
  color: '#4cd964',
  size: '22',
  type: 'contact-filled',
}, {
  color: '#4cd964',
  size: '22',
  type: 'star-filled',
}, {
  color: '#4cd964',
  size: '22',
  type: 'chat-filled',
}, {
  color: '#4cd964',
  size: '22',
  type: 'gear-filled',
}, {
  color: '#4cd964',
  size: '22',
  type: 'hand-up-filled',
}, {
  color: '#4cd964',
  size: '22',
  type: 'info-filled',
}, {
  color: '#4cd964',
  size: '22',
  type: 'undo-filled',
}]
const spinShow = ref(false)

function onClick(e) {
  console.log('执行click事件', e.data)
  uni.showToast({
    title: '点击反馈',
  })
};
</script>

<template>
  <view class="user_info">
    <view>
      <image class="user_info_avatar" :src="info.imagePath" />
      <text class="user_info_nickname">{{ info.userName }}</text>
    </view>
  </view>
  <view>
    <uni-list class="my_group_margin">
      <uni-list-item title="个人资料" link to="/pages/my/info" :show-extra-icon="true" show-arrow :extra-icon="extraIconList[0]" @click="onClick(($event, 1))" />
      <uni-list-item title="个人动态" link to="/pages/my/log" :show-extra-icon="true" show-arrow :extra-icon="extraIconList[1]" />
      <uni-list-item title="消息" link to="/pages/my/message/list" :show-extra-icon="true" show-arrow :extra-icon="extraIconList[2]" />
      <uni-list-item title="设置" :show-extra-icon="true" show-arrow :extra-icon="extraIconList[3]" @click="onClick(($event, 1))" />
      <uni-list-item title="反馈" :show-extra-icon="true" show-arrow :extra-icon="extraIconList[4]" />
      <uni-list-item title="关于" :show-extra-icon="true" show-arrow :extra-icon="extraIconList[5]" />
    </uni-list>
  </view>
  <view>
    <uni-list class="my_group_margin">
      <uni-list-item title="退出账号" :show-extra-icon="true" show-arrow :extra-icon="extraIconList[6]" @click="onClick(($event, 1))" />
    </uni-list>
  </view>
</template>

<style scoped lang="scss">
.user_info {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #598ce4;
  height: 100px;
  .user_info_avatar {
    width: 48px;
    height: 48px;
    margin-left: 30px;
  }

  .user_info_nickname {
    color: white;
    margin-left: 20px;
  }
}
.my_group_margin {
  margin-top: 10px;
}
</style>
