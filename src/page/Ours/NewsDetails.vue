<template>
    <div>
        <div class="page-header">
            <div class="row">
                <div class="col-4 push-4 text-center">
                    <h2 class="page-title font-400 pad-bottom-10">新闻公告
                        <small>IN THE NEWS</small>
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
            <p>{{news.newsDate}}</p>
            <h3 class="pad-bottom-20">{{news.newsName}}</h3>
            <p v-html="news.newsContent"></p>
        </div>
        <!-- <d-player :video="video" autoplay="false" screenshot="true" ref="player"> -->
    </div>
</template>

<script>
import { prefixUrl, formatText } from '@/utils/filters'
import api from '@/api'
import Slider from '@/components/Agile'
// import VueDPlayer from 'vue-dplayer'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            slides: null,
            news: null,
            // video: {
            //     url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
            //     pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
            // },
            // player: null,
        }
    },
    components: {
        Slider,
        // 'd-player': VueDPlayer
    },
    computed: {
        ...mapGetters({
            device: 'device',
        }),
        slideHeight() {
            return this.device.isMobile ? 300 : 500
        }
    },
    async mounted() {
        const { id } = this.$route.params
        this.getNews(id)
    },
    methods: {
        getNews(id) {
            api.getNews(id).then(res => {
                console.log(res)
                const { code, msg, object } = res.data
                if (code != 0) {
                    console.error(msg)
                    return false
                }

                // const {newsBanners}
                this.news = object.webOursNewsInfo
                this.news.newsContent = formatText(object.webOursNewsInfo.newsContent)
                this.slides = this.news.newsBanners.map(item => prefixUrl(item.bannerImg))

                console.log(this.slides)
            })
        }
    },
    // mounted() {
    //     this.player = this.$refs.player.dp
    // },
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
</style>