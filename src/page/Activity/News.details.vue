<template>
    <div>
        <div class="page-header">
            <div class="row">
                <div class="col-4 push-4 text-center">
                    <h2 class="page-title font-400 pad-bottom-20">{{pageTitle.zh}}
                        <small>{{pageTitle.en}}</small>
                    </h2>
                </div>
                <div class="col-4 push-4 text-right pad-top-20">
                    <router-link :to="'/ours/news'" class="fs-4">
                        <i class="iconfont icon-icon"></i> 返回上级</router-link>
                </div>
            </div>
        </div>
        <slider v-if="slides" class="slider" :arrows="true" :infinite="true" :autoplay="true">
            <div class="slide" v-for="(item, index) in slides" :style="'background-image:url('+item+');height:'+slideHeight+'px'"></div>
        </slider>
        <div v-if="news" class="article pad-top-20">
            <p>{{news.activityDate}}</p>
            <h3 class="pad-bottom-20">{{news.activityName}}</h3>
            <p v-html="news.activityContent"></p>
        </div>
        <div class="player" v-if="video.url">
            <d-player :video="video"
                    :contextmenu="contextmenu"
                    ref="player">
            </d-player>
        </div>
    </div>
</template>

<script>
import { prefixUrl, formatText } from '@/utils/filters'
import api from '@/api'
import Slider from '@/components/Agile'
import VueDPlayer from 'vue-dplayer'
import { mapActions, mapGetters } from 'vuex'

const activityMap = {
    'news': {
        'zh': '活动资讯',
        'en': 'Activity News'
    },
    'projects': {
        'zh': '全年固定活动',
        'en': 'Activity News'
    }
}

export default {
    data() {
        return {
            slides: null,
            news: null,
            video: {},
            autoplay: false, 
            player: null,
            contextmenu: [],
            activityType: 'news',
            title: {
                zh: '活动资讯',
                en: 'Activity News'
            }
            // title: '活动资讯',
            // subtitle: 'Activity News'
        }
    },
    components: {
        Slider,
        'd-player': VueDPlayer,
    },
    computed: {
        ...mapGetters({
            device: 'device',
        }),
        slideHeight() {
            return this.device.isMobile ? 300 : 500
        },
        pageTitle(){
            return activityMap[this.activityType]
        }
    },
    async mounted() {
        const {type, id } = this.$route.params
        this.activityType = type
        console.log(type)
        this.getActivity(id)
    },
    methods: {
        getActivity(id) {
            api.getActivity(id).then(res => {
                console.log(res)
                const { code, msg, object } = res.data
                if (code != 0) {
                    console.error(msg)
                    return false
                }


                // const {newsBanners}
                const info = object.webActivityNewInfo
                info.activityContent = formatText(info.activityContent)

                if(info.activityNewsBanners && info.activityNewsBanners.length>0){
                    this.slides = info.activityNewsBanners.map(item => prefixUrl(item.bannerImg))
                }

                if(info.activityVideo){
                    this.video.url = prefixUrl(info.activityVideo)
                }

                this.news = info
            })
        }
    },
    filters: {
        prefixUrl,
        formatText
    }
}
</script>

<style scoped lang="scss">
.slider {
    margin-top: 50px;
}

.slide {
    background: {
        position: center;
        size: cover;
    }
}
.player{
    max-width: 100%;
    width:600px;
    padding-top: 50px;
}
</style>
