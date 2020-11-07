const todo = new Vue({
  el: '#app',
  data: {
    bpi: null,
    error: false,
    loading: true
  },
  mounted() {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')

    .then(function(response){
      console.log('through .then');
      this.bpi = response.data.bpi;
      console.log(this.bpi);
    }.bind(this))

    .catch(function(error){
      console.log('trough .catch');
      console.log(error);
      this.error = true;
    }.bind(this))

    .finally(function(){
      console.log('finally')
      this.loading = false;
    }.bind(this))
  }
})