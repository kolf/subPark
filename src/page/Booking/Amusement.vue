<template>
    <div>
        <h3 class="list-heading pad-bottom-10">
            单项预订
        </h3>
        <ul class="imgtext-v-list imgtext-list list-unstyled row">
            <li class="col-1-4-m col-1-2" v-for="(item, index) in vList">
                <div class="relative">
                    <a href="" class="img-transition block"><img src="../../assets/p1.png" class="img-fluid" alt=""></a>
                    <div class="pad-top-5">
                        <h4>
                            <a href="">飞天秋千</a>
                        </h4>
                        <p class="no-margin">20元 时长5分钟</p>
                    </div>
                    <span class="label">已选</span>
                </div>
            </li>
          
        </ul>

        <h3 class="list-heading pad-bottom-10 pad-top-30">
            套票预订
        </h3>

        <ul class="imgtext-h-list imgtext-list list-unstyled">
            <li class="row" v-for="(item, index) in vList">
                <div class="col-5 col-1-4-m"><a href="" class="img-transition block"><img src="../../assets/p1.png" class="img-fluid" alt=""></a></div>
                <div class="col-7 col-3-4-m">
                    <h4>
                        <a href="">飞天秋千</a>
                    </h4>
                    <div>
                        <p>20元 时长5分钟</p>
                        <p></p>
                    </div>
                </div>
                <span class="label">已选</span>
            </li>
        </ul>
        <div class="pad-top-40 pad-bottom-40 text-center">
            <button class="button button-lg">确认购买</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            vList: [1,2,3,4,5,6,7,8,9,10,11,12]
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    &-v {}
}

.imgtext {
    &-list {
        // margin-left: -5px;
        // margin-right: -5px;
        &>li {
            // margin: 0 -5px 30px -5px;
            // border: 1px solid #ccc;
            // padding: 5px;
        }
    }
    &-h-list {
        &>li {
            padding: 10px 0;
            border: 1px solid #ccc;
            margin-bottom: 15px;
            // .col-3 {
            //     padding-left: 0;
            // }
        }
    }
    &-v-list {
        margin-left: -5px;
        margin-right: -5px;
        &>li {
            padding: 5px;
            margin-bottom: 15px;
            &>div {
                border: 1px solid #ccc;
                padding: 5px;
            }
        }
    }
}

.item {
    &-1 {
        border: 1px solid #ccc;
        padding: 5px;
        margin-bottom: 30px;
        position: relative;
        p {
            margin-bottom: 0
        }
    }
}

.label {
    position: absolute;
    right: 6px;
    bottom: 10px;
    border: 1px solid #ccc;
    font-size: 14px; // line-height: 16px;
    padding: 0 8px;
    &.active {
        background-color: #ccc;
        color: #fff
    }
}
</style>