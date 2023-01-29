<template>
      <div class="badass-todo">

      <div class="title has-text-centered">
      Badass Todo
      </div>  

      <form @submit.prevent="addTodo">
            <div class="field is-grouped mb-5">
            <p class="control is-expanded">
            <input class="input" type="text" placeholder="Add a todo">
            </p>
            <p class="control">
            <button class="button is-info">
                  Add
            </button>
            </p>
            </div>
      </form>



      <div
            v-for="todo in todos"
            class="card mb-5"
        >
      <div class="card-content">
      <div class="content">

            <div class="columns is-mobile is-vcentered">
                  <div class="column">
                        {{ todo.content }}
                  </div>

                  <div class="column is-5 has-text-right">
                        <button class="button is-light">
                              &check;
                        </button>
                        <button class="button is-danger ml-2">
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


/*
      todos
*/ 
                  const todos = ref([
            {
                  id: 'id1',
                  content: 'Shave my butt',
                  done: false
            },
            {
                  id: 'id2',
                  content: 'wash my butt',
                  done: false
            }
      ])

/*
            add todo
*/

const addTodo = () => {
      console.log('add Todo');
}


</script>


<style>
      @import 'bulma/css/bulma.min.css';

      .badass-todo {
            max-width: 400px;
            padding: 20px;
            margin: 0 auto;
      }
</style>

