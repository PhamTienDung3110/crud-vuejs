<template>
  <div class="container">
    <div class="header">
      <input type="text" class="header_input" v-model="newTodo" />
      <button class="header_btn" v-on:click="handleAdd">Add</button>
    </div>
    <div class="main">
      <p v-if="todoList.length <= 0">
        Danh sách trống
      </p>
      <p v-if="openModalDetail" class="detail_modal">
        <DetailTodo :closeModalDetail="closeModalDetail" :todo="todoList[indexDetail]"
          @number-added="todoList.unshift($event)" />
      </p>
      <p v-if="openModalDetail" class="overlay" v-on:click="closeModalDetail"></p>
      <ul v-for="(item, index) in todoList" :key="index" class="main_list">
        <li><input class="input_edit" :value="item.todo" :type="item.onEdit ? 'text' : 'button'"
            v-on:input="handleChangeInput" v-on:keyup.enter="handleEnterInput(index)" />
        </li>
        <div>
          <button v-if="item.onEdit" class="btn_update" v-on:click="handleUpdate(index)">
            Update
          </button>
          <button class="btn_edit" v-on:click="handleEdit(index)">{{ item.onEdit ? 'cancel' : 'edit' }}</button>
          <button class="btn_detail" v-on:click="handleOpenDetail(index)">detail</button>
          <button class="btn_del" v-on:click="handleDelete(index)"><i class="el-icon-delete-solid"></i></button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import DetailTodo from "../components/DetailTodo"

export default {
  data() {
    return {
      todoList: [
        { todo: "di chơi", onEdit: false },
        { todo: "wwpr", onEdit: false },
        { todo: "pr2", onEdit: false },
        { todo: "abcde", onEdit: false },
        { todo: "di", onEdit: false },
      ],
      tempInput: "",
      newTodo: "",
      openModalDetail: false,
      indexDetail: 0,
    }
  },
  computed: {},
  methods: {
    handleEdit(index) {
      this.todoList[index].onEdit = !this.todoList[index].onEdit;
      this.tempInput = this.todoList[index].todo;
    },
    handleDelete(index) {
      this.todoList.splice(index, 1);
      alert("xoa roi day con ga")
    },
    handleChangeInput(e) {
      this.tempInput = e.target.value;
    },
    handleEnterInput(index) {
      this.todoList[index].todo = this.tempInput;
      this.todoList[index].onEdit = !this.todoList[index].onEdit;
    },
    handleUpdate(index) {
      this.todoList[index].todo = this.tempInput;
      this.todoList[index].onEdit = !this.todoList[index].onEdit;
    },
    handleAdd() {
      if (this.newTodo === '') {
        alert("nhap ki tu vao con ga")
      } else {
        this.todoList.unshift({ todo: this.newTodo, onEdit: false });
        this.newTodo = ''
      }
    },
    handleOpenDetail(index) {
      this.indexDetail = index;
      this.openModalDetail = true
    },

    closeModalDetail() {
      this.openModalDetail = false
    }
  },
  components: {
    DetailTodo
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.header {
  margin-top: 20px;
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_input {
  width: 80%;
  height: 30px;
  font-size: 18px;
}

.header_btn {
  width: 15%;
  background-color: #2196f3;
  height: 35px;
  border: none;
  border-radius: 5px;
  color: white;
}

.main {
  width: 50vw;
}

.detail_modal {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 550px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
}

.overlay {
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
}

.main_list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn_edit {
  margin-right: 10px;
  background-color: rgb(26, 159, 26);
  font-size: 18px;
  color: white;
  border: none;
  padding: 7px 20px;
  border-radius: 5px;
}

.btn_detail {
  margin-right: 10px;
  background-color: rgb(42, 99, 197);
  font-size: 18px;
  color: white;
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
}

.btn_update {
  margin-right: 10px;
  background-color: #2196f3;
  font-size: 18px;
  color: white;
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
}

.btn_del {
  background-color: red;
  font-size: 18px;
  color: white;
  border: none;
  padding: 7px 20px;
  border-radius: 5px;
}

input[type=button] {
  border: none;
  background-color: transparent;
  height: 30px;
  font-size: 18px;
}

.main_list input[type=text] {
  height: 28px;
  font-size: 18px;
  width: 22vw;
}

li {
  list-style: none;
}

ul {
  padding: 10px 0;
}
</style>
