<template>
    <div class="picker">
        <Form :model="formItem" :label-width="80">
            <FormItem label="姓名" class="inline">
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
                <div style="text-align:center">
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
            sel:function(){
                this.customerModal = false;
                this.$Message.success('选择用户成功.');
            },
            selThat:function(id){
                this.customerModal = false;
                this.formItem  = this.datainfo.filter((e) => e.id === id)[0];
                this.$Message.success('选择用户成功.');
            },
            babyCustomer:function(newValue,oldValue){
                this.$baby.customer = newValue;
            }
        },
        activated:function(){
            this.$watch('formItem', this.babyCustomer, {
              deep: true
            });            
        },
        created:function(){
            this.axios.get('/customer/query')
            .then((response) => {
                this.datainfo = response.data;
            }).catch((error) => {
                console.log(error);
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
        border-bottom: 1px solid #0c1112;
    }
    .person-icon{
        padding: 1px 15px;
    }
</style>