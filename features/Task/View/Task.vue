<template>
  <div class="task-container">
    <div class="task-input">
      <input
        placeholder="Add new item..."
        type="text"
        class="task-new"
        v-model="state.newTask"
        @keyup.enter="addTask"
      />
      <button class="task-add" @click="addTask">Add</button>
    </div>
    <ul class="task-list">
      <li class="task-item" v-for="task in state.tasks" :key="task.name">
        <label class="task-item-container">
          <div class="task-checkbox">
            <input type="checkbox" class="opacity-0 absolute" />
            <svg class="task-checkbox-icon" viewBox="0 0 20 20">
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          </div>
          <div class="ml-2">{{task.name}}</div>
        </label>
      </li>
    </ul>
  </div>

</template>
<script lang="ts">
import { reactive } from 'vue';
import ky from 'ky';

interface Task {
  name: string;
  done: boolean
};

interface State {
  newTask: string;
  tasks: Task[];
}

export default {
  async setup() {
    let newTask = "";
    let tasks: Task[] = [];

    let state = reactive<State>({ newTask, tasks });

    const result = await ky.get('/task').json<Task[]>();
    state.tasks = result;

    const addTask = () => {
      if (state.newTask.trim().length === 0) return;
      state.tasks.push({ name: state.newTask, done: false });

      state.newTask = "";
    };

    return { state, addTask }
  }

}
</script>
