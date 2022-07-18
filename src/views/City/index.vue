<template>
  <div class="city">
    <!-- 导航栏 -->
    <van-nav-bar
      title="城市列表"
      @click-left="onClickLeft"
      class="city-nav-bar"
    >
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <!-- 列表 -->

    <!-- 当前城市 -->
    <div class="city-now">
      <span>当前城市</span>
      <p>{{ cityName }}</p>
    </div>
    <!-- 热门列表 -->

    <div class="city-hot">
      <span class="city-hot-text">热门城市</span>
      <van-cell
        v-for="(item, index) in hotlist"
        :key="index"
        :title="item.label"
      />
    </div>

    <!-- 城市列表 -->
    <van-index-bar
      :index-list="FristPin"
      :z-index="0"
      :sticky-offset-top="46"
      class="van-index-list"
    >
      <div v-for="(item, index, i) in cityjson" :key="i">
        <van-index-anchor :index="index">{{
          index.toUpperCase()
        }}</van-index-anchor>
        <van-cell
          :title="value.label"
          v-for="value in item"
          :key="value.value"
        />
        <!-- 如果没有城市  -->
        <div v-if="item.length === 0">
          <van-cell title="暂无城市" />
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { city, hot } from '@/api/city'
export default {
  name: 'city',
  data () {
    return {
      level: 1,
      cityjson: {},
      cityArr: [],
      FristPin: [],
      hotlist: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async city () {
      const res = await city(this.level)
      for (let i = 0; i <= res.data.body.length - 1; i++) {
        // 遍历数组,拿到城市名称
        const cityName = res.data.body[i].short
        // 取全部城市的首字母
        const fristName = cityName.substring(0, 1)

        res.data.body[i].first = fristName
        this.cityArr.push(res.data.body[i])
      }
      // 根据首字母键值对给原数据按首字母分类
      for (let i = 0; i < this.FristPin.length; i++) {
        // 这里的FirstPin是一个写入了所有字母的数组,见data中

        this.cityjson[this.FristPin[i]] = this.cityArr.filter((value) => {
          return value.first === this.FristPin[i]
        })
      }
      // 异步的原因，没这步得到的是空对象
      this.cityjson = JSON.parse(JSON.stringify(this.cityjson))
    },
    async hot () {
      const res = await hot()
      console.log(res)
      this.hotlist = res.data.body
      console.log(this.hotlist)
    }
  },
  created () {
    // 获取当前城市
    this.cityName = this.$store.state.cityname
    // 小写字母
    for (let i = 0; i < 26; i++) {
      this.FristPin.push(String.fromCharCode(97 + i))
    }
    this.city()
    this.hot()
  }
}
</script>

<style scoped lang="less">
.city {
  .city-now {
    padding-top: 46px;
    padding-left: 20px;

    height: 84px;
    border-bottom: 1px solid #eee;
    span {
      font-size: 14px;
      color: #b5b5b5;
    }
    p {
      font-size: 0.415rem;
      margin-top: 22px;
    }
  }
  .city-hot {
    margin-top: 20px;
    .city-hot-text {
      display: flex;
      padding-left: 18px;
      font-size: 0.37rem;
      color: #b5b5b5;
      transform: translateY(-4px);
    }
  }
  .city-nav-bar {
    position: fixed;
    width: 100%;
    // z-index: 2;
  }
  .van-cell__title {
    font-size: 0.45rem;
    padding-top: 5px;
  }
}
</style>
