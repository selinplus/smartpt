<template>
    <div class="footer-bar">
        <Row class="footer-row" type="flex" justify="space-between">
            <Col span="8" class="tips">
                <router-link to="/"><Icon type="play">开始</Icon></router-link>
            </Col>
            <Col span="8" class="tips">
                <router-link :to="Contact"><Icon type="person-stalker">亲...</Icon></router-link>
            </Col>
            <Col span="8" class="tips">
                 <router-link :to="Vip"><Icon type="eye-disabled">VIP</Icon></router-link>
            </Col>
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
        background-color: #0C3C26;
        min-height: 60px;
        position: fixed;
        width: 100%;
        left: 0px;
        box-shadow: -10 0 5 rgba(100, 100, 200, 0.4);
        bottom: 0px;
        z-index: 1000;
    }
    .footer-row{
        padding: 0px 5px;
        margin: 10px;
    }
    .tips{
        font-size: 16px;
        text-align: center;
        color:antiquewhite; 
    }
</style>