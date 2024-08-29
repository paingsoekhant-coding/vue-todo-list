<template>
  <div>
    <div class="card p-3 shadow-lg">
      <h3 class="">Create Todo</h3>
      <div class="">
        <input
          type="text"
          name=""
          id=""
          class="form-control shadow-sm"
          v-model="newData"
        />
        <button class="btn btn-dark mt-2" v-on:click="create_todo">
          Create Todo
        </button>
        <button class="btn btn-danger mt-2 ms-2">
          <router-link to="/" class="text-decoration-none text-white"
            >Back</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "CreatePage",
  data: () => ({
    hideComplete: false,
    newData: "",
    tasks: [],
  }),
  methods: {
    create_todo() {
      if (this.newData !== "") {
        this.tasks.push({
          action: this.newData,
          isDone: false,
        });
        localStorage.setItem("todo_data", JSON.stringify(this.tasks));
        // this.newData = "";
        Swal.fire({
          title: "Good job!",
          text: "Todo create Successfully.",
          icon: "success",
        });
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
.card {
  background-color: cornsilk;
}
</style>
