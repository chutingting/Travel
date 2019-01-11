<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo() {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc)
    },
    handleGetDataSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        this.sightName = res.data.sightName
        this.bannerImg = res.data.bannerImg
        this.gallaryImgs = res.data.gallaryImgs
        this.list = res.data.categoryList
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>
<style scoped lang='stylus'>
.content {
  height: 50rem;
}
</style>
