import Axios from 'axios'

new Vue({
  el: '#app',
  data: {
    bpi: null,
    haserror: false,
    loading: true
  },
  mounted: function() {
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')

    .then(function(response) {
      this.bpi = response.data.bpi
    }.bind(this))
  }
})