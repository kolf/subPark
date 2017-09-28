<template>
    <div class="select" :class="{'active': !hideOption}" @mouseleave="toggleDropdown(true)" @mouseenter="toggleDropdown(false)">
        <span class="input">{{inputText}}</span>
        <ul class="options">
            <li v-for="(item, index) in options" @click="select(item)">{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['options', 'value', 'placeholder'],
    data() {
        return {
            hideOption: true
        }
    },
    computed: {
        inputText() {
            const { value, options, placeholder } = this
            const valObj = options.filter(item => {
                console.log(value)
                return item.value === value
            })[0]

            return valObj ? valObj.label : placeholder
        }
    },
    methods: {
        select(option) {
            this.hideOption = true
            this.$emit('change', option.value)
        },
        toggleDropdown(show) {
            this.hideOption = show
        }
    }
}
</script>

<style lang="scss" scoped>
.select {
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 20px;
    text-align: center;
    position: relative;
    height: 40px;
    &::before{
        right: 15px;
    }
    &.active{
        border-radius: 20px 20px 0 0;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
        // height: 42px;
        // border:none;
        &>.options{
            display: block
        }
    }
}

.input {
    // padding: 10px 50px;
    height: 40px;
    line-height: 40px;
    width:200px;
    display: inline-block;
    font-size: 16px;
    padding-right: 15px;
}

.options{
    position: absolute;
    left: 0;
    top: 38px;
    display: none;
    border-top: none;
    list-style: none;
    margin: 0;
    width: 100%;
    padding: 10px 0 10px 0;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    z-index: 10;
    background: #fff;
    border-radius: 0 0 20px 20px;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 10px;
        top: -4px;
        background: #fff;
    }
    &>li{
        padding: 5px
    }
}
</style>