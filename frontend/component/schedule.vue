<template>
    <div>
        <Row>
            <Col span="8">
                <ul>
                    <li v-for="item of datainfo" :key="item.id" @click="selThat(item.id)"><Icon type="ios-star" color="green"></Icon>{{ [ item.name, item.quantity ].join(' ') }}</li>
                </ul>
            </Col>
            <Col span="14" offset="2">
                <div class="sch-main">
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="开始日期">
                                <DatePicker type="date" placeholder="选择日期" v-model="startDate"></DatePicker>
                        </FormItem>
                        <FormItem label="结束日期">
                                <DatePicker type="date" placeholder="自动计算" v-model="endDate"></DatePicker>
                        </FormItem>
                        <FormItem label="早餐"><InputNumber v-model="morning"></InputNumber></FormItem>
                        <FormItem label="午餐"><InputNumber v-model="lunch"></InputNumber></FormItem>
                        <FormItem label="晚餐"><InputNumber v-model="dinner"></InputNumber></FormItem>
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
                datainfo: [{id:1,name:'ee',quantity:3}],
                startDate: '2017-11-20',
                endDate: '2017-12-03',
                morning: 0,
                lunch: 0,
                dinner: 0,
            }
        },
        methods: {
            selThat:function(id) {
                console.log(id);
            }
        },
    }
</script>

<style scoped>

</style>