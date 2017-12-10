<template>
    <div class="container">
        <div class="head">
            <h3>{{username}}统计信息</h3>
        </div>
        <Carousel
            v-model="carousel"
            :autoplay="setting.autoplay"
            :autoplay-speed="setting.autoplaySpeed"
            :dots="setting.dots"
            :radius-dot="setting.radiusDot"
            :trigger="setting.trigger"
            :arrow="setting.arrow" class="carousel">
            <CarouselItem>
                <div class="carousel-item">
                    <p class="title">总计用户数量</p>
                    <p class="number-desc">{{datainfo.customerCnt}}</p>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="carousel-item">
                    <p class="title">总计订单数量</p>
                    <p class="number-desc">{{datainfo.orderCnt}}</p>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="carousel-item">
                    <p class="title">总计产品数量</p>
                    <p class="number-desc">{{datainfo.productCnt}}</p>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="carousel-item">
                    <p class="title">总计金额</p>
                    <p class="number-desc">市场价:{{datainfo.orderSum}}</p>
                    <p class="number-desc">VIP价:{{datainfo.orderVipSum}}</p>
                </div>
            </CarouselItem>        
        </Carousel>      
        <Card >
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                本月数据
            </p>
            <a href="#" slot="extra" @click.prevent="statistic">
                <Icon type="ios-loop-strong"></Icon>
                统计
            </a>
            <ul v-show="monthInfo">
                <li class="text-info">
                    <span>
                        <Icon type="ios-star"></Icon>新增用户数:
                    </span>
                    <a href="#" target="_blank" @click.prevent="customerInfo">{{ month.customerCnt }}</a>
                    <ul v-show="newCustomer">
                        <li class="customer-list" v-for="c of monthCustomers" :key="c.id">{{Object.values(c).join(' ')}}</li>
                    </ul>
                </li>
                <li class="text-info">
                    <span>
                        <Icon type="ios-star"></Icon>新增订单数:
                    </span>
                    <a href="#" target="_blank" @click.prevent="orderInfo">{{ month.orderCnt }}</a>
                    <ul v-show="newOrder">
                        <li class="order-list" v-for="c of monthOrders" :key="c.id">{{[c].join(' ')}}</li>
                    </ul>
                </li>
                <li class="text-info">
                    <span>
                        <Icon type="ios-star"></Icon>新增订单金额:
                    </span>
                    <a href="#" target="_blank" @click.prevent="showModal">市价:{{ month.orderSum }},会员价:{{month.orderVipSum}}</a>
                </li>
            </ul>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carousel: 0,
                username:_username,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover'
                },
                modal: false,
                newCustomer:false,
                newOrder:false,
                newInfo:false,
                datainfo:{},
                month:{},
                monthCustomers:[],
                monthOrders:[],
                monthInfo:false,
            }
        },
        methods:{
            statistic:function(){
               this.axios.get('/orders/monthStatistic')
                .then((response) => {
                    this.month = response.data;
                    this.monthInfo = true;
                }).catch((error) => {
                    this.$Message.error('统计信息失败.');
                });    
            },
            customerInfo:function(){
                this.axios.get('/customer/month')
                .then((response) => {
                    this.monthCustomers = response.data;
                    this.newCustomer = true;
                    this.newOrder=false;
                    this.newInfo=false;
                }).catch((error) => {
                    this.$Message.error('统计信息失败.');
                }); 
            },
            orderInfo:function() {
                this.axios.get('/orders/month')
                .then((response) => {
                    this.monthOrders = response.data;
                    this.newCustomer = false;
                    this.newOrder=true;
                    this.newInfo=false;
                }).catch((error) => {
                    this.$Message.error('统计信息失败.');
                }); 
            },
            showModal:function() {
                this.modal = true;
            }
        },
        mounted: function initData() {
            this.axios.get('/orders/historyStatistic')
            .then((response) => {
                this.datainfo = response.data;
                console.log(this.datainfo);
            }).catch((error) => {
                this.$Message.error('统计信息失败.');
            });   
        }
    }
</script>

<style scoped>
.container{
    margin-bottom:65px;
}
.head{
    margin-top:5px;
    margin-bottom: 5px;
    margin-left:15px;
    padding: 10px;
    border-bottom-left-radius: 15px;
    border: 1px solid;
}
.carousel-item{
    color:white;
    text-align: center;
}
.carousel{
    background-color:#023C26;
    min-height: 200px;
}
.title{
    font-style: bold;
    margin-top: 30px;
    font-size: 18px;
}
.text-info{
    font-size:16px;
    padding:10px;
    background-color: #f1e4cf;
}
.number-desc{
    font-stretch: 11;
    margin-top:20px;
    font-size: 30px;
}
</style>