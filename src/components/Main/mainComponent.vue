<template>
  <div>
    <mainPage @scrollTo="scrollTo" id="main" />
    <services-component id="services" />
    <develop-steps-component />
    <call-me-back-component id="contact" />
  </div>
</template>

<script>
import mainPage from "@/components/Main/mainPage";
import ServicesComponent from "../Services/servicesComponent.vue";
import DevelopStepsComponent from "../developSteps/developStepsComponent.vue";
import CallMeBackComponent from "../callMeBack/callMeBackComponent.vue";
export default {
  components: {
    mainPage,
    ServicesComponent,
    DevelopStepsComponent,
    CallMeBackComponent,
  },
  methods: {
    scrollTo(id) {
      this.$vuetify.goTo(id);
    },
  },
};
</script>

<style>
</style>