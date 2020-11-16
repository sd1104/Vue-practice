new Vue({
  el: '#app',
  data: {
    bpi = null,
    error = false,
    loading = true,
  },
  mounted: function(){
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')

    .then(function(response) {
      this.bpi = response.data.bpi;
    }.bind(this))

    .catch(function(error) {
      console.log(error);
      this.error = true;
    }.bind(this))


  }
})