<template>
  <v-col style="margin-top: 30px" class="py-0 px-0">
    <v-row no-gutters justify="center">
      <service-card
        v-for="service in servicesList"
        :key="service.id"
        :service="service"
      />
    </v-row>
  </v-col>
</template>

<script>
import serviceCard from "./serviceCard.vue";
export default {
  components: { serviceCard },
  data: () => ({
    servicesList: [
      {
        id: 1,
        title: "services_step_1",
      },
      {
        id: 2,
        title: "services_step_2",
      },
      {
        id: 3,
        title: "services_step_3",
      },
      {
        id: 4,
        title: "services_step_4",
      },
      {
        id: 5,
        title: "services_step_5",
      },
      {
        id: 6,
        title: "services_step_6",
      },
    ],
  }),
};
</script>

<style>
</style>