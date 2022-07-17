<template>
  <div class="homepage-subject">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="homepage-rotation">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      show-action
      placeholder="请输入小区或地址"
      class="homepage-search"
    >
      <template #label>
        <div class="homepage-rotation-text">
          北京 <span class="iconfont icon-daosanjiao"></span>
        </div>
      </template>

      <template #action>
        <div class="homepage-rotation-Icon">
          <span class="iconfont icon-ditu"></span>
        </div>
      </template>
    </van-search>
    <!-- 各种租 -->
    <ul class="homepage-subject-lease">
      <li>
        <a href="javascript:">
          <img src="@/assets/homepage/下载.png" alt="" />整租
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img src="@/assets/homepage/下载 (1).png" alt="" />合租
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img src="@/assets/homepage/下载 (2).png" alt="" />地图找房
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img src="@/assets/homepage/下载 (3).png" alt="" />去出租
        </a>
      </li>
    </ul>
    <!-- 租房广告 -->
    <div class="homepage-subject-ad">
      <div class="homepage-subject-ad-title">
        <h3>租房小组<span>更多</span></h3>
      </div>
      <ul>
        <li>
          <div class="hSA-main-left">
            <img src="111" alt="图片" />
          </div>
          <div class="hSA-main-right">
            <span>
              家住回龙观
              <p>归属的感觉</p>
            </span>
          </div>
        </li>
        <li>
          <div class="hSA-main-left">
            <img src="111" alt="图片" />
          </div>
          <div class="hSA-main-right">
            <span>
              宜居四五环
              <p>大都市生活</p>
            </span>
          </div>
        </li>
        <li>
          <div class="hSA-main-left">
            <img src="111" alt="图片" />
          </div>
          <div class="hSA-main-right">
            <span>
              喧嚣三里屯
              <p>繁华的背后</p>
            </span>
          </div>
        </li>
        <li>
          <div class="hSA-main-left">
            <img src="111" alt="图片" />
          </div>
          <div class="hSA-main-right">
            <span>
              比邻十号线
              <p>比邻十号线</p>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      images: [
        require('@/assets/homepage/1.png'),
        require('@/assets/homepage/2.png'),
        require('@/assets/homepage/3.png')
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
//第一层盒子
.homepage-subject {
  position: relative;
  box-sizing: border-box;
  p {
    margin-top: 0;

    margin-bottom: 0;
  }
  //轮播图盒子宽度
  .homepage-rotation {
    img {
      height: 214px;
    }
  }
  //搜索框定位
  .homepage-search {
    position: absolute;
    top: 26px;
    left: 20px;
    padding: 0;
    width: 354px;
    height: 34px;
    background-color: unset;
    .van-search__content {
      padding: 2px 0 2px 4px;
    }
    .homepage-rotation-text {
      font-size: 28px;

      .icon-daosanjiao {
        font-size: 8px;
        color: #999;
      }
    }
    :deep(.van-field__left-icon) {
      border-left: 1px solid #ccc;
      padding-left: 12px;
    }
    .homepage-rotation-Icon {
      border-radius: 100%;
      border: 2px solid #fff;
      font-size: 26px;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon-ditu {
        font-size: 32px;
        color: #fff;
      }
    }
  }
}
//出租
.homepage-subject-lease {
  display: flex;
  padding: 6px 0 16px;
  height: 96px;
  justify-content: space-around;
  li {
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #333;
      font-size: 28px;
      img {
        width: 60px;
        height: 60px;
        margin-bottom: 14px;
      }
    }
  }
}
// 广告
.homepage-subject-ad {
  padding: 10px;
  background-color: #f6f5f6;
  //标题部分
  .homepage-subject-ad-title {
    display: flex;
    height: 36px;
    h3 {
      width: 100%;
      line-height: 0px;
      font-size: 30px;
      display: flex;
      justify-content: space-between;
      span {
        color: #787d82;
      }
    }
  }
  //主要内容
  ul {
    height: 140px;
    display: flex;
    width: 103%;
    flex-wrap: wrap;
    li {
      width: 47%;
      display: flex;
      margin-right: 10px;
      margin-bottom: 10px;
      background-color: #fff;
      border-radius: 5px;
      .hSA-main-left {
        img {
          width: 50px;
          height: 50px;
          margin: 0 10px;
          font-size: 30px;
        }
      }
      .hSA-main-right {
        padding-top: 10px;
        font-size: 28px;
      }
    }
  }
}
</style>
