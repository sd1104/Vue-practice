new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function() {
      if(newItem == '') return;
    }
  }
})