<template>
  <div>

    
    <v-card flat> <Header/></v-card>
  
    <div cstyle="text-align: center;">
        Enter the URL
    </div>
   
    <v-card flat > <Footer/></v-card>

  
    
    
        
  </div>
</template>

<script>

import Header from './Header';
import Footer from './Footer';


export default {
  name: 'Home',
  components: {Header, Footer},
  props: {
      },
  data() {
    return {
      profileData:{}

    }
  },
   methods:{
    async fetchRegisters(){
      const res = await fetch('https://arcane-savannah-95240.herokuapp.com/profile')
      var data = await res.json() 
      console.log(this.$router)
      return data
    }
  },
  async created() {
    this.profileData = await this.fetchRegisters()
   
  },
  
}
</script>

<style>




</style>