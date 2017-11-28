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
        <Pagefooter></Pagefooter>
    </div>
</template>
<script>
import Customer from 'cmp/customer.vue';
import Pagefooter from 'cmp/pagefooter.vue';
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
  components: { Pageheader, Customer, Pagefooter },
}
</script>