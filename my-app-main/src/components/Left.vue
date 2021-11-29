<template>
  <div>

    
    <v-card flat> <Header/></v-card>
    <br>
    <v-layout row wrap class="row">
      <v-flex xs12 md12 > 
        <div class="heading" style="text-align: center;"> <span>
            Express Convert
          
        </span></div>
      </v-flex>
      <v-flex xs12 md12 class="textbox px-5 pt-6"> 
        <v-text-field
            v-model="state.lurl"
            label="Enter the URL"
            single-line
            outlined
            clearable
            append-outer-icon="mdi-send-circle-outline"
            @click:append-outer="getKurl"
          ></v-text-field>
      </v-flex>

      <v-flex xs12 md12 v-if="$vuetify.breakpoint.xs? false: true"> 
        <div class="heading mt-8" style="text-align: center;"><span>OR</span></div>
      </v-flex>
      <v-flex xs12 md12 v-if="$vuetify.breakpoint.xs? false: true" style="text-align: center;"> 
          Login with Gmail to get Personalised Dashboard
         
      </v-flex>
      <v-flex xs12 md12 v-if="$vuetify.breakpoint.xs? false: true" style="text-align: center;"> 
         
          <v-row
        align="center"
        justify="space-around" class="mt-3"
      >
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <div v-on="on">
        <v-btn disabled >
          <v-icon left>
            mdi-gmail
          </v-icon>
          Gmail
        </v-btn>
        </div>
        </template>
      <span>Under Construction . . .</span>
    </v-tooltip>
      </v-row>
      </v-flex>
      
    </v-layout>
    
   
    

  
    
    
        
  </div>
</template>

<script>

import Header from './Header';


export default {
  name: 'Left',
  components: {Header},
  props:{
    state:{}
  },
  data() {
    return {
    

    }
  },
   methods:{
     async getKurl() {
       this.state.isStats = false
       console.log(this.state)
          var res = await fetch('http://localhost:3000/getkurl', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state),
          })

            var data =  await res.json()
            this.state.kurl = data.kurl
            this.state.fullKurl = window.location.protocol+"//"+window.location.host+"/"+this.state.kurl
            this.state.isStats = true

           

            
        },
  
  
}}
</script>

<style>



.heading {
  display: flex;
  flex-direction: row;
}
.heading:before, .heading:after{
  
  color: #e6e6e6;
  content: "";
  flex: 1 1;
  border-bottom: 1px solid;
  margin: auto;
}
.heading:before {
  margin-right: 10px
}
.heading:after {
  margin-left: 10px
}


.textbox{
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: -11px 0;
  border-left: 1px #e6e6e6 solid;
  border-right: 1px #e6e6e6 solid;
  border-bottom: 1px #e6e6e6 solid;
}

</style>