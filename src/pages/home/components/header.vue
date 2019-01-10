<template>
    <div class="header">
        <div class="header-left">
            <div class="icon back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="icon">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">{{this.city}}
                <!-- {{this.$store.state.city}} -->
                <span class="icon icon-jiantou"></span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  // 把vuex中的数据city映射到计算属性里
  computed: {
    ...mapState(['city']),
    // 获取getter 页面中可以直接使用 this.doubleCity
    ...mapGetters(['doubleCity'])
  }
}
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl';

.header {
    height: $headerHeight;
    line-height: $headerHeight;
    display: flex;
    background: $bgColor;
    color: #fff;

    .header-left {
        width: 0.64rem;
        float: left;

        .back-icon {
            font-size: 0.4rem;
            text-align: center;
        }
    }

    .header-input {
        flex: 1;
        background: #fff;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        padding-left: 0.2rem;
        height: 0.64rem;
        line-height: 0.64rem;
        border-radius: 0.1rem;
        color: #ccc;
    }

    .header-right {
        min-width: 1.04rem;
        padding: 0 0.1rem;
        float: right;
        text-align: center;
        color: #fff;
    }
}
</style>
