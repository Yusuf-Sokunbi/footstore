<template>
    <div class="mx-auto md:text-start md:w-[70%] w-[50] ">
       <div v-if="cartItems.length > 0" class="flex justify-around">
        <div>
        <h1 class="text-3xl font-bold">Shopping Cart</h1>
        <ShoppingCartList :products="cartItems" />
        
       </div>
      
       </div>
       
       <div v-if="cartItems.length === 0" class="font-bold text-center my-24">
       <h3> You current have no items in your cart</h3>
       </div>
    </div>
</template>

<script>
import ShoppingCartList from '../components/ShoppingList.vue';
import { cartItems } from '@/temp-data';
export default{
    name:"ShoppinCartPage",
    components:{
        ShoppingCartList
    },
    data(){
        return{
            cartItems,
        }
    },
}
</script> 