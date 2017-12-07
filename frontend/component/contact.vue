<template>
    <div class="container">
        <div>
            <h3>{{username}}的联络人</h3>        
        </div>
        <Collapse v-model="parray" accordion>
            <Panel v-for="customer of dataset" :key="customer.key">
                {{customer.name}}
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
                this.dataset = response.data;
                for(const c of this.dataset){
                    this.parray.push(c.key);
                }
                // this.username = response.session.userName;
            }).catch((error) => {
                this.$Message.success('选择用户失败.');
            });
      },
    }
</script>

<style scoped>
.container{
    padding-bottom:66px;
}
.time{
        font-size: 14px;
        font-weight: bold;
    }
.content{
    padding-left: 5px;
}
</style>