<script lang="ts" setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { isRestSuccess } from '@/api/types/base'
import { studentUserMessageReadAPI } from '@/api/user.ts'
import type { IMessageResponseVM } from '@/api/user.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'info',
  },
})

const { proxy } = getCurrentInstance()!
const app = proxy?.$app
const route = useRoute()
const spinShow = ref(false)
const message = reactive<IMessageResponseVM>({
  id: 0,
  messageId: 0,
  receiveUserId: 0,
  read: false,
  title: '账户变动通知',
  sendUserName: '系统管理员',
  createTime: '2026-08-11 14:25:36',
  content: '您好，您提交的业务申请已审核完成。审核结果：通过。您可以前往订单页面查看详细单据信息，如有疑问可联系在线客服。',
})

/**
 * 获取消息详情并标记已读
 */
async function loadMessageDetail() {
  const msgId = Number(route.query.id)
  if (!msgId)
    return

  spinShow.value = true
  try {
    // 注意：附件user.ts没有detail接口；原接口 /api/wx/student/user/message/detail/{id}
    // 若后续api补充 detailAPI，请替换下面这行
    // const detailRes = await studentUserMessageDetailAPI(msgId)

    // ----------临时占位，待补充detail接口后替换----------
    // const detailRes = await xxx
    // if(isRestSuccess(detailRes)){
    //   Object.assign(message, detailRes.response)
    // }
    // ---------------------------------------------------

    // 调用标记已读接口
    await studentUserMessageReadAPI(msgId)
  }
  catch (e) {
    app?.message(e, 'error')
  }
  finally {
    spinShow.value = false
  }
}

onMounted(() => {
  loadMessageDetail()
})
</script>

<template>
  <view class="msg_page">
    <view class="msg_title">
      {{ message.title }}
    </view>
    <view>
      <view class="msg_content">
        发送人：{{ message.sendUserName }}
      </view>
      <view class="msg_content">
        发送时间：{{ message.createTime }}
      </view>
      <view class="msg_content">
        发送内容：{{ message.content }}
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.msg_page {
  background: white;
  width: 100%;
  height: 100%;
  padding: 10px 0px;

  .msg_title {
    text-align: center;
    font-size: 14px;
  }

  .msg_content {
    padding: 8px 15px;
    font-size: 14px;
  }
}
</style>
