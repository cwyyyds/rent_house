<template>
  <div>
    <!-- 上方图片 -->
    <div class="my-page-bgc-img">
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
    </div>
    <!-- 内容 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <!-- 广告 -->
    <div class="my-page-advertisement">
      <a href="javascript:">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
      </a>
    </div>
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o">标签</van-tabbar-item>
      <van-tabbar-item icon="contact">标签</van-tabbar-item>
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

<style scoped lang="less">
.my-page-bgc-img {
  margin-bottom: 106px;
  img {
    width: 355px;
    height: 196px;
  }
}
.my-page-advertisement {
  margin: 20px 10px 0;
  a {
    display: block;
    img {
      width: 355px;
      height: 84px;
    }
  }
}
</style>
