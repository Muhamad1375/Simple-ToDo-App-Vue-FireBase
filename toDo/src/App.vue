<template>
      <div class="badass-todo">

      <div class="title has-text-centered">
      Badass Todo
      </div>  

      <form @submit.prevent="addTodo">
            <div class="field is-grouped mb-5">
            <p class="control is-expanded">
            <input
            v-model="newTodoContent"
              class="input"
              type="text"
              placeholder="Add a todo">
            </p>
            <p class="control">
            <button
            :disabled="!newTodoContent"
              class="button is-info">
                  Add
            </button>
            </p>
            </div>
      </form>



      <div
            v-for="todo in todos"
            class="card mb-5"
            :class="{ 'has-background-success-light' : todo.done }"
        >
      <div class="card-content">
      <div class="content">

            <div class="columns is-mobile is-vcentered">
                  <div
                    class="column"
                    :class="{ 'has-text-success line-through' : todo.done }">
                        {{ todo.content }}
                  </div>

                  <div class="column is-5 has-text-right">
                        <button
                        @click="toggleDone(todo.id)"
                          class="button"
                          :class="todo.done ? 'is-success' : 'is-light'">
                              &check;
                        </button>
                        <button
                        @click="deleteTodo(todo.id)"
                          class="button is-danger ml-2">
                              &cross;
                        </button>
                  </div>
            </div>

      </div>
      </div>
      </div>
</div>
</template>

<script setup>
/*
      imports
*/
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'


/*
      todos
*/ 
                  const todos = ref([
            // {
            //       id: 'id1',
            //       content: 'Shave my butt',
            //       done: false
            // },
            // {
            //       id: 'id2',
            //       content: 'wash my butt',
            //       done: true
            // }
      ])

/*
      add todo
*/

const newTodoContent = ref('')

const addTodo = () => {
      const newTodo = {
            id: uuidv4(),
            content: newTodoContent.value,
            done: false
      }
      todos.value.unshift(newTodo)
      newTodoContent.value = ''
}

/*
 delete todo
*/

const deleteTodo = id => {
      todos.value = todos.value.filter(todo => todo.id !== id)
}


/*
 toggleDone
*/

const toggleDone = id => {
      const index = todos.value.findIndex(todo => todo.id === id)
      todos.value[index].done = !todos.value[index].done
}


</script>


<style>
      @import 'bulma/css/bulma.min.css';

      .badass-todo {
            max-width: 400px;
            padding: 20px;
            margin: 0 auto;
      }
      .line-through {
            text-decoration: line-through;
      }
</style>

