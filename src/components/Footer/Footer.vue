<template>
  <!-- 脚部 -->
  <div class="footer">
    <ul class="nav">
      <li>
        <a href="javascript:;" class="active">
          <p class="iconfont icon-account p1"></p>
          <p class="p2">家</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <p class="iconfont icon-messagecenter p1"></p>
          <p class="p2">广场</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <p class="iconfont icon-add-select p3"></p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <p class="iconfont icon-atm p1"></p>
          <p class="p2">消息</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <p class="iconfont icon-account p1"></p>
          <p class="p2">我</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang='less' rel='stylesheet/less'>
  .footer {
    position: absolute;
    width: 100%;
    height: 180px;
    background-color: #ffffff;
    bottom: 0;
    left: 0;
    .nav {
      width: 100%;
      overflow: hidden;
      //取消掉行内元素的空白
      font-size: 0;
      //不换行
      white-space: nowrap;
      //ul可以被li撑开宽度
      float: left;
      z-index: 1;
      & > li {
        display: inline-block;
        width: 20%;
        height: 180px;
        line-height: 180px;
        //border: 1px solid  #6a6a6a;
        font-size: 16px;
        text-align: center;
        a {
          width: 100%;
          height: 100%;
          color: #6a6a6a;
          display:inline-block;
          &.active {
            color: #5aadff;
          }
          .p1 {
            height: 60%;
            line-height: 120px;
            font-size: 100px;
          }
          .p2 {
            line-height: 60px;
            height: 40%;
          }
          .p3 {
            line-height: 180px;
            font-size: 180px;
          }
        }
      }
    }
  }
</style>
