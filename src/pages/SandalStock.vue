<template>
    <div>
        <h1>Product Page</h1>
        <listItems :products="sandals" />
    </div>
</template>

<script>
import {sandals} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'SandalStock',
    data(){
        return{
         sandals,
        }
    },
    components:{
        ListItems
    }
}
</script>