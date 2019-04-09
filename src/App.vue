<template>
  <div id="app">
    <m-Header></m-Header>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  components: {
    MHeader,
    Tab
  },
  computed: {
  }
}
</script>

<style lang="less">
#app {
}
</style>
