<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: 1,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1901/17/d1821879b04ca602.jpg_750x200_115ccc5d.jpg',
          title: '水奥雪世界',
          desc: '水奥雪世界水奥雪世界'
        },
        {
          id: 2,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1901/17/d1821879b04ca602.jpg_750x200_115ccc5d.jpg',
          title: '水奥雪世界',
          desc: '水奥雪世界水奥雪世界'
        },
        {
          id: 3,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1901/17/d1821879b04ca602.jpg_750x200_115ccc5d.jpg',
          title: '水奥雪世界',
          desc: '水奥雪世界水奥雪世界'
        }
      ]
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/mixins.styl';

.title {
    margin-top: 0.2rem;
    background: #eee;
    line-height: 0.8rem;
    text-indent: 0.2rem;
}

.item {
    .item-img-wrapper{
        height:0;
        overflow:hidden;
        padding-bottom:26.9%;
    }
    .item-img {
        width: 100%;
    }

    .item-info {
        flex: 1;
        padding: 0.1rem;

        .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
            ellipsis();
        }

        .item-desc {
            line-height: 0.4rem;
            color: #ccc;
            ellipsis();
        }
    }
}
</style>
