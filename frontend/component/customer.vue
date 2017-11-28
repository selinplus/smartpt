<template>
    <div class="picker">
        <AutoComplete
            v-model="customerId"
            @on-search="handleSearch"
            placeholder="输入姓名或电话或地址"
            style="width:250px">
            <Option v-for="item in datainfo" :value="item.id" :key="item.id">{{ [item.name,item.mobile,item.address].join(' ') }}</Option>
        </AutoComplete>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userId: 'test1',
                customerId: '1',
                datainfo:[],
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
    }
</style>