<template>
  <v-app :style="showContactForm ? 'overflow: hidden;  height: 100vh;' : ''">
    <router-view @showContactForm="showContactForm = true" />
    <div v-if="showContactForm" style="height: 20vh">
      <v-overlay style="z-index: 70" absolute> </v-overlay>
      <contact-form-component @close="showContactForm = false" />
    </div>
    <footer-component />
  </v-app>
</template>

<script>
import ContactFormComponent from "./components/contactForm/contactFormComponent.vue";
import footerComponent from "./components/Footer/footerComponent.vue";
export default {
  components: { footerComponent, ContactFormComponent },
  name: "App",
  data: () => ({
    showContactForm: false,
  }),
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: black;
}
</style>
