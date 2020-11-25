new Vue({
  el: '#app',
  data: {
    bpi: null,
    error: false,
    loading: true
  },
  mounted() {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')

    .then(function(response) {
      this.bpi = response.data.bpi
    }.bind(this))

    .catch(function(error) {
      this.error = true;
      console.log(error);
    }.bind(this))

    .finally(function() {
      this.loading = false;
    }.bind(this))
  },
  filters: {
    fix(value) {
      return value.toFixed(2);
    }
  }
})