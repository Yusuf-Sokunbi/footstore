<template>
    <div>
        <!-- <h1>Product Page</h1> -->
        <listItems :products="products" :name="name" />
    </div>
</template>

<script>
import {products} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'ProductPage',
    data(){
        return{
         products,
         name:'all Products'
        }
    },
    components:{
        ListItems
    }
}
</script>