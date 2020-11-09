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
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function(index) {
      todos.splice(index, 1)
    }
  }
})