<template>
    <div class="list">
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CityList'
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

.title {
    line-height: 0.44rem;
    background: #eee;
    font-size: 0.26rem;
    padding-left: 0.2rem;
}

.button-list {
    padding: 0.1rem;
    overflow:hidden
    .button-wrapper {
        float: left;
        width: 33.33%;

        .button {
            margin: 0.1rem;
            text-align: center;
            border:.02rem solid #ccc;
            padding:.1rem 0
        }
    }
}
</style>
