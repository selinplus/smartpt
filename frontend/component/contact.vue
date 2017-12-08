<template>
    <div class="container">
        <div class="myname">
            <h3 class="head">{{username}}的联络人</h3>
        </div>
        <Collapse v-model="parray" accordion>
            <Panel v-for="(customer,i) of dataset" :key="customer.key">
                {{[customer.name,customer.address].join(' ')}}
                <p slot="content">
                    <Timeline>
                        <TimelineItem v-for="(node,index) of customer.nodes" :key="node.key" >
                            <Icon type="trophy" slot="dot" v-if="index === 0"></Icon>
                            <p class="time">{{node.timer}}</p>
                            <p class="content">{{node.desc.join(',')}}</p>
                        </TimelineItem>                        
                    </Timeline>
                </p>
            </Panel>            
        </Collapse>
    </div>
</template>

<script>
    export default {
      data() {
          return {
              parray:[],
              dataset: [],
              username:'',
          }
      },
      mounted:function(){
          this.axios.get('/customer/timeLine')
            .then((response) => {
                this.dataset = response.data.dataset;
                this.username = response.data.username;
                for(const c of this.dataset){
                    this.parray.push(c.key);
                }
                
            }).catch((error) => {
                this.$Message.success(error.response.data);
            });
      },
    }
</script>

<style scoped>
.container{
    padding-top: 15px;
    padding-bottom:66px;
}
.time{
        font-size: 14px;
        font-weight: bold;
    }
.content{
    padding-left: 5px;
}
.myname{
    text-align: center;
    padding-bottom: 8px;
    border-bottom: 1px solid;
}
</style>