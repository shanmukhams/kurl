<template>
  <v-app >

      <v-container fluid style="margin:0px; padding:0px; width:100%; min-height: 100vh" >
        <v-content >
          <router-view v-bind:state="state"> 
          </router-view>
        </v-content>
      </v-container>
    
  </v-app>
</template>


<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      state:{
        kurl:"http://localhost:8080/",
        lurl:"https://www.youtube.com/watch?v=FbEW3xAmhKs&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=2"
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
