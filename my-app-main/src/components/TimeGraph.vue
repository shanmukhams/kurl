<template>
  <div >
  <v-card class="graph">
    <v-card-text>
      <div class="text-h5" style="text-align: center;">
        {{name}}
      </div>
    </v-card-text>
      <v-sparkline
        :value="state.ts.y"
        :labels="state.ts.x"
        :color="color"
        line-width="2"
        padding="16"

      ></v-sparkline>
    </v-card>

  </div>
</template>

<script>

import config from '../../config';

export default {
  name: 'TimeGraph',
  components: {},
  props: {
    state:{}
  },
  data() {
    return {
       name:"Kurl Trend",
       color:"white"
    }
  },
  methods:{
    async getstats( kurl){
        var res = await fetch(config.api+"getstats/kurl/ts/"+kurl)
        var data = await res.json()
        this.state.ts["agg"] = data["agg"]
        this.state.ts["x"] = this.state.ts["agg"].map(x=>x.date)
        
        this.state.ts["y"] = this.state.ts["agg"].map(x=>parseInt(x.count))
        
        console.log(this.state.ts)
    }
     
        
  },

    async created() {
    
        await this.getstats(this.state.kurl)
    
    },
  
}
</script>

<style>

.graph {
  background-color: #116466 !important
}

.count2 {
  padding-top: 0% !important
}

.text {
  background: #116466 !important
}


</style>