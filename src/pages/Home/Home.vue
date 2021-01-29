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
        <cube-scroll-nav-bar :current="current" :labels="labels" :txts="txts" :items="items" @change="changeHandler"/>
      </div>
      <div class="list">
        <v-touch v-on:swipeleft="swiperleft"  v-on:swiperight="swiperright" class="wrapper">
          <cube-scroll
            ref="scroll"
            :data="articles"
            class="home-list-scroll"
            :options="options"
            @pulling-down="onPullingDown"
            @pulling-up="onPullingUp"
          >
            <ul>
              <li class="item" v-for="item in articles">
                <div class="item-head clearfix">
                  <div class="item-left">
                  <span class="portrait">
                     <img :src="item.author_portrait_img"/>
                  </span>
                    <span class="nick">
                    {{item.author_name}}
                  </span>
                  </div>
                  <div class="item-right">
                    <i class="cubeic-close"></i>
                  </div>
                </div>
                <div class="item-content">
                  <p v-html='item.content'></p>
                  <div class="item-content-footer clearfix">
                    <div class="item-content-footer-area">
                      <i class="iconfont icon-like"></i>
                      <span class="area-text">{{item.likes}}</span>
                    </div>
                    <div class="item-content-footer-area">
                      <i class="iconfont icon-comment"></i>
                      <span class="area-text">{{item.comments}}</span>
                    </div>
                    <div class="item-content-footer-area">
                      <i class="iconfont icon-view"></i>
                      <span class="area-text">{{item.views}}</span>
                    </div>
                  </div>
                </div>
                <div class="item-footer"></div>
              </li>
