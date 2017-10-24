<template>
    <div>
        <h3 class="list-heading pad-bottom-10">
            单项预订
        </h3>
        <ul class="imgtext-v-list imgtext-list list-unstyled row">
            <li class="col-1-4-m col-1-2" v-for="(item, index) in facilitys">
                <div class="relative">
                    <a href="" class="img-transition block"><img :src="item.facilityImg" class="img-fluid" alt=""></a>
                    <div class="pad-top-5">
                        <h4>
                            <a href="javascript:;">{{item.facilityName}}</a>
                        </h4>
                        <p><span class="gap-r-5">{{item.facilityPriceYuan}}元</span> {{item.facilityExplain}}</p>
                    </div>
                    <span class="label">已选</span>
                </div>
            </li>
        </ul>
        <div class="text-right">
            <pager
                :page-count="facilityCount"
                :click-handler="queryFacilitys"
                :prev-text="'上一页'"
                :next-text="'下一页'"
                :container-class="'pager'">
            </pager>
        </div>  

        <h3 class="list-heading pad-bottom-10 pad-top-30">
            套票预订
        </h3>

        <ul class="imgtext-h-list imgtext-list list-unstyled">
            <li class="row" v-for="(item, index) in facilityPackages">
                <div class="col-5 col-1-4-m"><a href="" class="img-transition block"><img :src="item.packageImg" class="img-fluid" alt=""></a></div>
                <div class="col-7 col-3-4-m">
                    <h4>
                        <a href="javascript:;">{{item.packageName}}</a>
                    </h4>
                    <div>
                        <p><span class="gap-r-5">{{item.packagePriceYuan}}元</span> {{item.packageExplain}}</p>
                        <p></p>
                    </div>
                </div>
                <span class="label">已选</span>
            </li>
        </ul>
        <div class="text-right">
            <pager
                :page-count="facilityPackageCount"
                :click-handler="queryFacilityPackage"
                :prev-text="'上一页'"
                :next-text="'下一页'"
                :container-class="'pager'">
            </pager>
        </div>  
        <div class="pad-top-40 pad-bottom-40 text-center">
            <button class="button button-lg">确认购买</button>
        </div>
    </div>
</template>

<script>
import api from '@/api'
import {prefixUrl} from '@/utils/filters'
import Pager from 'vuejs-paginate'

export default {
    components: {
        Pager
    },
    data(){
        return {
            facilitys: [],
            facilityCount: 0,
            facilityPackageCount: 0,
            facilityPackages: []
        }
    },
    async mounted(){
        this.queryFacilitys(1)
        this.queryFacilityPackage(1)
    },
    methods: {
        queryFacilitys(pageNum){
            api.queryFacilitys(pageNum).then(res => {
                const {code, msg, object} = res.data
                if(code!=0){
                    console.error(msg)
                    return
                }
                this.facilitys = object.webBookingAmusementFacilityTickets.map(item => {
                    item.facilityImg = prefixUrl(item.facilityImg)
                    return item
                })
                this.facilityCount = Math.ceil(object.totalNum/12)
            })
        },
        queryFacilityPackage(pageNum){
            api.queryFacilityPackage(pageNum).then(res => {
                const {code, msg, object} = res.data
                if(code!=0){
                    console.error(msg)
                    return
                }
                this.facilityPackages = object.webBookingAmusementFacilityTicketPackageList.map(item => {
                    item.packageImg = prefixUrl(item.packageImg)
                    return item
                })
                this.facilityPackageCount = Math.ceil(object.totalNum/5)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
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
            padding: 5px 0;
            border: 1px solid #ccc;
            margin-bottom: 15px;
            .col-5 {
                padding-left: 5px;
            }
        }
    }
    &-v-list {
        margin-left: -10px;
        margin-right: -10px;
        &>li {
            padding: 10px;
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