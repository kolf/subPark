<template>
    <div>
        <div class="page-header">
            <div class="row">
                <div class="col-4 pad-top-15">
                    <v-select :options="dateOptions" class="page-header__select" placeholder="更多资讯" @change="queryList" :value="dateVal"></v-select>
                </div>
                <div class="col-4 text-center">
                    <h2 class="page-title font-400 pad-bottom-10">新闻公告
                        <small>IN THE NEWS</small>
                    </h2>
                </div>
            </div>
        </div>
        <ul class="imgtext-list list-unstyled">
            <li class="row" v-for="(item, index) in list">
                <div class="col-3-m pad-bottom-10">
                    <router-link :to="'/ours/news/' + item.newsId" class="img-transition block">
                        <img :src="item.newsLogo | prefixUrl" class="img-fluid" :alt="item.newsName">
                    </router-link>
                </div>
                <div class="col-9-m">
                    <h4 class="pad-bottom-20">
                        <router-link :to="'/ours/news/' + item.newsId">{{item.newsName}}</router-link>
                    </h4>
                    <p>{{item.newsContent | newsText}}</p>
                    <p class="date pad-top-20">{{item.newsDate}}</p>
                </div>
            </li>
            <infinite-loading @infinite="queryList">
                <span slot="no-more">
                    没有更多了:)
                </span>
            </infinite-loading>
        </ul>
    </div>
</template>

<script>
import {prefixUrl} from '@/utils/filters'
import Select from '@/components/Select'
import InfiniteLoading from 'vue-infinite-loading'
import api from '@/api'

export default {
    components: {
        VSelect: Select,
        InfiniteLoading
    },
    data() {
        return {
            list: [],
            pageNum: 1,
            dateOptions: [{
                label: '2017年1月-3月',
                value: 1
            }, {
                label: '2017年4-5月',
                value: 2
            }, {
                label: '2016年4-5月',
                value: 3
            }, {
                label: '2017年6-8月',
                value: 4
            }, {
                label: '2016年6-8月',
                value: 5
            }, {
                label: '2017年9-12月',
                value: 6
            }, {
                label: '2016年1-3月',
                value: 7
            }],
            dateVal: 0
        }
    },
    methods: {
        queryList($state, val) {
            api.queryNews(this.pageNum).then(res => {
                const { msg, code, object } = res.data
                if (code != 0) {
                    console.error(msg)
                    $state.complete()
                    return
                }
                // console.log(prefixUrl)
                const newList = object.webOursNewList

                if(newList.length){
                    this.list = this.list.concat(newList)
                    this.pageNum++
                    $state.loaded()
                }else{
                    $state.complete()
                }
            })
        }
    },
    filters: {
        newsText(text) {
            return text.length > 240 ? text.substr(0, 240) + '...' : text
        },
        prefixUrl
    },
    async mounted() {
        // this.queryList()
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