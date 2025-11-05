<template>
 <div> 
      <p>Cart:{{ cart }}</p>
     <div v-if="product" class="w-[60%] my-4 mx-auto text-center">
       <div class="">
        <h1 class="font-bold text-xl md:text-2xl ">Product Details</h1>
        <img :src="product.imageName" class="w-[60%] md:h-[400px] mx-auto" />
      </div>
      <div >
        <div class="flex justify-between font-bold text-xl my-4 md:mb-2">
           <h1>{{ product.name }} - {{ product.color }}</h1>
           <h3 >{{ product.size }}</h3>
           <!-- <ul class="flex gap-3 ">
          <li v-for="(color, index) in colors" :key="index" class="text-sm bg-red-5 hover:bg-red-800 py-2">{{ color }}</li></ul> -->
          <h3 class="price">{{ formatCurrency(product.price) }}</h3>
        </div>
         <div>
          <span v-for="color in product.colors" :key="color.id" @mouseover="updateImage(color.image,color.title,color.price, color.name,)" >
            {{ color.name }}
          </span>
         </div>
          <div>
          <span v-for="s in product.sizes" :key="s.id" @mouseover="updateSize(s.price, s.size)" >
            {{ s.size }}
          </span>
         </div>
        <hr class="border-t-[0.5px] border-gray-400 my-3 md:my-8 w-full "/>
        <button class="bg-black py-3 w-[100%] text-white rounded-lg" @click="addToCart">Add to cart</button>
      </div>
     </div>
     <div v-if="!product">
        <h2>product not found</h2>
      <!-- <NotFoundPage /> -->
     </div>
     <!-- <div>
      <select name="" id="" v-model="color">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
       <p>{{ color }}</p>
     </div> -->
  </div>
  
</template>

<script>
import {products,cartItems } from '../temp-data'

export default{
    name:'ProductDetailPage',
    data(){
        return{
            product : products.find(product => product.id === (this.$route.params.productId)),
          //  size:38,
            cart:0,
            // pickColor:''
        }
    },
    methods:{
      addToCart(){
        const existingItem = cartItems.find(cart => cart.size === this.product.size && cart.imageName === this.product.imageName)
        if(existingItem){
          // existingItem.quantity++
          alert('is on the cart')
        }else {
          cartItems.push({ ...this.product, quantity:1,  })
          // this.cart +=1
          // console.log(this.product, this.quantity)
          alert('Product added successfully')
          
        }
        
      },
      formatCurrency(value) {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(value);
    },
    updateImage(image, title, price, name, ){
      this.product.imageName = image
      // this.product.name =  title
      this.product.price = price
      this.product.color = name
      // this.size = size
    },
    updateSize(price,size){
      this.product.price = price
      this.product.size = size

      // this.size = size
    }
    // handelSelectedColor(){
    //   if(this.selectedColor){
    //             this.$router.push(this.selectedColor)
    //         }
    // }
   },
    computed: {
      existingItem() {
      return cartItems.find(cart => cart.id === this.product.id)
  }
}

}
</script>