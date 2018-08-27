<template>
  <div class="container-fluid">
    <div class="row">
        <BackLog :taskBL="AllTasks.backlog"></BackLog>
        <ToDo :taskTD="AllTasks.todo"></ToDo>
        <Progress :taskPR="AllTasks.progress"></Progress>
        <Completed :taskCM="AllTasks.completed"></Completed>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import {mapState, mapActions} from 'vuex'
import BackLog from '@/components/BackLog.vue'
import ToDo from '@/components/ToDo.vue'
import Progress from '@/components/Progress.vue'
import Completed from '@/components/Completed.vue'
export default {
  name: 'backlog',
  components: {
    BackLog,
    ToDo,
    Progress,
    Completed
  },
  computed: {
    ...mapState([
      'AllTasks'
    ])
  }, 
  methods: {
    ...mapActions([
      'getAllTasks'
    ])
  },
  mounted() {
    this.getAllTasks()
  },

}
</script>
