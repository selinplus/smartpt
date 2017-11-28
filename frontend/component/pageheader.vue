<template>
    <div class="header-bar">
        <Row class="header-row">
            <Col span="12" class="brand"> SELIN Assist</Col>
            <Col span="6" ><Avatar shape="square" icon="person" />{{username}}</Col>
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
        }
    }
</script>

<style scoped>
    .header-bar{
        top:0px;
        padding: 0 5;
        width: 100%;
        background-color: #0C3C26;
        box-shadow: 3 -10 5 20 rgba(110, 70, 110, 0.6);
        min-height: 40px;
    }
    .header-row{
        padding: 10px 15px;
        color: white;
    }
    .brand{
        font-size: 16px;
    }
</style>