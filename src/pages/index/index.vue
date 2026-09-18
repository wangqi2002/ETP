<script lang="ts" setup>
import * as enumItem from '@/utils/enumItem.ts'
import { IIndexVM, studentDashboardIndexAPI, studentDashboardTaskAPI } from '@/api/student/dashboard.ts'

defineOptions({
  name: 'Home',
})
definePage({
  // 使用 type: "home" 属性设置首页，其他页面不需要设置，默认为page
  type: 'home',
  style: {
    // 'custom' 表示开启自定义导航栏，默认 'default'
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
  enablePullDownRefresh: true,
})

const spinShow = ref(false)
// 任务中心
const taskList = ref([
  {
    id: 'task001',
    title: '机器人运维基础任务',
    paperItems: [
      {
        examPaperId: 'paper001',
        examPaperName: '工业机器人安全规范测试卷',
        status: 0, // 未作答
        examPaperAnswerId: null,
      },
      {
        examPaperId: 'paper002',
        examPaperName: '机器人伺服电机原理试卷',
        status: 1, // 已完成
        examPaperAnswerId: 'answer002',
      },
    ],
  },
  {
    id: 'task002',
    title: '机器人实操考核任务',
    paperItems: [
      {
        examPaperId: 'paper003',
        examPaperName: '机器人码垛工艺理论试卷',
        status: 0, // 未作答
        examPaperAnswerId: null,
      },
    ],
  },
])
// 固定试卷
const fixedPaper = ref([
  {
    id: 'paper004',
    name: '工业机器人手眼标定基础卷',
  },
  {
    id: 'paper005',
    name: 'PLC与机器人通讯基础试卷',
  },
])
// 时段试卷
const timeLimitPaper = ref([
  {
    id: 'paper006',
    name: '机器人IO硬件互锁专项考卷',
    startTime: '2026-09-01 08:00',
    endTime: '2026-09-30 22:00',
  },
  {
    id: 'paper007',
    name: '机器人故障诊断限时测试',
    startTime: '2026-09-15 09:00',
    endTime: '2026-09-20 18:00',
  },
])
const pushPaper = ref([])

onLoad(() => {
  spinShow.value = true
  indexLoad()
})

// 试卷状态获取函数
function getStatusText(item: any) {
  // examPaperAnswerId为空 → 未作答
  console.log('getStatusText', item)
  if (item === 0) {
    return '未作答'
  }
  // 有答卷，走枚举格式化
  console.log('getStatusText', enumItem.state.exam.examPaperAnswer.statusEnum)
  return enumItem.format(enumItem.state.exam.examPaperAnswer.statusEnum, item)
}

// 获取跳转url
function getPaperUrl(item: any) {
  if (item === 0) {
    return `/pages/exam/do/index?id=${item.examPaperId}`
  }
  else {
    return `/pages/exam/read/index?id=${item.examPaperAnswerId}`
  }
}

// 首页加载接口
async function indexLoad() {
  spinShow.value = true
  try {
    const dashboardRes = await app.formPost('/api/wx/student/dashboard/index', null)
    if (dashboardRes.code === 1) {
      fixedPaper.value = dashboardRes.response.fixedPaper
      timeLimitPaper.value = dashboardRes.response.timeLimitPaper
      pushPaper.value = dashboardRes.response.pushPaper
    }

    const taskRes = await app.formPost('/api/wx/student/dashboard/task', null)
    if (taskRes.code === 1) {
      taskList.value = taskRes.response
    }
  }
  catch (e) {
    app.message(e, 'error')
  }
  finally {
    spinShow.value = false
    uni.stopPullDownRefresh()
  }
}

onPullDownRefresh(async () => {
  await indexLoad()
})
</script>

<template>
  <view>
    <swiper indicator-dots="false" autoplay="true" circular="true" interval="5000" duration="1000">
      <swiper-item>
        <image src="/static/carousel/1.png" class="slide-image" />
      </swiper-item>
      <swiper-item>
        <image src="/static/carousel/2.png" class="slide-image" />
      </swiper-item>
      <swiper-item>
        <image src="/static/carousel/3.png" class="slide-image" />
      </swiper-item>
      <swiper-item>
        <image src="/static/carousel/4.png" class="slide-image" />
      </swiper-item>
    </swiper>
  </view>
  <!-- 任务中心 -->
  <view class="panel-wrap">
    <uni-section title="任务中心" type="line" />
    <uni-collapse accordion>
      <uni-collapse-item v-for="task in taskList" :key="task.id" :title="task.title" :name="task.id">
        <uni-list>
          <uni-list-item
            v-for="paper in task.paperItems"
            :key="paper.examPaperId"
            :title="paper.examPaperName"
            :right-text="getStatusText(paper.status)"
            link
            :to="getPaperUrl(paper)"
          />
        </uni-list>
      </uni-collapse-item>
    </uni-collapse>
  </view>

  <!-- 固定试卷 -->
  <view class="panel-wrap">
    <uni-section title="固定试卷" type="line" />
    <uni-list>
      <uni-list-item
        v-for="item in fixedPaper"
        :key="item.id"
        :title="item.name"
        link
        :to="`/pages/exam/do/index?id=${item.id}`"
      />
    </uni-list>
  </view>

  <!-- 时段试卷 -->
  <view class="panel-wrap">
    <uni-section title="时段试卷" type="line" />
    <uni-list>
      <uni-list-item
        v-for="item in timeLimitPaper"
        :key="item.id"
        :title="item.name"
        :note="`${item.startTime} 至 ${item.endTime}`"
        link
        :to="`/pages/exam/do/index?id=${item.id}`"
      />
    </uni-list>
  </view>

  <!-- loading -->
  <!-- <uni-loading v-if="spinShow" fullscreen /> -->
</template>

<style scoped lang="scss">
uni-swiper {
  height: 200px;
  .slide-image {
    width: 100%;
    height: 150px;
  }
}
.gl_panel {
  width: 100%;
  .gl_panel_title {
    height: 24px;
    line-height: 24px;
    font-size: 14px;
  }
}
</style>
