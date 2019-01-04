<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in imgList" :key="item.id"><img class="swiper-img" :src="item.url" alt=""></swiper-slide>
            <div class="swiper-pagination " slot="pagination "></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      imgList: [
        {
          id: '1',
          url:
            'http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg'
        },
        {
          id: '2',
          url:
            'http://img1.qunarzz.com/piao/fusion/1812/48/5713e2a2ba72f902.jpg_750x200_2b382dac.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background: #fff;
}

.wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;

    .swiper-img {
        width: 100%;
    }
}
</style>
