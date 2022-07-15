<template>
  <div>
    <van-swipe :autoplay="3000" class="homepage-rotation">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
    </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      images: [
        'http://liufusong.top:8080/img/swiper/1.png',
        'http://liufusong.top:8080/img/swiper/2.png',
        'http://liufusong.top:8080/img/swiper/3.png'
      ]
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style scoped lang="less">
.homepage-rotation {
  img {
    height: 214px;
  }
}
</style>
