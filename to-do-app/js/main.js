new Vue({
  el: '#app',
  data: {
    newItem: '',
  },
  methods: {
    addItem: function(){
      if(this.newItem === '') return;
      todo = {
        item: this.newItem,
        isDone: false
      }
    }
  }
})