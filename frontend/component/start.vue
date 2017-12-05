<template>
    <div class="content">
        <Card style="width:99%">
            <p slot="title" class="card-header">
                <Icon type="ios-information"></Icon>
                现在，只需三步，即可完成订单!
            </p>
            <a href="#" slot="extra" >
                <Icon type="ios-loop-strong"></Icon>
            </a>
            <div class="container">
                <Steps :current = "step">
                    <Step title="用户" content="添加/选择用户"></Step>
                    <Step title="产品" content="选择产品"></Step>
                    <Step title="规划" content="规划食用方案"></Step>
                </Steps>           
            </div>
            <div>
                <ButtonGroup style="align:right;">
                    <Button small type="primary" :disabled="pre_btn" @click="preStep">
                        <Icon type="chevron-left"></Icon>
                        上一步
                    </Button>
                    <Button small type="primary"  @click="nextStep">
                        {{textname}}
                        <Icon type="chevron-right"></Icon>
                    </Button>
                </ButtonGroup>
            </div>  
            <div class="stepcomponent">
                <transition mode="out-in" enter-active-class="slideInLeft", leave-active-class="slideOutRight">
                    <keep-alive>
                        <component :is="comarray[step]"></component>
                    </keep-alive> 
                </transition>     
            </div>
        </Card>
    </div>
</template>

<script>
    import Customer from './customer.vue';
    import Product from './product.vue';
    import Schedule from './schedule.vue';
    import qs from 'qs';
    export default {
        data() {
            return {
                step: 0,
                textname: '下一步',
                comarray:['Customer', 'Product', 'Schedule'],
            }
        }, 
        computed:{
            pre_btn: function(){
                return this.step === 0 ;
            },            
        },
         methods:{
            nextStep: function(){
                switch (this.step) {
                    case 0:
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
            preStep: function(){
                this.step>0 ? this.step -=1: 0;
                this.textname='下一步';
            },
            saveOrder:function(){
                const store = Object.assign({},this.$baby);
                this.$baby = {
                    userId: 'XXXX',
                    summary: {},
                    customer: {},
                    products: [],
                    schedule: [],
                };
                console.log(this.$baby);
                this.axios({method:'post',url:'/orders/save',contentType: "application/json",data:store})
                .then((response) => {
                    console.log(response.data);
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
            }
        }, 
        components:{ Customer, Product, Schedule},
    }
</script>

<style scoped>
.content{
    padding: 2px;
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

</style>