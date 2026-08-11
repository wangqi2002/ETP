<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'edit',
  },
})

const description = ref(
  'edit',
)

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
})
</script>

<template>
  <text>pages/exam/edit/index.wxml</text>
</template>
