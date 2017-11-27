<template>
    <div>
        <AutoComplete
            v-model="productId"
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
                productId: '',
                datainfo:[ '' ],
            }
        },
        methods: {
           handleSearch (value) {
                axios.get('/product/query',{params:{
                        keyword:value
                }}).then(function (response) {
                        console.log(response.data);
                        console.log(response.status);
                        console.log(response.statusText);
                        console.log(response.headers);
                        console.log(response.config);
                        this.datainfo = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            
        },
    }
</script>

<style scoped>

</style>