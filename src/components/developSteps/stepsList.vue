<template>
  <v-col>
    <v-row no-gutters align="center">
      <step-card v-for="step in developSteps" :key="step.id" :step="step" />
    </v-row>
  </v-col>
</template>

<script>
import stepCard from "./stepCard.vue";
export default {
  components: { stepCard },
  data: () => ({
    developSteps: [
      {
        id: 1,
        title: "develop_step_title_1",
        description: "develop_step_description_1",
      },
      {
        id: 2,
        title: "develop_step_title_2",
        description: "develop_step_description_2",
      },
      {
        id: 3,
        title: "develop_step_title_3",
        description: "develop_step_description_3",
      },
      {
        id: 4,
        title: "develop_step_title_4",
        description: "develop_step_description_4",
      },
      {
        id: 5,
        title: "develop_step_title_5",
        description: "develop_step_description_5",
      },
    ],
  }),
};
</script>

<style>
</style>