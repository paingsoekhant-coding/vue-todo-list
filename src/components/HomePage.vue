<template>
  <div>
    <div class="card shadow-lg">
      <div class="card-header d-flex justify-content-between">
        <h4>Todo App With Vue</h4>

        <!-- <a href="" class="btn btn-dark text-white rounded">Add Todo</a> -->
        <div class="">
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            v-model="newData"
            v-on:keyup.enter="create"
          />
          <button class="btn btn-dark mt-2" v-on:click="create">
            Add Todo
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="text-center">
          <label for="">Hide Complete Tasks</label>
          <input
            type="checkbox"
            v-model="hideComplete"
            class="form-check-input bg-secondary ms-2"
          />
        </div>
        <div class="d-flex" v-for="(task, index) in filterTasks" :key="index">
          <div class="d-flex col-8">
            <input
              class="form-check-input me-2 bg-secondary"
              type="checkbox"
              value=""
              v-model="task.isDone"
            />
            <p v-bind:class="task.isDone ? 'done-tasks' : ' '">
              {{ task.action }}
            </p>
          </div>
          <div class="col-4 d-flex justify-content-center">
            <p>
              <a href="" class="btn btn-sm me-2 delete-btn text-white"
                ><i class="fa-solid fa-trash"></i
              ></a>
            </p>
            <p>
              <a href="" class="btn btn-sm edit-btn text-white"
                ><i class="fa-solid fa-pen"></i
              ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    hideComplete: false,
    newData: "",
    tasks: [
      { action: "Buy new phone", isDone: false },
      { action: "Buy food ", isDone: false },
      { action: "Buy shirt", isDone: false },
      { action: "Buy shoes", isDone: false },
    ],
  }),
  computed: {
    // ES6 function
    filterTasks() {
      return this.hideComplete
        ? this.tasks.filter((v) => !v.isDone)
        : this.tasks;
    },

    //Normal Function
    // filterTasks() {
    //   if (this.hideComplete) {
    //     return this.tasks.filter((v) => !v.isDone);
    //   } else {
    //     return this.tasks;
    //   }
    // },
  },
  methods: {
    create() {
      if (this.newData !== "") {
        this.tasks.push({
          action: this.newData,
          isDone: false,
        });
        this.newData = "";
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Fill New Data!",
        });
      }
    },
  },
};
</script>

<style>
.delete-btn {
  background-color: brown;
}
.delete-btn:hover,
.edit-btn:hover {
  background-color: black;
}
.edit-btn {
  background-color: darkslateblue;
}

.card-body {
  background-color: cornsilk;
}

.done-tasks {
  text-decoration: line-through;
}
</style>
