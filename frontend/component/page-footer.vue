<template>
    <div class="footer-bar">
        <Row class="footer-row" type="flex" justify="space-between">
            <Col span="8">
                <router-link to="/"  class="tips"><Icon type="play"></Icon><div class="link">开始</div></router-link>
            </Col>
            <Col span="8">
                <router-link to="Contact" class="tips"><Icon type="person-stalker"></Icon><div class="link">联络人</div></router-link>
            </Col>
            <Col span="8">
                <router-link to="Vip"  class="tips"><Icon type="eye-disabled"></Icon><div class="link">VIP</div></router-link>
            </Col>
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
        background-color: #0C3C26;
        min-height: 60px;
        position: fixed;
        width: 100%;
        left: 0px;
        box-shadow: 3px -10px 5px rgba(0, 30, 0, 0.6);
        bottom: 0px;
    }
    .footer-row{
        padding: 0px 5px;
        margin: 10px;
    }
    .tips{
        font-size: 16px;
        text-align: center;
        color:white;
        display:block;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0
    }
</style>