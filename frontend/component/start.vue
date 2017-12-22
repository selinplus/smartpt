<template>
    <div class="content">
        <Card style="width:99%">
            <p slot="title" class="card-header">
                <Icon type="ios-information"></Icon>
                三步，即可完成订单!
            </p>
            <span slot="extra">
                <Button size="small" type="ghost" @click="nextStep">
                            {{textname}}
                            <Icon type="chevron-right"></Icon>
                </Button>
                <Button size="small" type="ghost" @click="empty">
                            重置
                </Button>
            </span>
            <div class="container">
                <Steps :current = "step">
                    <Step title="用户" content="添加/选择用户"></Step>
                    <Step title="产品" content="选择产品"></Step>
                    <Step title="规划" content="规划食用方案"></Step>
                </Steps>           
            </div>
            <div class="stepcomponent">
                <transition mode="in-out" enter-active-class="slideInLeft", leave-active-class="slideOutRight">
                   <component :is="comarray[step]"></component>
                </transition>
            </div>
        </Card>
    </div>
</template>

<script>
    import Customer from './customer.vue';
    import Product from './product.vue';
    import Schedule from './schedule.vue';
    export default {
        data() {
            return {
                step: 0,
                textname: '下一步',
                comarray:['Customer', 'Product', 'Schedule'],
            }
        }, 
        methods:{
            nextStep: function(){
                switch (this.step) {
                    case 0:
                    console.log('start:', this.$baby.customer);
                        if(this.$baby.customer.name){
                            this.step = 1;                            
                        }else{
                            this.$Notice.error({
                            title: '必须选择或者填写姓名',
                            desc: ''
                            });
                        }
                        break;
                    case 1:
                        if(this.$baby.products.length){
                            this.textname='保存';
                            this.step = 2;                            
                        }else{
                            this.$Notice.error({
                            title: '请选择产品',
                            desc: ''
                            });
                        }
                        break;
                    default:
                        if(this.$baby.schedule.length){
                           this.saveOrder();                            
                        }else{
                            this.$Notice.error({
                            title: '请安排计划',
                            desc: '为了更好的跟踪服务用户，建议填写食用规划.'
                            });
                        }
                        break;
                }
                
            },
            saveOrder:function(){
                const store = Object.assign({},this.$baby);
                this.axios({method:'post',url:'/orders/save',contentType: "application/json",data:store})
                .then((response) => {
                    this.$Notice.success({
                        title: '订单已完成',
                        desc: [store.customer.name,'数量',store.summary.count,'金额',store.summary.sum,'会员价',store.summary.vip_sum].join(' '),
                        duration: 0
                    });
                    this.textname='下一步';
                    this.step = 0;
                }).catch((error) => {
                    this.$Notice.error({
                        title: '订单未提交',
                        desc: [store.customer.name,'数量',store.summary.count,'金额',store.summary.sum,'会员价',store.summary.vip_sum].join(' ')
                    });
                    this.textname='下一步';
                    this.step = 0;
                });      
            },
            empty:function(){
                this.$baby.clear();
                this.step = 0;
                this.textname='下一步';
            }
        }, 
        components:{ Customer, Product, Schedule},
    }
</script>

<style scoped>
.content{
    padding: 2px;
    height: 100%;
}
.hiddenme{
    display: none;
}
.stepcomponent{
    min-height: 350px;
}
.container{
    border-bottom: 1px solid #0C3C26;

}
.card-header{
    color:#0C3C26;
}
.btn-next-container{
    margin-top: 6px;
}
</style>