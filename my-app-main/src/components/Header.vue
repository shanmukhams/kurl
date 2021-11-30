<template>
  <div >

  
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 >
              <v-img class="mx-auto mt-5 mb-0" width="50" :aspect-ratio="5/6" src="/logo.jpg"/>
          </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-0" align="center">
          <v-flex xs12>
            <br/>
            <div class="h2p  primary--text" style="text-align: center;">Klein URL!</div>
            
          
          </v-flex>
          
        </v-layout>
      </v-container>
      
        
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {},
  props: {
      },
  data() {
    return {
      
    }
  },
   methods:{
    
  },
  async created() {
    
  },
  
}
</script>

<style>

.h2p{
    font-size: 1.2em;
    font-weight: bold;
}



</style>