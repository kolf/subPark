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
        <slider class="slider" :arrows="true" :infinite="true" :autoplay="true">
            <div class="slide" v-for="(item, index) in slides" :style="'background-image:url('+item+');height:'+slideHeight+'px'"></div>
        </slider>
        <div class="article pad-top-20">
            <p>2017-05-25</p>
            <h3 class="pad-bottom-20">漫威复仇者联盟互动体验站点亮北京盛大启幕</h3>
            <p>火爆全球的“漫威复仇者联盟互动体验站”(Marvel Avengers S.T.A.T.I.O.N.)，于2017年5月24日晚在北京朝阳公园08广场盛大启幕。香港著名导演唐季礼、著名导演胡玫、著名歌手李玉刚、华特迪士尼大中华区副总裁蔡志行、新加坡城贸易集团首席执行官Ron Tan，北京天汉文化董事长李耀汉及来自商界、影视、金融、创投、文化等各界来宾共同见证“点亮英雄之夜”这一历史性的时刻，标志着项目正式开启在中国为期2年的巡展。钢铁侠、美国队长、雷神、绿巨人等10名身怀绝技的超级英雄，带着世界顶级挑战任务走出虚拟世界来到你的身边，继纽约时代广场、巴黎拉德芳斯广场等之后，一个真实的漫威宇宙将于5月27日崛起于北京朝阳公园08广场。同时在试运营（5月25-26日）期间将对邀请媒体及粉丝开放体验。 “漫威复仇者联盟互动体验站”是全球最领先的电影超级IP实景娱乐互动体验项目，也是首次进驻中国市场。整个体验站基于漫威电影场景还原设计，创新采用了智能场景和设备互联的设计理念，这是电影衍生产业向新实景娱乐迈出重要的一步，继静态电影道具展和戏剧表演式的互动体验展之后的全新娱乐形态，10大IP形象，连体场景，环环相扣。团队挑战，独立剧情，多个支线任务，不仅可以满足漫威粉丝的朝圣细节，也让电影观众尝鲜“玩”电影，孩子们，年轻人，家庭都有各自的满足设计。</p>
            <p>在这里，所有玩家可以cosplay他们最喜爱的角色，和钢铁侠、美国队长等人气角色并肩战斗会让无数漫迷疯狂，而黑寡妇和猩红女巫将和玩家一起粉碎奥创的阴谋。想和绿巨人探讨化学吗？想举起雷神之锤吗？想启动神秘宇宙能量块，穿上钢铁侠的战甲参与到纽约那场大战打败齐塔瑞人吗？复联体验站会让大家玩到疯狂。</p>
            <p>据纽约、新加坡等国际大都市运行数据证明，漫威复仇者联盟互动体验站会吸引大批青少年组团来战，而此次引进中国的最新升级版，也为孩子定制设计了游戏环节。他们除了按照各个年龄层设计的不同互动娱乐游戏，还可以飚英语，玩化学，寓教于乐。目前，官方还有很多神秘的、将电影世界冲破界限做成现实的一些极致细节还未披露，这无疑会吊起更多人的胃口。 这里，将是学生们的模拟特工训练营，与心爱的超级英雄一起接受挑战；这里也是复仇者联盟电影粉“玩电影”的最佳场所；这里更是所有人的室内电影主题乐园。2017年6月开始的两年，“漫威复仇者联盟互动体验站”将巡回中国各大城市，这将是漫威粉丝的节日，孩子们的节日，英雄的节日！
            </p>
            <p>关于漫威娱乐有限公司</p>
            <p>漫威娱乐有限公司是华特迪士尼公司的全资子公司，也是全球最主要的基于人物的娱乐公司之一。76年以来，漫威的8000多个人物一直活跃在各个媒体上。漫威在娱乐、授权以及出版方面经营其人物系列。更多信息请登录www.marvel.com。© 2017 MARVEL</p>
        </div>
        <!-- <d-player :video="video" autoplay="false" screenshot="true" ref="player"> -->
    </div>
</template>

<script>
import Slider from '@/components/Agile'
import VueDPlayer from 'vue-dplayer'
import { mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            device: 'device',
        }),
        slideHeight() {
            return this.device.isMobile ? 300 : 500
        }
    },
    mounted() {
        this.player = this.$refs.player.dp
    },
    data() {
        return {
            slides: [
                'http://www.sun-park.com/uploadfile/2017/0525/20170525093700437.jpg',
                'http://www.sun-park.com/uploadfile/2017/0525/20170525093939326.jpg',
                'http://www.sun-park.com/uploadfile/2017/0525/20170525094042595.jpg'
            ],
            video: {
                url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
            },
            player: null,
        }
    },
    components: {
        Slider,
        'd-player': VueDPlayer
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