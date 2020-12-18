<template>
  <div id='app'>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer'
  import Header from './components/Header/Header'
  export default {
    name: 'app',
    components: {
      Footer,
      Header
    }
  }
</script>

<style lang='less' rel='stylesheet/less'>
  html,body {
    height: 100%;
    overflow: hidden;
  }
  #app {
    font-size: 16px;
    height: 100%;
    overflow: hidden;
    background-color: #EEEEEE;
    position: relative;
  }
</style>
