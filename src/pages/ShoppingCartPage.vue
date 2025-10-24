<template>
    <div class="mx-auto text-start w-[60%]">
        <h1 class="text-3xl font-bold">Shopping Cart</h1>
       <div v-if="cartItems.length > 0">
        <ShoppingCartList :products="cartItems" />
        <button class="text-white bg-black w-[100%] py-3 mt-2 font-bold">Proceed to Checkout</button>
       </div>
       <div v-if="cartItems.length === 0">
        You current have no items in your cart
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