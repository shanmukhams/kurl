<template>
  <div >

    <v-container class="right" >
      
      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat >
              <v-container>
                <v-layout row wrap class="text" align="center">
                  <v-flex xs12 md8 >
                    <br/>
                    <h3 class="font-22 capitalize">Your KURL is . . .</h3>
                    {{this.state}}
                    <v-card-title class="justify-center px-0 pb-0">
                      <v-text-field
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

     
    
        
  </div>
</template>

<script>

export default {
  name: 'Right',
  components: {},
  props: {
    state: { },
  },
  data() {
    return {
     

    }
  }
  
}
</script>

<style>

.right {
 
  padding-top: 8%;
  margin-right: -10%;
  background-color: #116466 !important
}

.text {
  background: #116466 !important
}


</style>