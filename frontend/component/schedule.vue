<template>
    <div class="schedule-con">
        <Row>
            <Col span="8">
                <ul>
                    <li class="product-list" :class="{activate:activated}" v-for="item of datainfo" :key="item.id" @click="selThat(item.id)"><Icon type="ios-star" color="green"></Icon>{{ [ item.name, item.quantity ].join(' ') }}</li>
                </ul>
            </Col>
            <Col span="15" offset="1">
                <div class="sch-main">
                    <Form :model="formItem" >
                        <span stype="display:none;">{{formItem.Id}}</span>
                        <FormItem label="开始日期">
                                <DatePicker format="yyyy年MM月dd日" type="date" placeholder="选择日期" v-model="formItem.startDate"></DatePicker>
                        </FormItem>
                        <FormItem label="结束日期">
                                <DatePicker format="yyyy年MM月dd日" type="date" placeholder="自动计算" v-model="formItem.endDate"></DatePicker>
                        </FormItem>
                        <FormItem label="早餐"><InputNumber v-model="formItem.morning"></InputNumber></FormItem>
                        <FormItem label="午餐"><InputNumber v-model="formItem.lunch"></InputNumber></FormItem>
                        <FormItem label="晚餐"><InputNumber v-model="formItem.dinner"></InputNumber></FormItem>
                    </Form>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                datainfo: [],
                activated: false,
                formItem:{
                    id:0,
                    name: '',
                    startDate: '',
                    endDate: '',
                    morning: 0,
                    lunch: 0,
                    dinner: 0,
                }
            }
        },
        activated:function() {
            // 清空规划库
            this.$baby.schedule=[];
            this.$baby.products.forEach((element,index) => {
                // 查找选购的物品
                if(element.quantity !== 0){
                    // 检查是否在规划中存在
                    const chkProduct = this.$baby.schedule.find((v) =>{
                        v.id === element.id;
                    });
                    // 如果不存在，添加到规划数据中
                    if(!chkProduct){
                        const { id, name, ...rest} = this.formItem;
                        const sch =  Object.assign({id: element.id, name: element.name},rest);
                        this.$baby.schedule.push(sch);
                    }
                }
            });
            //按照购买数量排序
            this.$baby.products.sort(function(a,b){
                if (a.quantity < b.quantity) {
                    return 1;
                }
                if (a.quantity > b.quantity) {
                    return -1;
                }
                return 0;
            });
            // 只显示选购的产品          
            this.datainfo = this.$baby.products.filter((ele) =>ele.quantity>0);
        },
        watch:{// 录入时更新schedule库相对应产品
            formItem:function(form){
              const idx = this.$baby.schedule.findIndex((elv) =>{return elv.id === form.id});
              this.$baby.schedule[idx] = form;
            }
        },
        methods: {
            selThat:function(id) {
                // 将schedule库中数据写入form
                this.activated = true;
                const selProduct = this.$baby.schedule.find((p) => {
                    return p.id === id;
                });
                if(selProduct){
                    this.formItem = selProduct;
                }            
            }
        },
    }
</script>

<style scoped>
.schedule-con{
    margin:5px;
}
.product-list{
    border: 1px solid #0C3C26;
    box-shadow: 3px 5px 2px rgba(0,10,50,0.6);
    padding:3px;
}
.activate{
    border-color: #3cf68e;
    box-shadow: 5px 1px 5px rgba(100,2,200,0.4);
}
.sch-main{
    border-left:1px solid;
    padding-left: 5px;
}
</style>