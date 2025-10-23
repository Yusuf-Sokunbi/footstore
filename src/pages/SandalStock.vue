<template>
    <div>
        <listItems :products="sandals" :name="name" />
    </div>
</template>

<script>
import {sandals} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'SandalStocks',
    data(){
        return{
         sandals,
         name:'Sandals'
        }
    },
    components:{
        ListItems
    },
   

}
</script>