<template>
    <div>
        <h1>Product Page</h1>
        <listItems :products="shoes" />
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
        }
    },
    components:{
        ListItems
    }
}
</script>