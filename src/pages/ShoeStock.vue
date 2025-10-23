<template>
    <div>
        <h1>Product Page</h1>
        <listItems :products="shoes" :name="name" />
    </div>
</template>

<script>
import {shoes} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'ShoeStocks',
      data(){
        return{
         shoes,
         name:'Shoes'
        }
    },
    components:{
        ListItems
    }
}
</script>