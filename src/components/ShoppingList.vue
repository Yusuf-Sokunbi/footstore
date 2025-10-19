<template>
    <div>
        <div class="product-container"
        v-for="product in products" 
        :key="product.id">
            <img class="product-image"
            :src="product.imageName" alt="">
            <div class="details-wrap">
                <h2>{{ product.name }}</h2>
                <p>{{ product.price }} </p>
            </div>
            <button class="remove-button" @click="deleteItem(product.id)" >Remove from Cart</button>
        </div>
    </div>
</template>

<script>
import { cartItems } from '@/temp-data';
export default{
    name:'ShoppingCartList',
    props:['products'],
  
 methods:{
    deleteItem(id){
     const updateCart = cartItems.filter(cart => cart.id !== id)
     // mutate the imported array in-place instead of reassigning the module binding
     cartItems.splice(0, cartItems.length, ...updateCart)
    //  console.log('delete:', id)
    alert('Product was removed from cart successfully ')
    }
 }
}</script>