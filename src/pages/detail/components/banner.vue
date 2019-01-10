<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_600x330_682f736a.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">水奥雪世界</div>
                <div class="banner-number">
                    <span class="icon banner-icon">&#xe692;</span> 99</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data() {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_r_800x800_23f5a829.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>
<style scoped lang='stylus'>
.banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;

    .banner-img {
        width: 100%;
    }

    .banner-info {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 0.6rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

        .banner-title {
            flex: 1;
            font-size: 0.32rem;
            padding: 0 0.2rem;
        }

        .banner-number {
            margin-top: 0.14rem;
            padding: 0 0.4rem;
            height: 0.32rem;
            line-height: 0.32rem;
            border-radius: 0.2rem;
            background: rgba(0, 0, 0, 0.8);
            font-size: 0.24rem;

            .banner-icon {
                font-size: 0.24rem;
            }
        }
    }
}
</style>
