const todo = new Vue({
  el: '#app',
  data: {
    bpi = null,
    errro: false,
    loading: true
  },
  mounted() {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')

    .then(function(response){
      this.bpi = response.data.bpi
    })

    .catch(function(error){
      console.log('trough .then')
      console.log(error);
      this.error = true
    })

    .finally(function(){
      this.loading = false
    })
  }
})