<template>
  <div>
    <router-view></router-view>
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/home/homepage"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/home/information"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item icon="contact" to="/home/mypage">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
