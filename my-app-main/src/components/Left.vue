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
      <v-flex xs12 md12 > 
        <div class="heading mt-8" style="text-align: center;"><span>OR</span></div>
      </v-flex>
    </v-layout>
    
   
    <v-card flat > <Footer/></v-card>

  
    
    
        
  </div>
</template>

<script>

import Header from './Header';
import Footer from './Footer';


export default {
  name: 'Left',
  components: {Header, Footer},
  props:{
    state:{}
  },
  data() {
    return {
    

    }
  },
   methods:{
     async getKurl() {
       console.log(this.state)
          const res = await fetch('http://localhost:3000/getkurl', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state),
          })

            const data =  await res.json()
            this.state.kurl = data.kurl
            console.log(data)
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