<template>
    <div class="col-md-3">
         <div class="card w-100" style="background-color: red">
            <div class="card-body">
                <h5 class="card-title">Back Log</h5>
                    <ListTask :listTasks="taskBL"></ListTask>
            </div>
        </div>
    </div>
</template>

<script>
import ListTask from '@/components/ListTask.vue'
export default {
    props: ['taskBL'],
    components: {
        ListTask
    }
}
</script>

<style>
   
</style>
