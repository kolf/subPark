<template>
    <div>
        <a href="" class="project" v-for="(item, index) in list">
            <div class="row">
                <div class="col-4 project-title pad-left-10">
                    <div class="text-table">
                        <div class="text-table-cell">
                            {{item.otherName}}
                            <small class="none block-l pad-top-20">{{item.otherIntro}}</small>
                        </div>
                    </div>
                </div>
                <div class="col-8 push-4">
                    <div class="project-img" :style="'background-image:url('+item.otherImg+')'"></div>
                </div>
            </div>
        </a>
        <infinite-loading @infinite="queryList">
            <span slot="no-more">
                没有更多了:)
            </span>
        </infinite-loading>
    </div>
</template>


<script>
import api from '@/api'
import {prefixUrl} from '@/utils/filters'
import InfiniteLoading from 'vue-infinite-loading'

export default {
    components: {
        InfiniteLoading
    },
    data() {
        return {
            list: [],
            pageNum: 1
        }
    },    
    async mounted() {
        // this.queryList()
    },
    methods: {
        queryList($state){
            api.queryBookingOther(this.pageNum, 1).then(res => {
                const {code, msg, object} = res.data
                if(code!=0){
                    console.error(msg)
                    $state.complete()
                    return
                }
                
                const newList = object.webBookingOtherList.map(item => {
                    item.otherImg = prefixUrl(item.otherImg)
                    return item
                })

                if(newList.length){
                    this.list = this.list.concat(newList)
                    this.pageNum++
                    $state.loaded()
                }else{
                    $state.complete()
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.project{
    &-img{
        padding-top:45%;
        background-color: #ccc;
        background-position: center;
        background-size: 100% auto;
    }
}
</style>