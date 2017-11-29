<template>
    <div>
        <Pageheader></Pageheader>
        <div class="container">
            <Steps :current = "step">
                <Step title="用户" icon="person-add"></Step>
                <Step title="产品" icon="flame"></Step>
                <Step title="规划" icon="leaf"></Step>
            </Steps>
            <router-view></router-view>     
        </div>
        <Row>
            <Col span="24">
                <ButtonGroup>
                    <Button type="primary" :disabled="disable_btn" @click="nextStep">
                        <Icon type="chevron-left"></Icon>
                        上一步
                    </Button>
                    <Button type="primary" @click="preStep">
                        下一步
                        <Icon type="chevron-right"></Icon>
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
        <div class="footer-bar">
            <Row class="footer-row" type="flex" justify="space-between">
                <Col span="8" class="tips">
                    <router-link to="/"><Icon type="play">开始</Icon></router-link>
                </Col>
                <Col span="8" class="tips">
                    <router-link to="Contact"><Icon type="person-stalker">亲...</Icon></router-link>
                </Col>
                <Col span="8" class="tips">
                    <router-link to="Vip"><Icon type="eye-disabled">VIP</Icon></router-link>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
import Customer from 'cmp/customer.vue';
import Pageheader from 'cmp/pageheader.vue';

export default {
  name: 'app',
  data () {
    return{
        userId: 'test1',
        step: 0
    }
  },
  computed:{
      disable_btn: function(){
          return this.step === 0 ;
      }
  },
  methods:{
      nextStep(){
          this.step++;
      },
      preStep(){
          this.step>1 ? this.step -=1: 1;
      }
  },
  components: { Pageheader, Customer },
}
</script>
<style scoped>
    .footer-bar{
        background-color: #0C3C26;
        min-height: 60px;
        position: fixed;
        width: 100%;
        left: 0px;
        box-shadow: -10 0 5 rgba(100, 100, 200, 0.4);
        bottom: 0px;
        z-index: 1000;
    }
    .footer-row{
        padding: 0px 5px;
        margin: 10px;
    }
    .tips{
        font-size: 16px;
        text-align: center;
        color:antiquewhite; 
    }
</style>