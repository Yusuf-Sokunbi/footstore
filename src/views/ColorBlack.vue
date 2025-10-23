<template>
    <div>
        <h1>Product Page</h1>
        <listItems :products="blacks" :name="name"/>
        <button @click="color">color</button>
    </div>
</template>

<script>
import {blacks} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'ColorBlack',
    data(){
        return{
         blacks,
         name:'Color Black'
        }
    },
    components:{
        ListItems
    }, 
    methods:{
        color(){
            console.log(this.blacks)
        }
    }
}
</script>