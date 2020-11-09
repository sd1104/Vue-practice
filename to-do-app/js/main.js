new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function() {
      if(newItem == '') return;
      todo = {
        item = this.newItem,
        isDone = false
      }
    },
    deleteItem: function(index) {
      todos.splice(index, 1)
    }
  }
})