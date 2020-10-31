import Axios from 'axios'

new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function() {
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')

    .then(function(response) {
      this.bpi = response.data.bpi
    }.bind(this))

    .catch(function(error) {
      console.log(error)
      this.hasError = true
    }.bind(this))

    .finally(function() {
      this.loading = false
    }.bind(this))
  },
  fileters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  }
})