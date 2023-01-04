<template>
  <v-app :style="showContactForm ? 'overflow: hidden;  height: 100vh;' : ''">
    <router-view
      @showContactForm="showContactForm = true"
      @showMobileNavigationDrawer="showMobileNavigationDrawer = true"
      :scrollId="scrollId"
    />
    <div v-if="showContactForm" style="height: 20vh">
      <v-overlay style="z-index: 70" absolute> </v-overlay>
      <contact-form-component @close="showContactForm = false" />
    </div>
    <mobile-navigation-drawer
      v-if="showMobileNavigationDrawer"
      @close="closeMobileDrawer"
      @scrollTo="scrollTo"
    />
    <footer-component />
  </v-app>
</template>

<script>
import ContactFormComponent from "./components/contactForm/contactFormComponent.vue";
import footerComponent from "./components/Footer/footerComponent.vue";
import MobileNavigationDrawer from "./components/mobileNavigationDrawer.vue";
export default {
  components: { footerComponent, ContactFormComponent, MobileNavigationDrawer },
  name: "App",
  data: () => ({
    showContactForm: false,
    showMobileNavigationDrawer: false,
    scrollId: "",
  }),
  methods: {
    closeMobileDrawer() {
      this.showMobileNavigationDrawer = false;
    },
    scrollTo(path) {
      this.scrollId = path;
      this.showMobileNavigationDrawer = false;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: black;
}
</style>
