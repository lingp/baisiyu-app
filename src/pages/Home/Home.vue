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
    <div class="content">
      <div class="nav">
        <cube-scroll-nav-bar :current="current" :labels="labels" :txts="txts" @change="changeHandler" />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'

  export default {
    name: 'Home',
    components: {Header},
    data() {
      return {
        current: '快车',
        labels: [
          'recommend',
          'stars',
          'topic',
          'no_sorrow'
        ],
        txts: [
          '推荐',
          '星圈',
          '话题',
          '解忧'
        ]
      }
    },
    methods: {
      changeHandler(cur) {
        this.current = cur
        // this.$router.replace('/search')
      }
    }
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
  .cube-scroll-nav-bar-item {
    padding-left: 90px!important;
    padding-right: 90px!important;
  }
</style>
