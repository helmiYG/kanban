<template>
    <div>
        <nav class="navbar navbar-dark bg-light">
        <a class="navbar-brand my-brand">KAMBANZ</a>
        <form class="form-inline">
            <button class="btn btn-primary my-2 my-sm-0" data-toggle="modal" data-target="#modalAdd" type="button" >Add Task</button>
         </form>
        </nav>
        <ModalAdd/>
    </div>
</template>

<script>
import ModalAdd from '@/components/ModalAdd.vue'
export default {
    components: {
        ModalAdd
    }
}
</script>

<style>
.my-brand{
    color : Blue; 
    margin-left: 30px; 
    font-weight: 900;
    font-size: 50px;
}
</style>
