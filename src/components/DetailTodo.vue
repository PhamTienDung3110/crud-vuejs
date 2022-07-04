<template>
    <div class="container_modal">
        <p class="close_modal" v-on:click="closeModalDetail">X</p>
        <p class="modal_detail_title">view detail</p>
        <hr />
        <div class="form-group">
            <p>name: {{ todo.todo }}</p>
            <p>created at: {{ isToday() }}</p>
            <input type="text" v-model="newTodo" />
            <button @click="$emit('number-added', addTodo())">add</button>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: ["closeModalDetail", "todo"],
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        isToday() {
            return moment().format('LLL');
        },
        addTodo() {
            if (this.newTodo == 0) {
                alert("??? nhap vao")
            } else {
                this.closeModalDetail();
                return { todo: this.newTodo, onEdit: false }
            }
        }
    },
}
</script>

<style>
.container_modal {
    position: relative;
}

.modal_detail_title {
    margin-top: 20px;
    margin-bottom: 10px;
}

.close_modal {
    position: absolute;
    top: -20px;
    right: 20px;
}
</style>