<template>
    <div>
        <PageHeader></PageHeader>
        <div class="context">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>        
        <PageFooter></PageFooter>
    </div>
</template>
<script>
import PageHeader from 'front/erp/erppage/component/page-header.vue';
import PageFooter from 'front/erp/erppage/component/page-footer.vue';

export default {
  name: 'app',
  data () {
    return{
    }
  },
  components: { PageHeader, PageFooter },
}
</script>
<style scoped>
    .footer-bar{
        background-color: #0C3C26;
        position: fixed;
        width: 100%;
        left: 0px;
        box-shadow: -10 0 5 rgba(100, 100, 200, 0.4);
        bottom: 0px;
        z-index: 1000;
    }
    .footer-row{
        margin: 8px;
    }
    .tips{
        font-size: 16px;
        text-align: center;
        color:antiquewhite; 
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0
    }
</style>