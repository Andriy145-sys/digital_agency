<template>
  <div>
    <mainPage
      @scrollTo="scrollTo"
      id="main"
      @showContactForm="$emit('showContactForm')"
      @showMobileNavigationDrawer="$emit('showMobileNavigationDrawer')"
    />
    <services-component id="services" />
    <develop-steps-component />
    <call-me-back-component />
    <div style="background-color: white; margin: 0px; padding: 0px">
      <div
        style="
          background-color: #030303;
          position: absolute;
          width: 100%;
          height: 1px;
          color: transparent;
        "
      >
        d
      </div>
      <img
        src="@/assets/img/oval.svg"
        style="width: 100%; z-index: 40; margin-top: 0px"
      />
      <examples-of-work-component
        :style="
          $vuetify.breakpoint.xs ? 'margin-top: 50px' : 'margin-top: 100px'
        "
        id="portfolio"
      />
      <contacts-component
        style="margin-top: 100px"
        id="contact"
        @showContactForm="$emit('showContactForm')"
      />
    </div>
  </div>
</template>

<script>
import mainPage from "@/components/Main/mainPage";
import ServicesComponent from "../Services/servicesComponent.vue";
import DevelopStepsComponent from "../developSteps/developStepsComponent.vue";
import CallMeBackComponent from "../callMeBack/callMeBackComponent.vue";
import ContactsComponent from "../Contacts/contactsComponent.vue";
import ExamplesOfWorkComponent from "../examplesOfWork/examplesOfWorkComponent.vue";
export default {
  components: {
    mainPage,
    ServicesComponent,
    DevelopStepsComponent,
    CallMeBackComponent,
    ContactsComponent,
    ExamplesOfWorkComponent,
  },
  props: {
    scrollId: {
      require: false,
    },
  },
  methods: {
    scrollTo(id) {
      this.$vuetify.goTo(id);
    },
  },
  watch: {
    scrollId: {
      deep: true,
      handler() {
        if (this.$vuetify.breakpoint.xs && this.scrollId !== "") {
          this.scrollTo(this.scrollId);
        }
      },
    },
  },
};
</script>

<style>
</style>