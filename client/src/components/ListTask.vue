<template>
<div>

      <div class="card w-60" v-for="(task, index) in listTasks" v-bind:key="index">
            <div class="card-body">
                <h5 class="card-title"> {{task.title}} </h5>
                <p class="card-text">Point : {{task.point}} </p>
                <p class="card-text">Assigned To : {{task.assignTo}} </p>
                    <button type="submit" class="btn btn-success" v-if="task.position == 'todo' || task.position == 'progress' || task.position === 'completed'" @click="backto({index, task})" ><i class="fas fa-arrow-left"></i></button>
                    <button type="submit" class="btn btn-danger" @click="remove({index: index, pos : task.position})" ><i class="fas fa-times-circle"></i></button>
                    <button type="submit" class="btn btn-success" v-if="task.position == 'backlog' || task.position == 'todo' || task.position === 'progress'" @click="moveto({index, task})" ><i class="fas fa-arrow-right"></i></button>
                </div>
                <hr>
            </div>
</div>
</template>

<script>
import swal from 'sweetalert';
import db from '../firebase'
export default {
    props: ['listTasks'],
    methods: {
        remove(toRemove){
            swal({
                title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        db.ref(`tasks/${toRemove.pos}`).child(`/${toRemove.index}`).remove()
                    } 
                });
        }, 
        moveto(toTD){
            let toMove = toTD.task
            let pos = ''
            if(toMove.position === 'backlog'){
                pos = 'todo'
            }else if(toMove.position === 'todo'){
                pos = 'progress'
            }else if(toMove.position === 'progress'){
                pos = 'completed'
            }
            let objtoTD = {
                title : toMove.title,
                description: toMove.description,
                point: toMove.point,
                assignTo: toMove.assignTo,
                position: pos
            }
            db.ref(`tasks/${pos}`).push(objtoTD)
            db.ref(`tasks/${toMove.position}/`).child(`/${toTD.index}`).remove()
        },
        backto(taskTo){
            let toBack = taskTo.task
            let pos = ''
            if(toBack.position == 'todo'){
                pos = 'backlog'
            }else if(toBack.position === 'progress'){
                pos = 'todo'
            }else if(toBack.position === 'completed'){
                pos = 'progress'
            }
            let objtoBack = {
               title : toBack.title,
                description: toBack.description,
                point: toBack.point,
                assignTo: toBack.assignTo,
                position: pos
            }
            db.ref(`tasks/${pos}`).push(objtoBack)
            db.ref(`tasks/${toBack.position}/`).child(`/${taskTo.index}`).remove()
        }
    }
}
</script>

<style>
.card-text{
    text-align: left;
}
</style>
