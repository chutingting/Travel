<template>
    <div class="list">
        <div class="item" v-for="item in letters" :key="item" :ref='item' @click="handleLetterClick(item)" @touchstart.prevent='handleTouchStart' @touchmove='handleTouchMove' @touchend='handleTouchEnd'>{{item}}</div>
    </div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated() {
    // A字母距离顶部高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(key) {
      this.$emit('change', key)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    // 滑动字母时显示对应的区域
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // setTimeout 函数节流 可以提升网页性能
        this.timer = setTimeout(() => {
          // 手指距离顶部高度 e.touches[0].clientY
          const touchY = e.touches[0].clientY - 79
          // 手指滑动字母的下标 20 字母的高度
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>
<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;

    .item {
        text-align: center;
        line-height: 0.4rem;
        color: $bgColor;
    }
}
</style>
