<template>
    <div>
        <h1>Product Page</h1>
        <listItems :products="palms" />
    </div>
</template>

<script>
import {palms} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'PamlStocks',
    data(){
        return{
         palms,
        }
    },
    components:{
        ListItems
    }
}
</script>