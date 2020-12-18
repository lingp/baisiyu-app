<template>
  <!--  头部  -->
  <div class="header">
    <div class="search-div">
      <i class="iconfont icon-sousuo iconfont-size"></i>
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang='less' rel='stylesheet/less'>
  .header {
    width: 100%;
    height: 120px;
    background-color: #3194ff;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 20px 10px 20px;
    box-sizing: border-box;
    .search-div {
      box-sizing: border-box;
      height: 100px;
      line-height: 100px;
      background-color: #5aadff;
      text-align: center;
      border-radius: 180px;
      color: #EEEEEE;
      .iconfont-size {
        font-size: 16px;
      }
    }
  }
</style>
