import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, getCity, setCity } from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户的登录状态信息
    user: getToken(),
    // user: null
    cityname: getCity()
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      setToken(user)
    },
    setCity (state, cityname) {
      state.cityname = cityname
      setCity(cityname)
    }
  }
})
