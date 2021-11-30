<template>


    <div>
     Redirecting...

      
    </div>
      

</template>

<script>

import config from '../../vue.config';

export default {
  name: 'Redirect2Url',
  data() {
    return {
      lurl:"",
      kurl:""

    }
  },
  methods: {

    async fetchTasks(kurl) {
        // fetch the long url for coresponding short url for redirecting
        const res = await fetch(config.api+'getlurl?kurl='+kurl["kurl"], {
          method:'GET'
        })
        const data = await res.json()
        window.location.href = await data["lurl"]
   
    },
   
  },
      
    async created() {
        var kurl = this.$route.params
        console.log(kurl)
        if(kurl['kurl'] != 'undefined'){
           await this.fetchTasks(kurl)
        }
        else{
          console.log('errrror '+this.$route.params)
        }
    },
       
  
}
</script>

