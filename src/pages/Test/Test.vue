<template>
  <div class="hello">
    <v-touch v-on:swipeleft="swiperleft"  v-on:swiperight="swiperright" class="wrapper">
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </v-touch>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    methods: {
      swiperleft: function () {  // 左划切换到goods页
        this.$router.push({'path': '/'})
      },
      swiperright: function () { // 右滑切换到detail页
        this.$router.push({'path': '/message'})
      }
    }
  }
</script>
