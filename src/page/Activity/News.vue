<template>
    <div>
        <div class="page-header">
            <h2 class="page-title font-400 pad-bottom-20">活动资讯
                <small>Activity News</small>
            </h2>
        </div>
        <div class="project-list">
            <router-link :to="'/activity/news/' + item.activityId" class="project" v-for="(item, index) in list">
                <div class="row">
                    <div class="col-4 project-title pad-left-10">
                        <div class="text-table">
                            <div class="text-table-cell">
                                {{item.activityName}}
                                <small class="none block-l pad-top-20">{{item.activityContent}}</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 push-4">
                        <div class="project-img" :style="'background-image:url('+item.activityLogo+')'"></div>
                    </div>
                </div>
            </router-link>
            <infinite-loading @infinite="queryList">
                <span slot="no-more">
                    没有更多了:)
                </span>
            </infinite-loading>
        </div>
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
            api.queryActivity(this.pageNum, 1).then(res => {
                const {code, msg, object} = res.data
                if(code!=0){
                    console.error(msg)
                    $state.complete()
                    return
                }
                
                const newList = object.webActivityNewList.map(item => {
                    item.activityLogo = prefixUrl(item.activityLogo)
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