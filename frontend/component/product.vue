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
            <template slot="desc" class="summary"><span class="summary">件数:{{summary.count}}</span><span class="summary">金额:{{summary.sum}}</span><span class="summary">VIP金额:{{summary.vip_sum}}</span> </template>
        </Alert>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                summary: { count:0, sum:0.0, vip_sum:0.0},
                lists: [],
                cols: [
                    {
                        title: '产品',
                        key: 'name',
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
                        title: '价格',
                        key: 'price'
                    },
                    {
                        title: 'VIP',
                        key: 'vip_price'
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
                                        padding: '3px',
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
                                        padding: '3px'
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
                this.summary.count++;
                this.summary.sum = parseFloat((this.summary.sum + this.lists[index].price).toFixed(10)); 
                this.summary.vip_sum = parseFloat((this.summary.vip_sum + this.lists[index].vip_price).toFixed(10)); ;  
                this.$Message.success(this.lists[index].name+'+1.');
                this.$baby.products = this.lists.slice();
                this.$baby.summary = this.summary;//合计
            },
            minus: function(index) {
                const pp =  this.lists[index];
                if(pp.quantity === 0){
                    this.$Message.error(this.lists[index].name+'还未选取.');
                }else{
                    pp.quantity--;
                    this.$set(this.lists, index, pp); 
                    this.summary.count--;
                    this.summary.sum = parseFloat((this.summary.sum - this.lists[index].price).toFixed(10));;  
                    this.summary.vip_sum = parseFloat((this.summary.vip_sum - this.lists[index].vip_price).toFixed(10)); 
                    this.$Message.success(this.lists[index].name+'-1.');
                    this.$baby.products = this.lists.slice();
                    this.$baby.summary = this.summary;//合计
                }
            },
            empty:function(){
                Object.keys(this.summary).forEach(key => this.summary[key] = 0);
                this.lists.forEach(data => this.$set(data, 'quantity', 0));
                this.$baby.products=[];
                this.$baby.summary = {};//合计
            }
        },
        mounted:function(){
            if(this.$baby.customer.id === 0){
                this.$Notice.open({
                    title: '历史产品',
                    desc: '<i class="ivu-icon ivu-icon-ios-color-wand-outline"></i>新用户'
                });
            }else{
                this.axios.get('/product/history',{params:{
                    customerId: this.$baby.customer.id,
                }}).then((response) => {
                    const result = response.data;
                    console.log(result);
                    if(result.length){
                        const history = [];
                        for(let item of result){
                            history.push(item.name);
                        }
                        this.$Notice.open({
                            title: '历史产品',
                            desc: history.join(' ')
                        });
                    }else{
                         this.$Notice.open({
                            title: '历史产品',
                            desc: '暂无历史记录'
                        });
                    }
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
    max-height: 210px;
    overflow-y: scroll;
}
.summary{
    padding-right: 5px;
    color:#0C3C26;
    border-bottom: 1px solid #541276;
}
</style>