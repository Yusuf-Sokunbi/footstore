<template>
    <div class="cover">
        <h1>FootShop</h1>
        <img :src="image" alt="">
        
    </div>
</template>

<script>
import footshop from '../FOOTIMAGE/footshop.jpg'
export default{
    name:'MainPage',
    data(){
        return{
            image:footshop
        }
    }
}
</script>