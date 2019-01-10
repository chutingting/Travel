<template>
  <div>
    <city-header></city-header>
    <city-search  :cities='cities'></city-search>
    <city-list :cities='cities' :hot='hotCities' :letter='letter'></city-list>
    <city-alphabet :cities='cities' @change="handleLetterClick"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './commponents/header'
import CitySearch from './commponents/search'
import CityList from './commponents/list'
import CityAlphabet from './commponents/alphabet'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.handleGetInfoSucc)
    },
    handleGetInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    // 获取点击字母传递给兄弟组件 list.vue
    handleLetterClick(d) {
      this.letter = d
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>
<style scoped lang='stylus'>
</style>
