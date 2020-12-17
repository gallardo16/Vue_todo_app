const app = new Vue({
  el: '#app',
  data: {
    title: 'Todoリスト',
    todos: [],
    newTodo: null
  },
  mounted () {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'))
      } catch (e) {
        localStorage.removeItem('todos')
      }
    }
  },
  methods: {
    addTodo () {
      if (!this.newTodo) {
        return
      }
      this.todos.push(this.newTodo)
      this.newTodo = ''
      this.saveTodos()
    },
    removeTodo (idx) {
      this.todos.splice(idx, 1)
      this.saveTodos()
    },
    saveTodos () {
      const parsed = JSON.stringify(this.todos)
      localStorage.setItem('todos', parsed)
    }
  }
})
