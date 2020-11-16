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






  }
})