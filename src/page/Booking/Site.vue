<template>
    <div>
        <a href="" class="project" v-for="(item, index) in list">
            <div class="row">
                <div class="col-4 project-title pad-left-10">
                    <div class="text-table">
                        <div class="text-table-cell">
                            场地预订
                            <small class="none block-l pad-top-20">场地预订场地预订场地预订场地预订场地预订场地预订场地预订场地预订场地预订场地预订场地预订场地预订场地预订场地预订场地预订</small>
                        </div>
                    </div>
                </div>
                <div class="col-8 push-4">
                    <span class="img-transition block"><img src="../../assets/n1.png" alt="" class="project-thumb"></span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [1, 2, 3, 4, 5]
        }
    }
}
</script>

<style scoped>

</style>