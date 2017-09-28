<template>
    <div>
        <h3 class="list-heading">
            套票预订
        </h3>

        <ul class="imgtext-list list-unstyled">
            <li class="row" v-for="(item, index) in list">
                <div class="col-3-m pad-bottom-10">
                    <a class="img-transition block">
                        <img :src="item.src" class="img-fluid" :alt="item.title">
                    </a>
                </div>
                <div class="col-9-m">
                    <h4 class="pad-bottom-20">
                        {{item.title}}
                    </h4>
                    <p>票价： {{item.price}}</p>
                    <p>押金： {{item.deposit}}</p>
                    <p class="date pad-top-20">{{item.date}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { data as list } from '@/data/traffic'

export default {
    data() {
        return {
            list
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/sass/base/_mixins";

.imgtext-list {
    &>li {
        padding: 40px 0;
        border-bottom: 1px solid #eee;
        &>.col-3 {
            padding-left: 0;
        }
        p {
            margin: 0
        }
    }
}

@include breakpoint(m) {
    .imgtext-list {
        &>li {
            padding: 50px 0;
            .date {
                padding-top: 60px
            }
        }
    }
}
</style>