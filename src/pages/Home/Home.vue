<template>
  <div class='home'>
    <Header>
      <router-link to="/search" slot='home' class="search-text-color">
        <div class="search-div">
          <i class='iconfont icon-sousuo font-no-rem'></i>
          <span class='font-no-rem'>搜索</span>
        </div>
      </router-link>
    </Header>
    <div class="content">
      <div class="nav">
        <cube-scroll-nav-bar :current="current" :labels="labels" :txts="txts" @change="changeHandler"/>
      </div>
      <div class="list">
        <ul>
          <li class="item">
            <div class="item-head">
              <div class="item-left">
                <span class="portrait">
                   <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=246513285,2824505510&fm=26&gp=0.jpg" />
                </span>
                <span class="nick">
                  昵称
                </span>
              </div>
              <div class="item-right">
                <i class="cubeic-close"></i>
              </div>
            </div>
            <div class="item-content">
              content1
            </div>
          </li>
        </ul>
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
    padding-left: 90px !important;
    padding-right: 90px !important;
  }

  .list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    ul {
      height: 100%;
      .item {
        background-color: #EEEEEE;
        width: 100%;
        height: 50%;
        display: inline-block;
        .item-head {
          position: relative;
          span {
            vertical-align:top; // 将span元素与行中最高的元素平齐。
          }
          .item-left {
            float: left;
            .portrait {
              height: 100px;
              line-height: 100px;
              display: inline-block;
              img {
                height: 100px;
                width: 100px;
                line-height: 100px;
              }
            }
            .nick {
              height: 100px;
              display: inline-block;
              line-height: 100px;
            }
          }
          .item-right {
            float: right;
          }
        }
      }
    }
  }
</style>
