<template>
    <div>
        <div class="page-header">
            <h2 class="page-title font-400 pad-bottom-10">友情链接
                <small>FRIENDSHIP LINK</small>
            </h2>
        </div>
        <div class="pad-top-40">
            <dl class="dl-list">
                <template v-for="(item, index) in friends">
                    <dt class="col-1">
                        <i class="icon-dt"></i>
                    </dt>
                    <dd class="fs-4">
                        <a :href="item.link" target="_black">{{item.content}}</a>
                    </dd>
                </template>
                <dd>
                    <p>温馨提示：上述网站不由朝阳公园维护，并且朝阳公园保密声明并不适用于上述网站。 <br> 此链接仅为方便您访问而提供，朝阳公园不能保证该链接的有效性，也不为您在此非朝 阳公园站点上获得的任何信息或联系方式的真实性负责。
                    </p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import api from '@/api'
export default {
    data() {
        return {
            friends: []
        }
    },
    created() {
        this.getFriend()
    },
    methods: {
        getFriend() {
            api.getFriend().then(res => {
                const { code, msg, object } = res.data
                if (code == 0) {
                    this.friends = object.webOursFriendList
                }
            })
        }
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