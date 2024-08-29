<template>
  <div>
    <div class="card shadow-lg">
      <div class="card-header d-flex justify-content-between">
        <h4>Todo App With Vue</h4>
        <router-link
          to="/create"
          class="btn btn-success text-decoration-none text-white"
          >Create Todo</router-link
        >
      </div>
      <div class="card-body">
        <div class="" v-if="tasks.length == 0">
          <div class="text-center">
            <p class="alert alert-warning text-secondary">
              There is no todo here! Create Your Todo List.
            </p>
          </div>
        </div>
        <div class="" v-else>
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
                <a
                  href=""
                  v-on:click="deleteData()"
                  class="btn btn-sm me-2 delete-btn text-white"
                  ><i class="fa-solid fa-trash"></i
                ></a>
              </p>
            </div>
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
    tasks: [],
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
    deleteData(index) {
      this.tasks.splice(index, 1);
      localStorage.setItem("todo_data", JSON.stringify(this.tasks));
    },
  },

  mounted() {
    let data = localStorage.getItem("todo_data");
    if (data !== null) {
      this.tasks = JSON.parse(data);
    }
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
