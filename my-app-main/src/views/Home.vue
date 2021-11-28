<template>


    <v-layout row wrap >
      <v-flex xs12 md6> 
        <v-card flat class="left" > 
          <Left :state="state"/>
        </v-card>

      </v-flex >
       <v-flex xs12 md6 class="bc">
        <v-card flat class ="right" > 
          <Right :state="state"/>

        </v-card>
      
      </v-flex>
    </v-layout>
      

</template>

<script>

import Left from '../components/Left';
import Right from '../components/Right';



export default {
  name: 'Home',
  components: {Left, Right},
  props: {
    state: {},
  },
  data() {
    return {
      

    }
  },
  methods: {
        
        
      },


       

  
}
</script>

<style>

.bc {
  /* margin-left:1% ; */
  /* margin-left: 1%; */
  min-height: 100vh;
  background: #116466 !important
}

.left {
  margin-top:5%;
  margin-left: 25%;
  padding-right: 5%;
  margin-right:5%;
}

.right{
  margin-top:2%;
  margin-left: 3%; 
  /* margin-right: -50px;  */
  /* padding-right: 10% ; */
  background: #116466 !important 
}




</style>