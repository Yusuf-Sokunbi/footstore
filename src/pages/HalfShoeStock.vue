<template>
    <div>
        <h1>Product Page</h1>
        <listItems :products="halfshoes" :name="name"/>
    </div>
</template>

<script>
import {halfshoes} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'HalfShoePage',
    data(){
        return{
         halfshoes,
        }
    },
    components:{
        ListItems
    }
}
</script>