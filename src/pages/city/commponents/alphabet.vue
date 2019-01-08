<template>
    <div class="list">
        <div class="item" v-for="(item,key) in cities" :key="key">{{key}}</div>
    </div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
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
