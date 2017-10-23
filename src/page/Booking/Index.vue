<template>
    <div class="raiders">
        <div class="main">
            <div class="container">
                <div class="nav-btns text-center pad-top-40 pad-bottom-40">
                    <router-link class="button" :to="{path: '/booking/entrance', query: {s: 1}}">门票购买</router-link>
                    <router-link class="button" :to="{path: '/booking/amusement', query: {s: 1}}">游乐票预订</router-link>
                    <router-link class="button" :to="{path: '/booking/other', query: {s: 1}}">其它票务</router-link>
                    <router-link class="button" :to="{path: '/booking/site', query: {s: 1}}">场地预订</router-link>
                </div>
                <router-view class="pad-bottom-60"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner {
    height: 800px;
    &-section {
        height: 800px;
        background: #333;
        position: relative;
    }
}
</style>