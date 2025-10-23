<template>
    <div>
        <listItems :products="whites" :name="name"/>
        <button @click="color">color</button>
    </div>
</template>

<script>
import {whites} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'ColorWhite',
    data(){
        return{
         whites,
         name:'Color White'
        }
    },
    components:{
        ListItems
    }, 
   
}
</script>