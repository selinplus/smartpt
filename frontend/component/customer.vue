<template>
    <div class="picker">
        <Form :model="formItem" :label-width="80">
            <FormItem label="用户">
                <Input v-model="formItem.name" placeholder="输入或者点击选择"></Input><span><a href=""><Icon type="more"></Icon></a></span>
            </FormItem>
            <FormItem label="电话">
                <Input v-model="formItem.mobile" placeholder="18805350000"></Input>
            </FormItem>
            <FormItem label="地址">
                <Input v-model="formItem.address" placeholder="烟台市XX区"></Input>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userId: 'test1',
                customerId: '1',
                datainfo:[],
                autocomplete:'auto',
                formItem: {
                    name: '',
                    mobile: '',
                    address: '',
                }
            }
        },
        computed:{
            customerInfo:() =>{
                return this.datainfo.forEach(
                    (v) =>{
                        if(v.id === this.customerId){
                            console.log(Array.from(v).split(' '));
                            return ;
                        }
                    }
                ); 
            }
        },
        methods: {
           handleSearch (value) {
                axios.get('/customer/query',{params:{
                        keyword:value,
                        user_id:this.userId,
                }}).then((response) => {
                      console.log(this);
                      this.datainfo = response.data;
                }).catch((error) => {
                        console.log(error);
                });
            }
            
        },
    }
</script>

<style scoped>
    .picker{
        padding: 15px;
        color:#0C3C26;
    }
    .auto{
        width: 250px;
        color: #0C3C26;
    }
</style>