<template>
    <div class="picker">
        <Form :model="formItem" :label-width="80">
            <FormItem label="姓名(填选)" class="inline">
                 <Input v-model="formItem.name">
                    <span slot="prepend"><Icon type="person-stalker" color="#0C3C26"></Icon></span>
                    <Button slot="append" icon="grid" @click="customerModal = true"></Button>
                </Input>
            </FormItem>
            <Modal v-model="customerModal" width="360">
                <p slot="header" style="color:#f60;text-align:center">
                    <Icon type="information-circled"></Icon>
                    <span>选择用户</span>
                </p>
                <div class="modal-content">
                    <ul>
                        <li :class="person" v-for="item of datainfo" :key="item.id" @click="selThat(item.id)"><Icon type="person" color="green" class="person-icon"></Icon>{{ [ item.name, item.address ].join(' ') }}</li>
                    </ul>
                </div>
                <div slot="footer">
                    <Alert show-icon>点击选择用户</Alert>
                </div>
            </Modal>
            <FormItem label="电话(可选)">
                <Input v-model="formItem.mobile" placeholder="18805350000"><span slot="prepend"><Icon type="ios-telephone" color="#0C3C26"></Icon></span></Input>
            </FormItem>
            <FormItem label="地址(可选)">
                <Input v-model="formItem.address" placeholder="烟台市XX区"><span slot="prepend"><Icon type="home" color="#0C3C26"></Icon></span></Input>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customerModal: false,
                datainfo:[],
                formItem: {
                    id: 0,
                    name: '',
                    mobile: '',
                    address: '',
                },
                person:'list-person',
            }
        },
        methods: {
            selThat:function(id){
                this.customerModal = false;
                this.formItem  = Object.assign({},this.datainfo.filter((e) => e.id === id)[0]);
            },
        },
        watch:{
            formItem:{
                handler:function(fresh,origin){
                    if(fresh.id !== 0 && origin.id === 0){// 初始选择用户
                    }else if(fresh.id !== origin.id && origin.id !== 0){// 切换选择用户
                    }else{// 填写用户信息，新用户，id赋值为0
                        fresh.id = 0;
                    }                    
                    this.$baby.customer = fresh;
                    console.log('WATCH', this.$baby.customer);
                },
                deep:true
            },
        },
        mounted:function(){
           this.$baby.clear();
           console.log('mounted:',this.$baby.customer);
        },
        created:function(){
            this.axios.get('/customer/query')
            .then((response) => {
                this.datainfo = response.data;
            }).catch((error) => {
                this.$Message.success('选择用户失败.');
            });      
        }
    }
</script>

<style scoped>
    .picker{
        padding: 15px;
        color:#0C3C26;
    }
    .inline{
        display: inline-block;
    }
    .list-person{
        text-align: left;
        line-height: 2;
        color: #0C3C26;
        padding-bottom: 3px;
        border-bottom: 1px solid #0c1112;
    }
    .person-icon{
        padding: 1px 15px;
    }
    .modal-content{
        text-align: center;
        max-height: 400px;
        overflow: scroll;
    }
</style>