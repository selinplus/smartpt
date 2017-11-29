<template>
    <div class="content">
        <Card style="width:380px">
            <p slot="title" class="card-header">
                <Icon type="ios-information"></Icon>
                现在，只需要三步，即可完成订单
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                Change
            </a>
            <div class="container">
                <Steps :current = "step">
                    <Step title="用户" content="添加或者选择用户"></Step>
                    <Step title="产品" content="选择产品"></Step>
                    <Step title="规划" content="规划食用方案"></Step>
                </Steps>           
            </div>
            <div class="stepcomponent">
                <Customer :class="[step==0 ? '': 'hiddenme']"></Customer>
                <Product :class="[step==1 ? '': 'hiddenme']"></Product>
                <Schedule :class="[step==2 ? '': 'hiddenme']"></Schedule>
            </div>
            <Row>
                <Col span="24">
                    <ButtonGroup>
                        <Button type="primary" :disabled="pre_btn" @click="preStep">
                            <Icon type="chevron-left"></Icon>
                            上一步
                        </Button>
                        <Button type="primary"  @click="nextStep">
                            {{textname}}
                            <Icon type="chevron-right"></Icon>
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
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
            }
        }, 
        computed:{
            pre_btn: function(){
                return this.step === 0 ;
            },
            customer: function(){
                return this.step === 0 ;
            },
            product:function(){
                console.log(this.step===1);
                return this.step === 1 ;
            },
            schedule:function(){
                return this.step === 2 ;
            }
        },
         methods:{
            nextStep: function(){
                this.step += 1;
                if(this.step===2){
                    this.textname='保  存';
                }
            },
            preStep: function(){
                this.step>0 ? this.step -=1: 0;
                this.textname='下一步';
            }
        }, 
        components:{ Customer, Product, Schedule},
    }
</script>

<style scoped>
.content{
    padding: 15px;
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