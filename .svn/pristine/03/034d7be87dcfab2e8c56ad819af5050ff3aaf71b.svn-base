<template>
    <div class="bus-line">
        <ul class="list-unstyled" :style="{width: (routes.length*36) + 'px'}">
            <li v-for="(item, index) in routes" :class="{'active': item.active}">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            routes: [{
                name: '融合广场'
            }, {
                name: '公园南门'
            }, {
                name: '世纪喷泉广场',
                active: true
            }, {
                name: '生态水溪'
            }, {
                name: '生命之源'
            }, {
                name: '北湖',
                active: true
            }, {
                name: '荷花湖',
                active: true
            }, {
                name: '滨水之舟'
            }, {
                name: '中心岛剧场',
                active: true
            }, {
                name: '和平墙'
            }, {
                name: '中泰友谊亭'
            }, {
                name: '滨水之舟'
            }, {
                name: '北湖',
                active: true
            }, {
                name: '世纪喷泉广场'
            }, {
                name: '荷花湖'
            }, {
                name: '和平墙'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.bus-line {
    position: relative;
    clear: both;
    text-align: center;
    overflow-x: auto;
    &::after {
        position: absolute;
        left: 0;
        top: 20px;
        right: 0;
        height: 0;
        border-top: 1px dashed #168c74;
        content: ''
    }
    &>ul {
        margin: 20px auto;
        // border-top: 1px dashed #168c74;
        &>li {
            padding-top: 15px;
            display: inline-block;
            vertical-align: top;
            width: 20px; // line-height: 20px;
            margin: 0 8px;
            position: relative;
            &::after {
                position: absolute;
                left: 6px;
                top: -2px;
                content: '';
                height: 6px;
                width: 6px;
                background: #168c74;
                border-radius: 50%
            }
            &.active {
                color: #168c74;
                &::after {
                    width: 14px;
                    height: 14px;
                    top: -6px;
                    left: 2px;
                }
            }
        }
    }
}
</style>