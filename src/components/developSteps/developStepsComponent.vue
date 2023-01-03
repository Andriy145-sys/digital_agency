<template>
  <v-main>
    <v-container>
      <v-col>
        <p class="componentTitle">
          {{ "develop_steps_title" | localize }}
        </p>
        <p class="componentSubtitle">
          {{ "develop_steps_description" | localize }}
        </p>
        <steps-list style="margin-top: 50px" />
      </v-col>
    </v-container>
  </v-main>
</template>

<script>
import stepsList from "./stepsList.vue";
export default {
  components: { stepsList },
};
</script>

<style scoped>
</style>