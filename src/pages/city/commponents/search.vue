<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref='search' v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="(item,index) in list" :key="index" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-if="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick(city) {
      // 改变store中的数据
      // this.$store.dispatch('changeCity', city) 或者 this.$store.commit('changeCity', city)
      // 加上 ...mapMutations(['changeCity'])可以直接写成
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  // 获取搜索的内容
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(val => {
            if (
              val.spell.indexOf(this.keyword) > -1 ||
              val.name.indexOf(this.keyword) > -1
            ) {
              result.push(val)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    background: #fff;
    padding-left: 0.2rem;
    color: #666;
  }
}
</style>
