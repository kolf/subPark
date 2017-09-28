<template>
    <div class="raiders">
        <div class="main">
            <div class="container">
                <router-view class="pad-top-60 pad-bottom-60"></router-view>
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
    &-section {
        height: 800px;
        background: #333 url(../../assets/banner.jpg) no-repeat;
        background-size: cover;
        position: relative;
    }
}
</style>