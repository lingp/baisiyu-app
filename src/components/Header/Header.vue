<template>
  <!--  头部  -->
  <div class="header">
    <slot name="home"></slot>
    <slot name="message"></slot>
    <slot name="profile"></slot>
    <slot name="publish"></slot>
    <slot name="search"></slot>
    <slot name="square"></slot>
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
  }
</style>
