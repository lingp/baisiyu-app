<template>
  <div id='app'>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
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
  .font-no-rem {
    font-size: 16px;
  }
  #app {
    font-size: 50px; // TODO
    height: 100%;
    overflow: hidden;
    background-color: #EEEEEE;
    position: relative;
  }

</style>
