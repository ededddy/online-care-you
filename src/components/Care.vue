<script setup lang="ts">
defineProps<{ name: string, target: string }>()
</script>

<template>
  <div id="care">
    <n-h1>
      <n-text type="success">{{ name }}</n-text>
      關心了
      <n-text type="warning">{{target}}</n-text>
    </n-h1>
    <n-button type="primary" size="large" disabled>
        立即截圖分享!
    </n-button>
  </div>
</template>

<style scoped>
#care {
 margin-top: 2em;
}
</style>
