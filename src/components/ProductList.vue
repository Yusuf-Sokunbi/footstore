<template>
    <div>
        <h1>list of {{ name }}</h1>
         <div class="grid-wrap">
        <div class="product-item"
           v-for="product in products" :key="product.id">
          <img :src="product.imageName" alt="">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">{{ product.price }}</p>
          <router-link 
            :to="'/products/' + product.id">
            <button>View details</button>
          </router-link>
       </div>
    </div>
    </div>
</template>

<script>
export default{
    name:'MainPage',
   props:['products']
}
</script>