<!--              <li class="item">-->
<!--                <div class="item-head clearfix">-->
<!--                  <div class="item-left">-->
<!--                  <span class="portrait">-->
<!--                     <img-->
<!--                       src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=246513285,2824505510&fm=26&gp=0.jpg"/>-->
<!--                  </span>-->
<!--                    <span class="nick">-->
<!--                    一切皆在不言中-->
<!--                  </span>-->
<!--                  </div>-->
<!--                  <div class="item-right">-->
<!--                    <i class="cubeic-close"></i>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="item-content">-->
<!--                  3 一等人是官倒，出了事情有人保；二等人是官倒，游山玩水享清福；三等人搞承包，吃喝嫖赌全报销；-->
<!--                  四等人干租赁，坑蒙拐骗带小姘；五等人是老板，买空卖空成老板；六等人是明星，挣的票子数不清；-->
<!--                  七等人是路霸，缺钱花了把车卡；八等人是律师，发财全靠打官司；九等人大盖帽，吃了原告吃被告；-->
<!--                  十等人是演员，扭扭屁股也赚钱；十一等人是工商，罚了款子兜里装；十二等人是画家，画完螃蟹画大虾；-->
<!--                  十三等人手术刀，割了肚子要红包；十四等人方向盘，上班下班都赚钱；十五等人搞个体，赚多赚少归自己；-->
<!--                  十六等人干宣传，隔三差五能解馋；十七等人是教员，山珍海味认不全；十八等人老百姓，学习雷锋干革命。-->
<!--                </div>-->
<!--                <div class="item-footer"></div>-->
<!--              </li>-->



            </ul>
          </cube-scroll>
        </v-touch>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    components: {Header},
    data() {
      return {
        current: 'recommend',
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
        ],
        items: [1, 2, 3, 4],
        pullDownRefresh: true,
        pullDownRefreshThreshold: 60,
        pullDownRefreshStop: 40,
        pullDownRefreshTxt: '加载最新',
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载更多',
        pullUpLoadNoMoreTxt: '没有更多数据鸟',
        customPullDown: false
      }
    },
    methods: {
      changeHandler(cur) {
        this.current = cur
        this.loadArticle()
      },
      swiperleft: function () {  // 左划
        // alert('向左移动')
        let length = this.labels.length
        let index = 0

        for (index; index < length; index++) {
          if (this.labels[index] === this.current) {
            break
          }
        }
        if (index >= length - 1) {
          index = length - 1
        } else {
          index += 1
        }

        if (this.current !== this.labels[index]) {
          this.current = this.labels[index]
          // this.$router.push({'path': '/'})
          this.loadArticle()
        }
      },
      swiperright: function () { // 右滑
        // alert('向右移动')
        let length = this.labels.length
        let index = 0

        for (index; index < length; index++) {
          if (this.labels[index] === this.current) {
            break
          }
        }
        if (index <= 0) {
          index = 0
        } else {
          index -= 1
        }
        if (this.current !== this.labels[index]) {
          this.current = this.labels[index]
          this.loadArticle()
        }
        // this.$router.push({'path': '/message'})
      },
      async onPullingDown () {
        // 加载文章列表
        let channelId = ''
        switch (this.current) {
          case 'recommend':
            channelId = 1
            break
          case 'stars':
            channelId = 2
            break
          case 'topic':
            channelId = 3
            break
          case 'no_sorrow':
            channelId = 4
            break
        }
        let orginLen = this.articles.length
        console.log('loadArticleNew', this.articles)
        let originArticles = {...this.articles}
        console.log('originArticles', originArticles)

        await this.$store.dispatch('loadArticleNew', {channelId, originArticles})

        let refreshLen = this.articles.length
        if (orginLen === refreshLen) {
          this.$refs.scroll.forceUpdate()
        }
      },
      async onPullingUp() {
        // 加载文章列表
        let channelId = ''
        switch (this.current) {
          case 'recommend':
            channelId = 1
            break
          case 'stars':
            channelId = 2
            break
          case 'topic':
            channelId = 3
            break
          case 'no_sorrow':
            channelId = 4
            break
        }
        let orginLen = this.articles.length
        let originArticles = {...this.articles}
        await this.$store.dispatch('loadArticleMore', {channelId, originArticles})

        let refreshLen = this.articles.length

        if (orginLen === refreshLen) {
          this.$refs.scroll.forceUpdate()
        }
      },
      loadArticle: function () { // 加载文章
        // 加载文章列表
        let channelId = ''
        switch (this.current) {
          case 'recommend':
            channelId = 1
            break
          case 'stars':
            channelId = 2
            break
          case 'topic':
            channelId = 3
            break
          case 'no_sorrow':
            channelId = 4
            break
        }
        this.$store.dispatch('loadArticle', channelId)
      }
    },
    created() {
    },
    mounted() {
      const homeListScroll = document.querySelector('.home-list-scroll')
      const bodyheight = document.documentElement.clientHeight
      // 剪掉底部导航的高度
      homeListScroll.style.height = bodyheight - 160 + 'px'

      this.loadArticle()
    },
    computed: {
      ...mapState(['articles']),
      options() {
        return {
          pullDownRefresh: this.pullDownRefreshObj,
          pullUpLoad: this.pullUpLoadObj,
          scrollbar: true
        }
      },
      pullDownRefreshObj: function() {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          // Do not need to set stop value, but you can if you want
          // stop: parseInt(this.pullDownRefreshStop),
          txt: this.pullDownRefreshTxt
        } : false
      },
      pullUpLoadObj: function() {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {
            more: this.pullUpLoadMoreTxt,
            noMore: this.pullUpLoadNoMoreTxt
          }
        } : false
      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less'>
  @import "../../common/less/1-px.less";

  .cube-scroll-wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

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

  .content .nav {
    .1-px(bottom, #cccccc);
    padding-bottom: 1px;
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
        background-color: #FFFFFF;
        width: 100%;
        /*min-height: 10%;*/
        /*max-height: 50%;*/
        overflow: hidden;
        display: inline-block;
        position: relative;

        .item-head {
          margin: 10px 40px;
          position: relative;

          span {
            vertical-align: top; // 将span元素与行中最高的元素平齐。
          }

          .item-left {
            float: left;
            /*padding: 20px 20px;*/

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
              margin-left: 30px;
              font-size: 40px;
              width: 400px;
              color: black;
              line-height: 100px;
              font-weight: 600;
            }
          }

          .item-right {
            float: right;
            padding: 20px 20px;
          }
        }

        .item-content {
          padding: 10px 20px 20px 10px;
          word-break: break-all;
          letter-spacing: 1px;
          line-height: 150%;
          /*width: 100%;*/
          width: calc(100% - 40px);
          margin-left: 40px;
          /*white-space:normal;*/
          box-sizing: border-box;
          p {
            text-align: justify; /*实现两端对齐*/
            /*text-justify: newspaper; !*通过增加或减少字或字母之间的空格对齐文本*!*/
            word-break: break-all; /*允许在单词内换行*/
          }

          .item-content-footer {
            margin-top: 20px;
            box-sizing: border-box;
            width: 100%;
            position: relative;
            .item-content-footer-area {
              float: left;
              width: 33%;
              text-align: center;
              .area-text {
                /*color: #E6E6E6;*/
                font-size: 40px;
              }
            }
          }
        }

        .item-footer {
          width: 100%;
          height: 10px;
          background-color: #EDEDF2;
          .1-px(bottom, #cccccc);
        }
      }
    }
  }
</style>
