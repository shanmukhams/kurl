<template>

    <!-- Entire page is divided into two halfs. 
    Left half is where you enter the Long Url and 
    right half is where once can see kurl and stats -->
    
    <v-layout row wrap style="margin:0px; padding:0px; " >
      <v-flex xs12 md6> 
        <v-card flat :class="$vuetify.breakpoint.xs ? 'leftxs':'left'" > 
          <Left :state="state"/>
        </v-card>

      </v-flex >
       <v-flex xs12 md6 :class="$vuetify.breakpoint.xs ? 'bcxs':'bc'">
        <v-card flat :class="$vuetify.breakpoint.xs ? 'rightxs':'right'"> 
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
  min-height: 100vh;
  background: #116466 !important
}

.bcxs {
  min-height: 70vh;
  background: #116466 !important
}

.left {
  margin-top:5%;
  margin-left: 25%;
  padding-right: 5%;
  margin-right:5%;
}

.leftxs {
  margin-top:2%;
  margin-left: 10%;
  margin-right:10%;
  margin-bottom:10%;
}

.right{
  margin-top:2%;
  margin-left: 3%; 
  /* margin-right: -50px;  */
  /* padding-right: 10% ; */
  background: #116466 !important 
}

.rightxs{
  
  margin-left: 3%; 
  /* margin-right: -50px;  */
  /* padding-right: 10% ; */
  background: #116466 !important 
}




</style>