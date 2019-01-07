<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id">
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
    background: #eee;
    line-height: 0.8rem;
    text-indent: 0.2rem;
}

.item {
    .item-img-wrapper {
        height: 0;
        overflow: hidden;
        padding-bottom: 37.09%;
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
