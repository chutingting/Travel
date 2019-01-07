<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data() {
    return {}
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
    overflow: hidden;
    height: 1.9rem;
    display: flex;

    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
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

        .item-button {
            margin-top: 0.16rem;
            background: #ff9300;
            line-height: 0.44rem;
            border-radius: 0.06rem;
            color: #fff;
            padding: 0 0.2rem;
        }
    }
}
</style>
