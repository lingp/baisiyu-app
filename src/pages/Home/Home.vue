<template>
  <div class='home'>
    <Header>
      <router-link to="/search"  slot='home' class="search-text-color">
        <div class="search-div">
          <i class='iconfont icon-sousuo font-no-rem'></i>
          <span class='font-no-rem'>搜索</span>
        </div>
      </router-link>
    </Header>
    Home
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'

  export default {
    name: 'Home',
    components: {Header}
  }
</script>

<style lang='less' rel='stylesheet/less'>
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

    .search-text-color {
      color: #EEEEEE;
    }
  }
</style>
