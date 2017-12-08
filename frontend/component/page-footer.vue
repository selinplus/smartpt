<template>
    <div class="footer-bar">
        <Row class="footer-row" type="flex" justify="space-between">
            <Col span="6">
                <router-link to="/" active-class="current" class="tips" exact><Icon type="play"></Icon><div class="link">开始</div></router-link>
            </Col>
            <Col span="6">
                <router-link to="Contact" active-class="current" class="tips" exact><Icon type="person-stalker"></Icon><div class="link">联络人</div></router-link>
            </Col>
            <Col span="6">
                <router-link to="My" active-class="current" class="tips" exact><Icon type="leaf"></Icon><div class="link">我的</div></router-link>
            </Col>
            <Col span="6">
                <router-link to="Vip" active-class="current" class="tips" exact><Icon type="eye-disabled"></Icon><div class="link">VIP</div></router-link>
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
        /* position: fixed; */
        width: 100%;
        left: 0px;
        /* box-shadow: 3px -5px 5px rgba(0, 30, 0, 0.6); */
        bottom: 0px;
    }
    .footer-row{
        padding: 0px 5px;
        margin: 10px;
    }
    .tips{
        font-size: 16px;
        /* background-color: #345; */
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
    .current{
        box-shadow: 5px 3px 2px rgba(0, 30, 0, 0.6);
        color:#dc7fc7;
    }
</style>