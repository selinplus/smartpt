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
            </div>
        </Card>
        <!-- <ul>
            <li v-for="item of products" :key="item.id" class="product">{{ [item.name ,[item.price, "￥"].join(''),item.quantity].join(' ') }}</li>
        </ul> -->
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
                    },
                    {
                        title: '价格',
                        key: 'price'
                    },
                    {
                        title: 'VIP',
                        key: 'vip_price'
                    },
                    {
                        title: '数量',
                        key: 'quantity',
                        render: (h,params) => {
                            return h('span',{
                                style:{
                                    color: '#0C3C26',
                                }
                            },this.lists[params.index].quantity===0 ?'-': this.lists[params.index].quantity);
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 80,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        padding: 0,
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
                                    style: {
                                        padding: 0
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
                this.lists[index].quantity++;  
                console.log(this.lists);             
                this.$Message.success(this.lists[index].name+'+1.');
            },
            minus: function(index) {
                const res =  this.lists[index].quantity;;
                if(res === 0){
                    this.$Message.error(this.lists[index].name+'还未选取.');
                }else{
                    this.lists[index].quantity--;
                    this.$Message.success(this.lists[index].name+'-1.');
                }
            },
            empty:function(){
                this.products = [];
                this.lists.forEach(data => data.quantity = 0);
            }
        },
        created: function(){
            this.axios.get('/product/list',{params:{
                    user_id:this.userId,
            }}).then((response) => {
                this.lists = response.data;
                this.lists.forEach(data => Object.assign(data, { quantity: 0 }));
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
    max-height: 230px;
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