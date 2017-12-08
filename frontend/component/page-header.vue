<template>
    <div class="header-bar">
        <Row class="header-row">
            <Col span="12" class="brand"> SELIN Assist</Col>
            <Col span="4" offset="2" ><Avatar shape="square" icon="person" />{{username}}</Col>
            <Col span="5" offset="1">                
                <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
                    <a href="javascript:void(0)" class="bell" @click="handleOpen">
                        <Badge count="3">
                            <Icon type="ios-bell-outline" size="26"></Icon>
                        </Badge>
                    </a>
                    <DropdownMenu slot="list">
                        <p class="drop-content">XXX将要用尽</p>
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" size="small" @click="handleClose">关闭</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: username,
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