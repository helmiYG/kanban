<template>
    <div class="col-md-3">
         <div class="card w-100" style="background-color: orange">
            <div class="card-body">
                <h5 class="card-title">Completed</h5>
                    <ListTask :listTasks="taskCM"></ListTask>
            </div>
        </div>
    </div>
</template>

<script>
import ListTask from '@/components/ListTask.vue'
export default {
    props: ['taskCM'],
    components: {
        ListTask
    }
}
</script>

<style>
   
</style>
