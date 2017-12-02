<template>
    <div class="outer">
        <Card style="width:100%" :padding="3">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
               选择{{this.$baby.customer.name}}产品
            </p>
            <a href="#" slot="extra" @click.prevent="empty">
                <Icon type="ios-loop-strong"></Icon>
                清空
            </a>
            <div class="content">
                <Table border :columns="cols" :data="lists" class="list_product"></Table>
            </div>
        </Card>
        <Alert show-icon>
            小结:
            <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
            <template slot="desc" class="summary"><span class="summary">件数:{{products.count}}</span><span class="summary">金额:{{products.sum}}</span><span class="summary">VIP金额:{{products.vip_sum}}</span> </template>
        </Alert>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: { count:0, sum:0.0, vip_sum:0.0},
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
                const pp = this.lists[index];
                pp.quantity++;
                this.$set(this.lists, index, pp);
                this.products.count++;
                this.products.sum = parseFloat((this.products.sum + this.lists[index].price).toFixed(10)); 
                this.products.vip_sum = parseFloat((this.products.vip_sum + this.lists[index].vip_price).toFixed(10)); ;  
                this.$Message.success(this.lists[index].name+'+1.');
                this.$baby.products = this.lists;
            },
            minus: function(index) {
                const pp =  this.lists[index];
                if(pp.quantity === 0){
                    this.$Message.error(this.lists[index].name+'还未选取.');
                }else{
                    pp.quantity--;
                    this.$set(this.lists, index, pp); 
                    this.products.count--;
                    this.products.sum = parseFloat((this.products.sum - this.lists[index].price).toFixed(10));;  
                    this.products.vip_sum = parseFloat((this.products.vip_sum - this.lists[index].vip_price).toFixed(10)); 
                    this.$Message.success(this.lists[index].name+'-1.');
                    this.$baby.products = this.lists;
                }
            },
            empty:function(){
                Object.keys(this.products).forEach(key => this.products[key] = 0);
                this.lists.forEach(data => this.$set(data, 'quantity', 0));
                this.$baby.products=[];
            }
        },
        activated:function(){
            console.log(this.$baby.customer);
            if(this.$baby.customer.id === 0){
                this.$Notice.open({
                    title: '历史产品',
                    desc: '<i class="ivu-icon ivu-icon-ios-color-wand-outline"></i>新用户',
                    duration: 0
                });
            }else{
                this.axios.get('/product/history',{params:{
                    customerId: this.$baby.customer.id,
                }}).then((response) => {
                    const result = response.data;
                    const history = [];
                    for(let item of result){
                        history.push(item.name);
                    }
                    this.$Notice.open({
                        title: '历史产品',
                        desc: histor.join(' '),
                        duration: 0
                    });
                    
                }).catch((error) => {
                     this.$Notice.open({
                        title: '历史产品',
                        desc: '未找到历史记录'
                    });
                });
            }
            
            
        },
        created: function(){
            this.axios.get('/product/list',{params:{
                    user_id:this.userId,
            }}).then((response) => {
                this.lists = response.data;
                this.lists.forEach(data => this.$set(data, 'quantity', 0));
                this.$Message.success(this.$baby.customer.name,'产品已加载.');
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
.summary{
    padding-right: 5px;
    color:#0C3C26;
    border-bottom: 1px solid #541276;
}
</style>