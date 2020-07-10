<template>
  <suspense>
    <template #default>
      <TaskList />
    </template>
    <template #fallback>
      <div>Loading ...</div>
    </template>
  </suspense>
</template>
<script>
import TaskList from 'Task/View/Task.vue';

export default {
  components: { TaskList },
  setup() {},
};
</script>
