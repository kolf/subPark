<template>
    <div class="raiders">
        <div class="banner-section"></div>
        <div class="main">
            <div class="container">
                <div class="nav-btns text-center pad-top-40 pad-bottom-40">
                    <router-link class="button" :to="{path: '/raiders/openTime', query: {s: 1}}">开闭园时间</router-link>
                    <router-link class="button" :to="{path: '/raiders/recommend', query: {s: 1}}">线路推荐</router-link>
                    <router-link class="button" :to="{path: '/raiders/attractions', query: {s: 1}}">景点分布</router-link>
                    <router-link class="button" :to="{path: '/raiders/traffic', query: {s: 1}}">园内交通</router-link>
                    <router-link class="button" :to="{path: '/raiders/stalls', query: {s: 1}}">摊位分布</router-link>
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

</style>