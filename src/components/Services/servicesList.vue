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
        title: "Створення сайтів",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 2,
        title: "Розробка UI/UX дизайну",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 3,
        title: "Просування сайту",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 4,
        title: "Створення сайтів",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 5,
        title: "Розробка UI/UX дизайну",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 6,
        title: "Просування сайту",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
    ],
  }),
};
</script>

<style>
</style>