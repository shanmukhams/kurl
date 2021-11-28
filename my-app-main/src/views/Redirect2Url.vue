<template>


    <div>
     hi

      
    </div>
      

</template>

<script>

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
        
        const res = await fetch('http://localhost:3000/getlurl?kurl='+kurl["kurl"], {
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
          console.log('hi...')
           await this.fetchTasks(kurl)
        }
        else{
          console.log('errrror')
          // window.location.href = "http://localhost:8081/app";
        }
        
        // window.location.replace()
    },
       
  
}
</script>

