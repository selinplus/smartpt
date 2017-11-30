<template>
    <div class="outer">
        <Card style="width:100%">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
               选择产品
            </p>
            <a href="#" slot="extra" @click.prevent="empty">
                <Icon type="ios-loop-strong"></Icon>
                清空
            </a>
            <div class="content">
                <Table border :columns="cols" :data="lists" class="list_product"></Table>
                <ul>
                    <li v-for="item of products" :key="item.id" class="product">{{ [item.name ,[item.price, "￥"].join(),item.quantity].join(' ') }}</li>
                </ul>
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [],
                lists: [],
                cols: [
                    {
                        title: '产品',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '价格',
                        key: 'price'
                    },
                    {
                        title: 'VIP价格',
                        key: 'vip_price'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.plus(params.index)
                                        }
                                    }
                                }, '+1'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.minus(params.index)
                                        }
                                    }
                                }, '-1')
                            ]);
                        }
                    }
                ],
            }
        },
        methods: {
            plus:function(index) {
                const res = this.products.findIndex((o) => o.id === this.lists[index].id);
                if(res === -1){
                    this.products.push(this.lists[index]);
                }else{
                    this.products[res].quantity++;
                }
                this.$Message.success(this.lists[index].name+'已选取.');
            },
            minus: function(index) {
                const res = this.products.findIndex((o) => o.id === this.lists[index].id);
                if(res === -1){
                    this.$Message.error(this.lists[index].name+'还未选取.');
                }else{
                    this.products[res].quantity--;
                    if(this.products[res].quantity === 0 ){
                        this.products.splice(res,1);
                    }
                }
                this.$Message.success(this.lists[index].name+'已取消.');
            },
            empty:function(){
                this.products = [];
            }
        },
        created: function(){
            this.axios.get('/product/list',{params:{
                    user_id:this.userId,
            }}).then((response) => {
                this.lists = response.data;
                this.$Message.success('产品已加载.');
            }).catch((error) => {
                console.log(error);
                this.$Message.success('产品加载失败.');
            });      
        }
    }
</script>

<style scoped>
.list_product{
    min-height: 120px;
}
.content{
    max-height: 320px;
    overflow-y: scroll;
}
.ivu-table-cell{
    padding-left: 10px;
    padding-right: 8px;
}
.ivu-card-body{
    padding: 10px;
}
</style>