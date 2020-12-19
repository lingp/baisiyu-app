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
            <div class="item-head clearfix">
              <div class="item-left">
                <span class="portrait">
                   <img
                     src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=246513285,2824505510&fm=26&gp=0.jpg"/>
                </span>
                <span class="nick">
                  一切皆在不言中
                </span>
              </div>
              <div class="item-right">
                <i class="cubeic-close"></i>
              </div>
            </div>
            <div class="item-content">
                  一等人是官倒，出了事情有人保；二等人是官倒，游山玩水享清福；三等人搞承包，吃喝嫖赌全报销；
              四等人干租赁，坑蒙拐骗带小姘；五等人是老板，买空卖空成老板；六等人是明星，挣的票子数不清；
              七等人是路霸，缺钱花了把车卡；八等人是律师，发财全靠打官司；九等人大盖帽，吃了原告吃被告；
              十等人是演员，扭扭屁股也赚钱；十一等人是工商，罚了款子兜里装；十二等人是画家，画完螃蟹画大虾；
              十三等人手术刀，割了肚子要红包；十四等人方向盘，上班下班都赚钱；十五等人搞个体，赚多赚少归自己；
              十六等人干宣传，隔三差五能解馋；十七等人是教员，山珍海味认不全；十八等人老百姓，学习雷锋干革命。
            </div>
            <div class="item-footer"></div>
          </li>
          <li class="item">
            <div class="item-head clearfix">
              <div class="item-left">
                <span class="portrait">
                   <img
                     src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=246513285,2824505510&fm=26&gp=0.jpg"/>
                </span>
                <span class="nick">
                  一切皆在不言中
                </span>
              </div>
              <div class="item-right">
                <i class="cubeic-close"></i>
              </div>
            </div>
            <div class="item-content">
              一等人是官倒，出了事情有人保；二等人是官倒，游山玩水享清福；三等人搞承包，吃喝嫖赌全报销；
              四等人干租赁，坑蒙拐骗带小姘；五等人是老板，买空卖空成老板；六等人是明星，挣的票子数不清；
              七等人是路霸，缺钱花了把车卡；八等人是律师，发财全靠打官司；九等人大盖帽，吃了原告吃被告；
              十等人是演员，扭扭屁股也赚钱；十一等人是工商，罚了款子兜里装；十二等人是画家，画完螃蟹画大虾；
              十三等人手术刀，割了肚子要红包；十四等人方向盘，上班下班都赚钱；十五等人搞个体，赚多赚少归自己；
              十六等人干宣传，隔三差五能解馋；十七等人是教员，山珍海味认不全；十八等人老百姓，学习雷锋干革命。
            </div>
            <div class="item-footer"></div>
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
    },
    created() {
    }
  }
</script>

<style lang='less' rel='stylesheet/less'>
  @import "../../common/less/1-px.less";
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
          margin: 10px 10px;
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
          margin: 20px 10px;
          padding: 10px 0 20px 0;
          word-break:break-all;
          letter-spacing: 1px;
          line-height: 150%;
        }
        .item-footer {
          width: 100%;
          height: 10px;
          background-color: #EDEDF2;
          .1-px(bottom, #cccccc)
        }
      }
    }
  }
</style>
