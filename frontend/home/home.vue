<template>
    <div>
        <Pageheader></Pageheader>
        <Customer></Customer>
        <Pagefooter></Pagefooter>
    </div>
</template>
<script>
import Customer from '../component/customer.vue';
import Pagefooter from '../component/pagefooter.vue';
import Pageheader from '../component/pageheader.vue';

export default {
  name: 'app',
  data () {
    return{
        userId: 'test1',
        message: 'hello jing!'
    }
  },
  components: { Pageheader, Customer, Pagefooter },
}
</script>