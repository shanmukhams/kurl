<template>


    <v-layout row wrap >
      <v-flex xs12 md6> 
        <v-card flat class="left" > 
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
                  v-model="lurl"
                  label="Enter the URL"
                  single-line
                  outlined
                  clearable
                  append-outer-icon="mdi-send-circle-outline"
                ></v-text-field>
            </v-flex>
            <v-flex xs12 md12 > 
              <div class="heading mt-8" style="text-align: center;"><span>OR</span></div>
            </v-flex>
          </v-layout>
          
        
          <v-card flat > <Footer/></v-card>
        </v-card>

      </v-flex >
       <v-flex xs12 md6 class="bc">
        <v-card flat class ="right" > 
          <v-container class="rightin" >
      
            <v-card flat>
              
              <v-layout row wrap >
                <v-flex xs12>
                  <v-card flat >
                    <v-container>
                      <v-layout row wrap class="text" align="center">
                        <v-flex xs12 md8 >
                          <br/>
                          <h3 class="font-22 capitalize">Your KURL is . . .</h3>
                         
                          <v-card-title class="justify-center px-0 pb-0">
                            <v-text-field
                              v-model="state.kurl"
                              label="KURL"
                              outlined
                              readonly
                              prepend-icon="mdi-swap-horizontal-bold"
                            ></v-text-field>
                          </v-card-title>

                          <v-btn dark class="ml-8" ><v-icon dark left>mdi-content-copy</v-icon>Copy</v-btn>
                        
                        </v-flex>
                        
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
              
              </v-layout>
            </v-card>
          </v-container>

        </v-card>
      
      </v-flex>
    </v-layout>
      

</template>

<script>

// import Left from '../components/Left';
// import Right from '../components/Right';

import Header from '../components/Header';
import Footer from '../components/Footer';


export default {
  name: 'Home',
  components: {Header, Footer},
  props: {
    state: {},
  },
  data() {
    return {
      lurl:"https://www.youtube.com/watch?v=FbEW3xAmhKs&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=2"

    }
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
  margin-top:13%;
  margin-left: 3%; 
  /* margin-right: -50px;  */
  /* padding-right: 10% ; */
  background: #116466 !important 
}

.rightin {
 
  padding-top: 8%;
  margin-right: -10%;
  background-color: #116466 !important
}

.text {
  background: #116466 !important
}

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