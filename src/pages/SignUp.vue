<template>
<div class=" ">
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm" class="flex justify-center">
      <div class="flex justify-center">
        <div>
        <input type="text" v-model="form.firstName" placeholder=" firstname" required  />
        <br>
        <label for="firstname">First Name</label>
      </div>
       <div>
        <input type="text" placeholder=" lastname" v-model="form.lastName" required />
        <br>
        <label for="name">Last Name</label>
      </div>
      </div>
       <div class="flex">
        <div>
        <input type="email" placeholder=" Email" v-model="form.email" required />
        <br>
        <label for="email">Email</label>
      </div>
       <div>
        <input type="number" placeholder=" phone number" v-model="form.number" required />
        <br>
        <label for="number">Number</label>
      </div>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="form.password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>
<script>
export default{
    name:"LogIn",
      data() {
    return {
      form: {
        firstName: '',
        lastName:'',
        number:'',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      // You can replace this with an API call
      console.log('Form submitted:', this.form);
      alert('Signup successful!');
    }
  }

}</script>