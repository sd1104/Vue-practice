new Vue({
  el: '#app',
  data: {
    bpi: null,
    haserror: false,
    loading: true,
  },
  mounted: function() {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')

    .then(function(response) {
      this.bpi = response.data.bpi
    }.bind(this))

    .catch(function(error) {
      console.log(error);
      this.haserror = true
    }.bind(this))

    .finally(function(){
      this.loading  = false
    }.bind(this))
  }
})