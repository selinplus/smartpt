<template>
    <div>
        <Header></Header>
        <Product></Product>
        <Footer></Footer>
    </div>
</template>
<script>
import Product from '../component/product.vue';
import PageFooter from '../component/footer.vue';
import PageHeader from '../component/header.vue';

export default {
  name: 'app',
  data () {
    return{
        user_id: 'test1',
        message: 'hello jing!'
    }
  },
  components: { PageHeader, Product, PageFooter },
}
</script>