<script lang="ts" setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
import { isRestSuccess } from '@/api/types/base'
import { studentUserMessagePageAPI } from '@/api/user.ts'
import type { IMessageRequestVM, IMessageResponseVM, IPageInfo } from '@/api/user.ts'

defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'message',
  },
  enablePullDownRefresh: true,
})

const { proxy } = getCurrentInstance()!
const app = proxy?.$app

const spinShow = ref(false)
const loadMoreStatus = ref('more')
const loadMoreTip = ref('上拉加载更多')
const loading = ref(false)

const tableData = reactive<IMessageResponseVM[]>([])
const total = ref(1)
const queryParam = reactive<IMessageRequestVM>({
  pageIndex: 1,
  pageSize: 10,
})

/**
 * 查询消息列表
 * @param override 是否覆盖数据（下拉刷新 true；上拉加载 false）
 */
async function search(override: boolean) {
  loading.value = true
  spinShow.value = true
  try {
    const res = await studentUserMessagePageAPI(queryParam)
    uni.stopPullDownRefresh()
    if (isRestSuccess(res)) {
      const re: IPageInfo<IMessageResponseVM> = res.response
      queryParam.pageIndex = re.pageIndex
      total.value = re.total

      if (override) {
        tableData.splice(0, tableData.length, ...re.list)
      }
      else {
        tableData.push(...re.list)
      }

      // 判断是否到最后一页
      if (re.pageIndex >= re.pages) {
        loadMoreStatus.value = 'no-more'
        loadMoreTip.value = '暂无数据'
      }
      else {
        loadMoreStatus.value = 'more'
        loadMoreTip.value = '上拉加载更多'
      }
    }
  }
  catch (e) {
    app?.message(e, 'error')
  }
  finally {
    spinShow.value = false
    loading.value = false
  }
}

/**
 * 下拉刷新
 */
async function onPullDownRefresh() {
  if (loading.value)
    return
  queryParam.pageIndex = 1
  await search(true)
}

/**
 * 上拉触底加载更多
 */
async function onReachBottom() {
  if (loading.value || queryParam.pageIndex! >= total.value)
    return
  loadMoreStatus.value = 'loading'
  loadMoreTip.value = '正在加载'
  queryParam.pageIndex! += 1
  await search(false)
}

onMounted(() => {
  search(true)
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
