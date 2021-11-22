<template>
  <div>

    <v-layout row wrap class="home1">
      <v-flex xs12 md6> 
        <v-card outline> <Left/></v-card>

      </v-flex>
       <v-flex xs12 md6>
        <v-card outline> <Right/></v-card>
      
      </v-flex>
    </v-layout>
        
  </div>
</template>

<script>

import Left from '../components/Left';
import Right from '../components/Right';


export default {
  name: 'Home',
  components: {Left, Right},
  props: {
      },
  data() {
    return {
      profileData:{}

    }
  },
   methods:{
    
  },
  async created() {
    
  },
  
}
</script>

<style>

.home1 {
  margin-left:10%;
  margin-right:10%
}



</style>