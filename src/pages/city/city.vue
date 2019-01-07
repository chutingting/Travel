<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>
</template>
<script>
import CityHeader from './commponents/header'
import CitySearch from './commponents/search'
import CityList from './commponents/list'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>
<style scoped lang='stylus'>
</style>
