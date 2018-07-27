<template>
  <el-container id="app">
    <!-- <div>
      <el-button @click="startHacking">Start</el-button>
    </div> -->
    <el-header style="text-align: right; font-size: 12px">
      <header-tab></header-tab>
    </el-header>
    <el-container>
      <sidebar></sidebar>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import HeaderTab from './components/header.vue'
import Sidebar from './components/sidebar.vue'
export default {
  methods: {
    startHacking() {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000
      })
    }
  },
  components: {
    HeaderTab,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
