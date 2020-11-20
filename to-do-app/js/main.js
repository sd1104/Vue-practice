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
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1);
    }
  }
})