<template>
    <div class="col-md-3">
         <div class="card w-100" style="background-color: orange">
            <div class="card-body">
                <h5 class="card-title">Progress</h5>
                    <ListTask :listTasks="taskPR"></ListTask>
            </div>
        </div>
    </div>
</template>

<script>
import ListTask from '@/components/ListTask.vue'
export default {
    props: ['taskPR'],
    components: {
        ListTask
    }
}
</script>

<style>
   
</style>
