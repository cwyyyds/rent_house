<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="  收藏列表" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <!-- 收藏列表 -->
    <div
      v-for="item in productList"
      :key="item.houseCode"
      class="favorite-list"
    >
      <div class="favorite-list-img">
        <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" />
      </div>
      <div class="favorite-list-text">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <div>
          <span v-for="(value, index) in item.tags" :key="index">{{
            value
          }}</span>
        </div>
        <i>{{ item.price }}<span> 元/月</span> </i>
      </div>
    </div>
  </div>
</template>

<script>
import { favorite } from '@/api/favorite'
export default {
  data () {
    return {
      token: '',
      productList: {}
    }
  },
  methods: {
    async favorite () {
      const res = await favorite(this.$store.state.user)
      this.productList = res.data.body
      console.log(res.data.body)
    },
    onClickLeft () {
      this.$router.back()
    }
  },
  created () {
    this.favorite()
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
//每个商品盒子大小
.favorite-list {
  display: flex;
  height: 118px;
  border-bottom: 1px solid;
  .favorite-list-img {
    width: 106px;
    margin-top: 16px;
    margin-right: 10px;
    height: 80px;
    img {
      width: 106px;
      height: 80px;
    }
  }
  .favorite-list-text {
    h3 {
      font-size: 0.4rem;
      margin-top: 20px;
      font-weight: 600;
    }
    p {
      font-size: 0.18667rem;
      color: #999;
      margin-top: 4px;
      height: 12px;
    }
    div {
      height: 22px;
      span {
        background-color: #e1f5f8;
        font-size: 0.335rem;
        color: #85dbf8;
        padding: 4px 4px 2px 4px;
        border-radius: 4px;
      }
    }
    i {
      color: #fa5741;
      font-size: 0.45rem;
      font-style: normal;
      font-weight: 700;
      span {
        font-size: 0.3rem;
        font-weight: 400;
      }
    }
  }
}
</style>
