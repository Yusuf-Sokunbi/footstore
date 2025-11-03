<template>
  <footer class="bg-gray-900 text-white py-10 mt-20">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <!-- Navigation -->
      <div>
        <h3 class="text-lg font-semibold  absolute top-[800px]"></h3>
        <ul class="space-y-2">
          <li><a href="/" class="hover:underline">Home</a></li>
          <li><a href="/products" class="hover:underline">All Products</a></li>
          <li><a href="/Sandal" class="hover:underline">Sandals</a></li>
          <li><a href="/shoe" class="hover:underline">Shoes</a></li>
          <li><a href="/halfshoe" class="hover:underline">HalfShoes</a></li>
          <li><a href="/palm" class="hover:underline">Palms</a></li>
        </ul>
      </div>

      <!-- Customer Support -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Support</h3>
        <ul class="space-y-2">
          <li><a href="/help" class="hover:underline">Help Center</a></li>
          <li><a href="/returns" class="hover:underline">Returns & Refunds</a></li>
          <li><a href="/shipping" class="hover:underline">Shipping Info</a></li>
          <li><a href="/contact" class="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      <!-- Company Info -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Company</h3>
        <ul class="space-y-2">
          <li><a href="/about" class="hover:underline">About Us</a></li>
          <li><a href="/careers" class="hover:underline">Careers</a></li>
          <li><a href="/privacy" class="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" class="hover:underline">Terms of Service</a></li>
        </ul>
      </div>

      <!-- Social & Newsletter -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Stay Connected</h3>
        <div class="flex space-x-4 mb-4">
          <a href="https://facebook.com"  target="_blank" class="hover:text-blue-400">Facebook</a>
          <a href="https://instagram.com" target="_blank" class="hover:text-pink-400">Instagram</a>
          <a href="https://twitter.com"   target="_blank"  class="hover:text-blue-300">Twitter</a>
        </div>
        <form @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            placeholder="Your email"
            class="w-full px-3 py-2 rounded text-black"
          />
          <button type="submit" class="mt-2 w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div class="mt-10 text-center text-sm text-gray-400">
      &copy; {{ new Date().getFullYear() }} YourStore. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    subscribe() {
      // Handle newsletter subscription logic here
      alert(`Subscribed with ${this.email}`);
      this.email = '';
    }
  }
};
</script>
