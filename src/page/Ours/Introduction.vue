<template>
    <div>
        <div class="page-header">
            <h2 class="page-title font-400 pad-bottom-10">公园介绍
                <small>PARK INTRODUCTION</small>
            </h2>
        </div>
        <div class="content pad-top-40" v-html="intro">
            <!-- <p>朝阳公园是一处以园林绿化为主的综合性、多功能的大型文化、休闲、体育、娱乐公园，是国家AAAA级旅游景区、北京市重点公园和精品公园，是北京市四环以内最大的城市公园。朝阳公园位于朝阳区中部繁华地段，北至亮马桥路，西至朝阳公园路，东至东四环路，南至朝阳公园南路，规划总面积为288.7公顷，其中水面面积68.2公顷，绿化覆盖率87%。</p>
            
                <p>1999 年 12 月江泽民同志亲自为朝阳公园题写园名，中央领导同志于1992年、1996年和2004年三次来到朝阳公园参加全民义务植树活动。</p>
                <p>2008年第29届北京奥运会沙滩排球比赛在朝阳公园举办，2009年建成沙滩主题乐园，成为北京奥运场馆赛后利用的典范。朝阳公园建成了中央首长植树林、生命之源、艺术广场、卧龙叠水、春花园等30余个景点；建成勇敢者天地游乐园、网球中心、羽毛球馆及索尼探梦、小人国、乐高小镇等体育文化娱乐项目。
                </p>
                <p>2006年7月，朝阳公园被朝阳区授予“朝阳公园国际文化展演聚集区”，形成了“春节朝阳国际风情节”、“五一朝阳流行音乐周”、“十一朝阳国际旅游文化节”三大国际时尚文化品牌活动。“海洋沙滩狂欢节”被评为北京市优秀文化活动。FIVB世界沙滩排球大满贯北京赛事将连续五年在朝阳公园沙滩排球主赛场举办。朝阳公园的建设对改善北京市东部地区的生态环境、丰富市民的文化生活起到了重要的作用。</p> -->
        </div>
    </div>
</template>

<script>
//getIntroduction 
import api from '@/api'
console.log(api)
export default {
    data() {
        return {
            intro: ''
        }
    },
    created() {
        this.getIntroduction()
    },
    methods: {
        getIntroduction() {
            api.getIntroduction().then(res => {
                const { code, msg, object } = res.data
                if (code == 0) {
                    this.intro = object.webOursAboutInfo.content.replace(/\r\n/g, "<br/>")
                } else {
                    this.intro = msg
                }
            })
        }
    }
}
</script>

<style scoped>

</style>