<template>
    <div class="main pad-top-40">
        <div class="container">
            <div class="page-header">
                <h2 class="page-title font-400 pad-bottom-10">服务电话
                    <small>SERVICE TELEPHONE</small>
                </h2>
            </div>
            <div class="pad-top-40">
                <dl class="dl-list">
                    <template v-for="(item, index) in tels">
                        <dt class="col-1">
                            <i class="icon-dt"></i>
                        </dt>
                        <dd>{{item.telContent}}</dd>
                    </template>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api'
export default {
    data() {
        return {
            tels: []
        }
    },
    methods: {
        query() {
            api.getTels().then(res => {
                const { code, msg, object } = res.data
                if (code != 0) {
                    console.error(msg)
                    return false
                }

                this.tels = object.webServiceTelList
            })
        }
    },
    async mounted() {
        // console.log(this.filters)
        this.query()
    }
}
</script>

<style lang="scss" scoped>
.dl {
    &-list {
        &>dd {
            padding-bottom: 15px
        }
    }
}
</style>