<template>
  <v-app >


      <v-container fluid :style="$vuetify.breakpoint.xs ? 'margin:0px; padding:0px; width:100%; ':'margin:0px; padding:0px; width:100%; min-height: 100vh'"  >
        <v-main >

          <!-- Routing and state prop is passed down -->
          <router-view v-bind:state="state"> 
          </router-view>
        </v-main>
      </v-container>
    
  </v-app>
</template>


<script>

// State is single source of truth for the entire application, except for daskboard count

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      state:{
        kurl:"",
        fullKurl:"",
        lurl:"",
        isStats:false,
        ts:{
          agg:'',
          x:[],
          y:[]
        }
      }
    }
  },
     
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');


  #app {
    font-family: 'Quicksand', sans-serif;
    
  }






</style>
