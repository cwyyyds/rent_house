<template>
  <div class="my-page-mian">
    <!-- 上方图片 -->
    <div class="my-page-bgc-img">
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
    </div>
    <!-- 登录界面 -->
    <div class="my-page-user-login">
      <div class="my-page-user-login-main">
        <div class="my-page-user-login-main-circular">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <p>游客</p>
        <van-button
          class="my-page-user-loginfn"
          type="primary"
          size="small"
          to="/login"
          >去登录</van-button
        >
      </div>
    </div>
    <!-- 内容 -->
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="star-o" text="我的收藏" to="/" />
      <van-grid-item icon="wap-home-o" text="我的出租" to="/" />
      <van-grid-item icon="clock-o" text="看房记录" to="/" />
      <van-grid-item icon="coupon-o" text="成为房主" to="/" />
      <van-grid-item icon="user-o" text="个人资料" to="/" />
      <van-grid-item icon="service-o" text="联系我们" to="/" />
    </van-grid>
    <!-- 广告 -->
    <div class="my-page-advertisement">
      <a href="javascript:">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style scoped lang="less">
.my-page-mian {
  position: relative;
  .my-page-bgc-img {
    margin-bottom: 106px;
    img {
      width: 375px;
      height: 192px;
    }
  }
  .my-page-user-login {
    top: 132px;
    left: 28px;
    position: absolute;
    width: 319px;
    height: 170px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    display: flex;
    justify-content: center;
    .my-page-user-login-main {
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
        img {
          // margin-left: 1px;
          width: 60px;
        }
      }
      p {
        font-size: 28px;
      }
      .my-page-user-loginfn {
        border-radius: 5px;
        background-color: #21b97a;
        width: 70px;
      }
    }
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
