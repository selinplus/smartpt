<template>
    <div class="schedule-con">
        <Row>
            <Col span="8">
                <ul>
                    <li class="product-list"  v-for="item of datainfo" :key="item.id" @click="selThat(item.id, $event)">{{  item.name }}</li>
                </ul>
            </Col>
            <Col span="15" offset="1">
                <div class="sch-main" :class="{show}">
                    <Form :model="formItem" >
                        <div>
                            <h3>{{formItem.name}}</h3>
                            <p>数量:{{formItem.quantity}}共{{formItem.quantity*formItem.size}}粒</p>
                        </div>
                        <span stype="display:none;">{{formItem.Id}}</span>
                        <FormItem label="开始日期">
                                <DatePicker format="yyyy年MM月dd日" type="date" :editable="false" placeholder="选择日期" v-model="formItem.startDate"></DatePicker>
                        </FormItem>
                        <FormItem label="结束日期">
                                <DatePicker format="yyyy年MM月dd日" type="date" :readonly="true" class="endDateform" placeholder="自动计算" v-model="formItem.endDate"></DatePicker>
                        </FormItem>
                        <FormItem label="早餐"><InputNumber v-model="formItem.morning" :min="0"></InputNumber></FormItem>
                        <FormItem label="午餐"><InputNumber v-model="formItem.lunch" :min="0"></InputNumber></FormItem>
                        <FormItem label="晚餐"><InputNumber v-model="formItem.dinner" :min="0"></InputNumber></FormItem>
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
                show: true,
                formItem:{
                    id:0,
                    name: '',
                    size: 0,
                    quantity: 0,
                    startDate: '',
                    endDate: '',
                    morning: 0,
                    lunch: 0,
                    dinner: 0,
                }
            }
        },
        mounted:function() {
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
                        const { id, name, size, quantity, ...rest} = this.formItem;
                        const sch =  Object.assign({id: element.id, name: element.name, size:element.size, quantity:element.quantity},rest);
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
            formItem:{
                handler:function(form){
                    if(form.startDate){// 已选择开始日期
                        const {size,quantity,morning,lunch,dinner} = form;
                        if(morning+lunch+dinner>0){                     
                            const duration = Math.ceil(parseFloat(size*quantity/(morning+lunch+dinner)).toFixed(2))-1;
                            const init = new Date(form.startDate);
                            const startMili = Date.parse(form.startDate);
                            const endMili =startMili + duration*1000*60*60*24;
                            const end = new Date(endMili);                            
                            const strmonth = end.getMonth()<9 ? '0'+(end.getMonth()+1):end.getMonth()+1;
                            const strdate = end.getDate()<10 ? '0'+end.getDate():end.getDate();
                            this.formItem.endDate = [end.getFullYear(), strmonth, strdate].join('-');
                        }                  
                    }
                    const idx = this.$baby.schedule.findIndex((elv) =>{return elv.id === form.id});
                    this.$baby.schedule[idx] = form;
                    },
                deep:true
            }
        },
        methods: {
            selThat:function(id,event) {
                // 将schedule库中数据写入form
                this.show = false;
                event.target.style.background='#333333';
                event.target.style.color='#ffffff';
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
.show{
    display:none;
}
.product-list{
    border-bottom: 1px solid #0C3C26;
    margin-bottom: 7px;
    margin-left: 5px;
    box-shadow: 3px 5px 2px rgba(0,10,50,0.6);
    padding:3px;
}
.sch-main{
    border-left:1px solid;
    padding-left: 5px;
}
.endDateform{
    background-color: #888;
    color:#0C3C26;
}
</style>