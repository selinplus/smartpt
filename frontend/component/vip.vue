<template>
    <div class="main">
        <h3 class="title">VIP功能</h3>
        <h5 class="desc">本模块为已规划功能，将逐步开放.</h5>
        <ul>
            <li class="list-info"><span class="number-list">1</span><span class="desc-list">信息提醒，帮您记住每一个贵宾.</span></li>
            <li class="list-info"><span class="number-list">2</span><span class="desc-list">健康档案，详细记录分析每一个贵宾</span></li>
            <li class="list-info"><span class="number-list">3</span><span class="desc-list">产品分析，全市场热点商品为你推荐.</span></li>
            <li class="list-info"><span class="number-list">4</span><span class="desc-list">大数据分析，掌握每一次市场波动.</span></li>
            <li class="list-info"><span class="number-list">5</span><span class="desc-list">私人秘书,为您安排活动日程</span></li>
            <li class="list-info"><span class="number-list">6</span><span class="desc-list">成为VIP，探索无限可能...</span></li>
            <li class="list-info"><span class="number-list">7</span><span class="desc-list">......</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.main{
    padding: 8px;
    margin-top: 15px;
    margin-left: 15px;
    border-left-width: 1px;
    border-left-color: #036c90;
    border-left-style: solid;
    border-top: 1px solid #036c90;
}
.title{
    font-size: 18px;
    border-bottom: 1px dashed slateblue;
}
.list-info{
    padding-left: 5px;
    margin:10px;
}
.desc{
    margin-top:6px;
    text-align: center;
}
.number-list{
    font-size:26px;
    border-bottom: 1px solid dimgrey;
    border: 25%;
    padding-right:20px;
    padding-left:10px;
    
}
.desc-list{
    font-size:16px;
    padding-bottom: 3px;
    border-bottom: 1px solid #333333;
}
</style>