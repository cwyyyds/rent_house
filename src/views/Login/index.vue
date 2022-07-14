<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="账号登录" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <van-form @submit="login">
      <!-- 账号密码 -->
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <!-- 登录按钮 -->
      <div style="margin: 16px">
        <van-button block class="code-fn" type="info" native-type="submit"
          >登 录</van-button
        >
      </div>
      <div class="to-register">
        <a href="javascript:"> 还没有账号，去注册~ </a>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  data () {
    return {
      username: '',
      password: '',
      UserInformationList: [],
      timer: null
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async login () {
      const res = await login(this.username, this.password)
      if (res.data.status === 200) {
        // 节流
        if (!this.timer) {
          this.UserInformationList = res.data
          this.$toast.success('登录成功')
          this.timer = setTimeout(() => {
            console.log(res)
            this.$router.push({
              name: 'mypage'
            })
          }, 2000)
        }

        return
      }

      this.$toast.fail('登录失败')
    }
  }
}
</script>

<style scoped lang="less">
.van-form {
  .van-cell {
    height: 76px;
    line-height: 76px;
    font-size: 18px;
  }
  .code-fn {
    font-size: 18px;
    background-color: #21b97a;
    margin-top: 24px;
    height: 50px;
  }
  .to-register {
    text-align: center;
    margin-top: 30px;
    a {
      color: #666;
      font-size: 14px;
    }
  }
}
</style>
