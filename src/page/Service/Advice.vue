<template>
    <div class="main pad-top-40">
        <div class="container">
            <div class="page-header">
                <h2 class="page-title font-400 pad-bottom-10">游客建议
                    <small>VISITOR SUGGESTIONS</small>
                </h2>
            </div>
            <form class="help-from">
                <div class="pad-bottom-20">您好，请问您有什么疑问</div>
                <div class="field-group">
                    <input type="text" class="field" placeholder="姓名">
                </div>
                <div class="field-group">
                    <input type="text" class="field"  placeholder="联系方式">
                </div>
                <div class="field-group">
                    <textarea class="field" cols="30" rows="10"  placeholder="请输入您的问题"></textarea>
                </div>
                <div class="field-group text-center">
                    <div class="button submit-btn">提交</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.help-from{
    margin-top: 60px;
    padding:30px;
    border-radius: 4px;
   box-shadow: 1px 2px 6px 0px #ccc;
}
.field {
    &-group {
        padding-bottom: 10px;
    }
}

.submit{
    &-btn{
        background: #fff;
        font-size: 20px;
        padding: 12px 80px;
        border-radius: 4px;
    }
}
</style>