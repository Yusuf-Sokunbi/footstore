<template>
    <div class="bg-gray-200">
    <SelectionRoute />
    <h1 class="text-2xl text-black text-center">List of {{ name }}</h1> 
    <ProductList :products="newProducts" :name=name  /> 
    </div>
</template>

<script>
import { products } from '@/temp-data';
import ProductList from '@/components/ProductList.vue';
import SelectionRoute from '@/components/SelectionRoute.vue'
export default{
    name:'MainPage',
    props:['searchEntry'],
    data(){
        return{
            newProducts:products.filter(item => item._id <= 6 ),
            view:'For more ',
            name:'Products'
          
        }
    },
    components:{
        ProductList,
        SelectionRoute

    },

    methods:{
      
    }
  
}
</script>

<style>
.button-link{
    /* margin:auto */
    display: flex;
    justify-content: center;
}
.poster{
    background-color: rgb(238, 237, 235);
    padding: 10px 50px ;
    margin: 10px auto;
    border-radius: 8px;
}
</style>