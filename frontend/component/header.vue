<template>
    <div class="header-bar">
        <Row>
            <Col span="12" class="brand"> SELIN Assist</Col>
            <Col span="6" class="s-user"><Avatar shape="square" icon="person" />{{username}}</Col>
            <Col span="6">
                <Badge count="3">
                    <a href="#" class="demo-badge"><Icon type="ios-bell-outline" size="26"></Icon></a>
                </Badge>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: 'ajing'
            }
        },
        components:{},
    }
</script>

<style scoped>
    .header-bar{
        position: fixed;
        top:0px;
        padding: 13 5;
        padding-bottom: 10 #333;
        background-color: blueviolet;
        min-height: 40px;
    }
    .brand{
        font-size: 16px;
    }
    .s-user{
        color:indigo;
    }
</style>