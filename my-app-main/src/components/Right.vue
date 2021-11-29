<template>
  <div >

    <v-container :class="$vuetify.breakpoint.xs ? 'rightxs':'right'" >
      
      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12 sm12>
            <v-card flat >
              <v-container>
                <v-layout row wrap class="text" align="center">
                  <v-flex xs12 sm10 md8 >
                    <br/>
                    <h3 class="font-22 capitalize">Your KURL is . . .</h3>
                   
                    <v-card-title class="justify-center px-0 pb-0">
                      <v-text-field
                        v-model="state.fullKurl"
                        label="KURL"
                        outlined
                        dark
                        readonly
                        prepend-icon="mdi-swap-horizontal-bold"
                        ref="textToCopy"
                      ></v-text-field>
                    </v-card-title>

                    <v-btn dark :class="$vuetify.breakpoint.xs ? 'ml-1':'ml-8'" @click="copyText"><v-icon dark left>mdi-content-copy</v-icon>Copy</v-btn>

                    <v-btn dark :class="$vuetify.breakpoint.xs ? 'ml-8':'ml-8'" @click="newTab"><v-icon dark left>mdi-newspaper-variant-multiple</v-icon>Open in New tab</v-btn>
                  
                  </v-flex>
                  
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
         
        </v-layout>
        <v-layout row wrap :class="$vuetify.breakpoint.xs ? 'statsxs':'stats'" v-if="state.isStats">
          
        <v-flex xs6 md6 >
          <v-card flat :class="$vuetify.breakpoint.xs ? 'statsountxs':'statsount'">
          <DBCount :stat="stats.kurl" :state="state"/>
          </v-card>
        </v-flex>
        <v-flex xs6 md6 >
          <v-card flat :class="$vuetify.breakpoint.xs ? 'statsountxs':'statsount'">
          <DBCount :stat="stats.lurl" :state="state"/>
          </v-card>
        </v-flex>
       
      </v-layout>
      <v-layout row wrap :class="$vuetify.breakpoint.xs ? 'statsxs':'stats'" v-if="state.isStats">
          
        <v-flex xs12 md12 >
          <v-card flat :class="$vuetify.breakpoint.xs ? 'ml-0':'ml-5'">
          <TimeGraph :state="state"/>
          </v-card>
        </v-flex>
        
       
      </v-layout>

      </v-card>

      

    </v-container>

     
    
        
  </div>
</template>

<script>
import DBCount from './DBCount.vue'
import TimeGraph from './TimeGraph.vue'

export default {
  name: 'Right',
  components: {DBCount, TimeGraph},
  props: {
    state: { },
  },
  data() {
    return {
      stats:{
        kurl:{
          icon:"mdi-cloud-search",
          name:"Total Kurl Hits",
          api:"http://localhost:3000/getstats/kurl/",
          count:""
        },
        lurl:{
          icon:"mdi-archive-refresh-outline",
          name:"Total Lurl Hits",
          api:"http://localhost:3000/getstats/lurl/",
          count:""
        }

    }
    }
  },
  methods:{
    
        copyText () {
          let textToCopy = this.$refs.textToCopy.$el.querySelector('input')
          textToCopy.select()
          document.execCommand("copy");
        },

        newTab () {
          let route = this.$router.resolve({ path: "/"+this.state.kurl });
          window.open(route.href);
        },

        
  }
  
}
</script>

<style>

.right {
  padding-top: 60px;
  margin-right: -10%;
  background-color: #116466 !important;
   /* min-height: 100vh */
}

.rightxs {
  background-color: #116466 !important;
  padding-right:20px
   /* min-height: 100vh */
}

.text {
  background: #116466 !important
}

.stats {
  padding-top: 8%;
  padding-right:35%;
  align-items: center;
  background: #116466 !important
}

.statsxs {
  padding-top: 8%;
  align-items: center;
  background: #116466 !important
}

.statsount{
  background: #116466 !important;
  /* padding-right:30%; */
  padding-left:10%;
}

.statsountsx{
  
  background: #116466 !important;
  
  /* padding-right:30%; */
}


</style>