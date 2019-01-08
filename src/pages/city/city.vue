<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities='cities' :hot='hotCities'></city-list>
        <city-alphabet :cities='cities'></city-alphabet>
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
      hotCities: []
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
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>
<style scoped lang='stylus'>
</style>
