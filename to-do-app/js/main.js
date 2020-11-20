new Vue({
  el: '#app',
  data: {
    newData: '',
    todos: []
  },
  methods: {
    addItem: function() {
      if(this.newItem === '') return;
      todo = {
        item: this.newItem,
        isDone: false
      }
    }
  }
})