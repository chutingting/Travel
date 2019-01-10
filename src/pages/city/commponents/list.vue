<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}
                            <!-- {{this.$store.state.city}} -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in cities" :key='key' :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  data() {
    return {
      scroll: ''
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
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  // 监听字母的变化 展示不同的区域
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.border-topbottom {
    &:before {
        border-color: #ccc;
    }

    &:after {
        border-color: #ccc;
    }
}

.border-bottom {
    &:before {
        border-color: #ccc;
    }
}

.list {
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

.title {
    line-height: 0.54rem;
    background: #eee;
    font-size: 0.26rem;
    padding-left: 0.2rem;
}

.button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
        float: left;
        width: 33.33%;

        .button {
            margin: 0.1rem;
            text-align: center;
            border: 0.02rem solid #ccc;
            padding: 0.1rem 0;
            border-radius: 0.06rem;
        }
    }
}

.item-list {
    .item {
        padding-left: 0.2rem;
        color: #666;
    }

    line-height: 0.76rem;
}
</style>
