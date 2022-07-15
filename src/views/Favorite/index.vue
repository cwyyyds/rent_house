<template>
  <div>
    收藏列表
    <button @click="clickFn">获取信息</button>
  </div>
</template>

<script>
import { favorite } from '@/api/favorite'
export default {
  data () {
    return {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MzE2LCJpYXQiOjE2NTc3OTAyNTAsImV4cCI6MTY1NzgwNDY1MH0.gE60zIIHdkm5g2SQDwMDBWIjmNcQHQ7ZUbG7CHGbKKA'
    }
  },
  methods: {
    async clickFn () {
      console.log(1)
      const res = await favorite(this.token)
      console.log(res)
    }
  }
}
</script>

<style></style>
