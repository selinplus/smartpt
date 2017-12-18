<template>
    <div class="header-bar">
        <Row class="header-row">
            <Col span="10" class="brand"> simple ERP</Col>
            <Col span="8" offset="2" ><Avatar shape="square" icon="person" />{{username}}</Col>
            <Col span="3" offset="1">                
                <router-link to="Product" active-class="current" class="tips" exact><Button type="ghost" shape="circle" icon="cube">产品</Button></router-link>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: _username,
                visible: false,
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        },
    }
</script>

<style scoped>
    .header-bar{
        top:0px;
        padding: 10 20;
        width: 100%;
        background-color: #0C3C26;
        /* box-shadow: 3px 10px 5px rgba(0, 30, 0, 0.6); */
        min-height: 40px;
    }
    .header-row{
        padding: 10px 15px;
        color: white;
    }
    .brand{
        font-size: 16px;
    }
    .bell{
        color:aliceblue;
    }
    .drop-content{
        color:#0C3C26;
    }
</style>