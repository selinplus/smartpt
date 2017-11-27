<template>
    <div class="footer-bar">
        <Row>
            <Col><Icon type="wand" class="tips"></Icon>{{currentDate}}</Col>
            <Col><Icon type="coffee" calss="start">{{start}}</Icon></Col>
            <Col><Icon type="ios-people" class="contact">{{contact}}</Icon></Col>
            <Col><Icon type="ios-analytics" class="vipService">{{vipService}}</Icon></Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentDate: '2017年11月27日',
            }
        },
    }
</script>

<style scoped>
    .footer-bar{
        background-color: blueviolet;
        min-height: 60px;
        position: fixed;
        left: 0px;
        bottom: 0px;
    }
    .tip{
        font-size: 16px;
        color:bisque; 
    }
    .contact{
        font-size: 16px;
        color:antiquewhite;
    }
    .vipService{
         font-size: 16px;
        color:antiquewhite;
    }
</style>