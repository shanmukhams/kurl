<template>
  <div >
 
  <v-card  class="count">
    <v-list-item >
      <v-list-item-content>
        <v-list-item-title :class="$vuetify.breakpoint.xs ? 'text-h8':'text-h6'"  style="text-align: center;">
          {{this.stat.name}}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-text class="count2">
      <v-row align="center">
        <v-col
          :class="$vuetify.breakpoint.xs ? 'text-h6':'text-h2'" 
          style="text-align: center;"
        >
          {{this.stat.count}}
         <v-icon :class="$vuetify.breakpoint.xs ? 'small':'x-large'" >{{this.stat.icon}}</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>   
  </div>
</template>

<script>

export default {
  name: 'DBCount',
  components: {},
  props: {
    stat: { },
    state:{}
  },
  data() {
    return {
     

    }
  },
  methods:{
    async getstats(api, kurl){

        console.log(api+kurl)
        var res = await fetch(api+kurl)
          var data = await res.json()
        this.stat.count = data["count"]
    }
     
        
  },
    async created() {
    
        await this.getstats(this.stat.api, this.state.kurl)
    
    },
  
}
</script>

<style>

.count {
  background-color: #116466 !important
}

.count2 {
  padding-top: 0% !important
}

.text {
  background: #116466 !important
}


</style>