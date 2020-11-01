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
        item: this.newItem
        isDone: false
      }
    }
  }
})