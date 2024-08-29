<template>
  <div class="container col-6 mt-4">
    <!-- <HomePage/> -->
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
// import HomePage from "./components/HomePage.vue";

// export default {
//   name: "App",
//   components: {
//     HomePage,
//   },
// };
</script>
