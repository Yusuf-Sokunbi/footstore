<template>
    <div>
        <listItems :products="others" :name="name"/>
        <button @click="color">color</button>
    </div>
</template>

<script>
import {others} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'OtherColor',
    data(){
        return{
         others,
         name:'Randam Color'
        }
    },
    components:{
        ListItems
    }, 
    methods:{
        color(){
            console.log(this.others)
        }
    }
  
}
</script>