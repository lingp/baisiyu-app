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
    },
    created() {
    }
  }
</script>

<style lang='less' rel='stylesheet/less'>
  html, body {
    height: 100%;
    overflow: hidden;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
  }

  .font-no-rem {
    font-size: 16px;
  }

  #app {
    font-size: 50px; // TODO
    height: 100%;
    overflow: hidden;
    background-color: #F5F7F9;
    position: relative;

    .content {
      position: absolute;
      top: 125px;
      bottom: 0;
      left: 0;
      right: 0;
      /*background-color: deeppink;*/
      height: 100%;
    }
  }

  .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }

</style>
