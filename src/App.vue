<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { Person } from '@vicons/ionicons5'
import { defineComponent } from 'vue'
import { zhCN, dateZhCN  } from 'naive-ui'
import Care from "./components/Care.vue"

export default defineComponent({
  components: {
    Person,
    Care
  },
  setup() {
    return {
      zhCN,
      dateZhCN
    }
  }, 
  data () { 
    return {name: "", target: ""}
  } 
})
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-space vertical>
      <n-h1 prefix="bar"><n-text type="primary">ONLINE 關心你</n-text></n-h1>
      <n-input placeholder="你的名字" v-model:value="name">
        <template #prefix>
          <n-icon>
            <person />
          </n-icon>
        </template>
      </n-input>
      <n-input placeholder="關心對象" v-model:value="target">
        <template #prefix>
          <n-icon>
            <person />
          </n-icon>
        </template>
      </n-input>
    </n-space>
    <Care v-if="name && target" :target="target" :name="name"/>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 30px;
}
</style>
