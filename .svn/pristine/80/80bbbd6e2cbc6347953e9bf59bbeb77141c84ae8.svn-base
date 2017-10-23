<template>
    <div class="scroll-top" @click="top">
        <img src="../assets/top.svg" alt="到顶部" class="img-fluid">
    </div>
</template>

<script>
export default {
    name: 'scroll-top',
    mounted() {
        var vm = this
        window.onscroll = function() {
            var height = document.documentElement.clientHeight || document.body.clientHeight
            if (vm.scrollTop >= height) {
                vm.$el.style.display = "block"
            } else {
                vm.$el.style.display = "none"
            }
            if (!vm.flag) {
                clearInterval(vm.timer)
            }
            vm.flag = false
            vm.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        }
    },
    props: {
        spend: {
            type: Number,
            default: 30
        }
    },
    data() {
        return {
            flag: true,
            timer: null,
            scrollTop: null,
        }
    },
    methods: {
        top() {
            clearInterval(this.timer)
            var vm = this
            this.timer = setInterval(function() {
                var now = vm.scrollTop
                var speed = (0 - now) / 3
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
                if (vm.scrollTop == 0) {
                    clearInterval(vm.timer)
                }
                vm.flag = true
                document.documentElement.scrollTop = vm.scrollTop + speed
                document.body.scrollTop = vm.scrollTop + speed
            }, this.spend)
        }
    }
}
</script>

<style>
.scroll-top {
    position: fixed;
    top: 86%;
    right: 4%;
    width: 64px;
    height: 64px;
    cursor: pointer;
    display: none;
    background: #fff;
    border-radius: 4px;
    /* color: #fff; */
    padding:10px;
    border: 1px solid #ccc;
    /* box-shadow: 0 0 1 #999 */
}
</style>