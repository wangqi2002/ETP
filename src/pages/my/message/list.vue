<script lang="ts" setup>
import * as enumItem from '@/utils/enumItem.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'message',
  },
})
const spinShow = ref(false)
const loadMoreStatus = ref('more')
const loadMoreTip = ref('上拉加载更多')
const tableData = reactive([{
  id: 1,
  title: '系统通知',
  content: '您提交的售后申请已通过审核，请留意后续物流信息。',
  readed: 0, // 0未读 1已读，对应 wxs 状态格式化
}, {
  id: 2,
  title: '活动提醒',
  content: '平台限时优惠活动即将开启，点击查看活动详情。',
  readed: 0,
}, {
  id: 3,
  title: '订单通知',
  content: '您的订单已发货，快递公司：顺丰速运，运单号：SF1234567890',
  readed: 1,
}, {
  id: 4,
  title: '账户安全提醒',
  content: '检测到新设备登录您的账号，如非本人操作请及时修改密码。',
  readed: 0,
}, {
  id: 5,
  title: '服务通知',
  content: '客服已回复您的咨询，可进入消息详情查看完整对话。',
  readed: 1,
}])
const total = ref(1)
const queryParam = reactive({
  pageIndex: 1,
  pageSize: 10,
})

function onPullDownRefresh() {
  console.log('onPullDownRefresh')
}
function onReachBottom() {
  console.log('onReachBottom')
}
function search() {
  console.log('search')
}

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
})
</script>

<template>
  <uni-section type="line">
    <uni-list>
      <uni-list-item
        v-for="item in tableData" :key="item.id" show-arrow
        :title="item.title"
        :note="item.content"
        :to="`/pages/my/message/info?id=${item.id}`"
      />
    </uni-list>
  </uni-section>
  <uni-load-more :status="loadMoreStatus" :content-text="loadMoreTip" />
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
