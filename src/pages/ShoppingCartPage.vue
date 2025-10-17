<template>
    <div>
        <h1>Shopping Cart</h1>
       <div v-if="cartItems.length > 0">
        <ShoppingCartList :products="cartItems" />
        <button class="checkout-button">Proceed to Checkout</button>
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