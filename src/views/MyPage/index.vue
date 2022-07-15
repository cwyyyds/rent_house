<template>
  <div class="my-page-mian">
    <!-- 上方图片 -->
    <div class="my-page-bgc-img" v-if="isShow">
      <img src="@/assets/MyPageImg/bg (1).png" alt="" />
    </div>
    <div class="my-page-bgc-img" v-else>
      <img src="@/assets/MyPageImg/avatar (1).png" alt="" />
    </div>
    <!-- 登录界面 -->
    <div
      :class="{
        'my-page-user-login': true,
        'my-page-user-login-bottom': !isShow
      }"
    >
      <div class="my-page-user-login-main">
        <div class="my-page-user-login-main-circular">
          <img src="@/assets/MyPageImg/avatar.png" alt="" />
        </div>
        <div
          :class="{
            'my-page-user-login-main-username': isShow,
            'my-page-user-login-main-username1': !isShow
          }"
        >
          {{ unUserName }}
        </div>
        <!-- 登录按钮 -->
        <van-button
          class="my-page-user-loginfn"
          type="primary"
          size="small"
          to="/login"
          v-if="isShow"
          >去登录</van-button
        >
        <!-- 退出按钮 -->
        <div v-else>
          <van-button
            class="my-page-user-loginfn1"
            type="primary"
            size="mini"
            @click="clearFn"
            round
            >退出</van-button
          >
          <p class="my-page-user-loginfn-p">编辑个人资料</p>
        </div>
        <!-- <div>编辑个人资料</div> -->
      </div>
    </div>
    <!-- 各种功能 -->
    <van-grid
      :class="{ 'my-page-content': isShow }"
      :column-num="3"
      :border="false"
    >
      <van-grid-item icon="star-o" text="我的收藏" to="/favorite" />
      <van-grid-item icon="wap-home-o" text="我的出租" to="/" />
      <van-grid-item icon="clock-o" text="看房记录" to="/" />
      <van-grid-item icon="coupon-o" text="成为房主" to="/" />
      <van-grid-item icon="user-o" text="个人资料" to="/" />
      <van-grid-item icon="service-o" text="联系我们" to="/" />
    </van-grid>
    <!-- 广告 -->
    <div class="my-page-advertisement">
      <a href="javascript:">
        <img src="@/assets/MyPageImg/join.png" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
// 接收用名
export default {
  data () {
    return {
      isShow: true,
      unUserName: '游客',
      newcode: ''
    }
  },
  methods: {
    clearFn () {
      this.$dialog
        .confirm({
          title: '标题',
          message: '弹窗内容'
        })
        .then(() => {
          // on confirm
          localStorage.clear()
          this.unUserName = '游客'
          this.isShow = true
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  created () {
    if (localStorage.getItem('userlist')) {
      this.unUserName = JSON.parse(localStorage.getItem('userlist')).username
    }
    if (this.$store.state.user) {
      this.newcode = this.$store.state.user
      this.isShow = false
    }
  }
}
</script>

<style scoped lang="less">
.my-page-mian {
  position: relative;
  .my-page-bgc-img {
    img {
      width: 375px;
    }
  }
  //名字样式

  .my-page-user-login-bottom {
    transform: translateY(36px);
  }
  .my-page-user-login {
    z-index: 1;
    top: 132px;
    left: 28px;
    position: absolute;
    width: 319px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    display: flex;
    justify-content: center;
    .my-page-user-login-main {
      font-size: 14px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateY(-40px);

      .my-page-user-login-main-circular {
        border: 6px solid #fff;
        display: flex;
        text-align: center;
        justify-content: center;
        box-shadow: 0 0 10px 3px #ddd;
        width: 60px;
        border-radius: 100%;
        margin-bottom: 8px;
        img {
          // margin-left: 1px;
          width: 60px;
        }
      }
      .my-page-user-login-main-username1 {
        margin: 12px 0 12px;
      }
      .my-page-user-login-main-username {
        margin: 12px 0 20px;
      }
      .my-page-user-loginfn {
        border-radius: 5px;
        background-color: #21b97a;
        width: 70px;
      }
      .my-page-user-loginfn1 {
        border-radius: 30px;
        background-color: #21b97a;
        width: 56px;
        height: 20px;
      }
      .my-page-user-loginfn-p {
        font-size: 12px;
        color: #999;
        margin: 26px 0 28px;
      }
    }
  }
  .my-page-content {
    margin-top: 106px;
  }
  .my-page-advertisement {
    margin: 20px 15px 0;
    a {
      display: block;
      img {
        width: 345px;
        height: 88px;
      }
    }
  }
}
</style>
