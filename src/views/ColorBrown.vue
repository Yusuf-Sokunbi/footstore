<template>
    <div>
        <listItems :products="browns" :name="name"/>
        <!-- <button @click="color">color</button> -->
    </div>
</template>

<script>
import {browns} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'ColorBrowns',
    data(){
        return{
         browns,
         name:'Color Brown'
        }
    },
    components:{
        ListItems
    }, 
    // methods:{
    //     color(){
    //         console.log(this.blacks)
    //     }
    // }
}
</script>