new Vue ({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  method: {
    addItem: function() {
      if(newItem === '') return;
      let todo = {
        item: this.newItem,
        isDone: false
      }
      todos.push(todo)
    },
    deleteItem(index) {
      this.todos.splice(index, 1)
    }
  }
})