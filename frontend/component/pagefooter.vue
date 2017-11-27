<template>
    <div class="footer-bar">
        <Row class="footer-row">
            <Col span="6"><Icon type="home" class="tips"></Icon><div>{{currentDate}}</div></Col>
            <Col span="6"><Icon type="paper-airplane" calss="start"></Icon><div>{{start}}</div></Col>
            <Col span="6"><Icon type="ios-people" class="contact"></Icon><div>{{contact}}</div></Col>
            <Col span="6"><Icon type="ios-analytics" class="vipService"></Icon><div>{{vipService}}</div></Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentDate: '2017年11月27日',
                start: '开始',
                contact: '联系人',
                vipService: 'VIP',
            }
        },
    }
</script>

<style scoped>
    .footer-bar{
        background-color: blueviolet;
        min-height: 60px;
        position: fixed;
        width: 100%;
        left: 0px;
        box-shadow: -10 0 5 rgba(100, 100, 200, 0.4);
        bottom: 0px;
        z-index: 1000;
    }
    .footer-row{
        padding: 10px 5px;
        margin: 10px;
    }
    .tip{
        font-size: 26px;
        color:antiquewhite; 
    }
    .start .contact .vipService{
        font-size: 26px;
        color:antiquewhite;
    }
</style>