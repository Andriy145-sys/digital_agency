<template>
  <v-navigation-drawer
    absolute
    right
    v-model="isNavigationDrawer"
    :width="$vuetify.breakpoint.xs ? '100%' : '720px'"
    :height="$vuetify.breakpoint.xs ? '100%' : '100vh'"
    style="z-index: 100"
  >
    <v-card
      color="#F3F1F5"
      :width="$vuetify.breakpoint.xs ? '100%' : '720px'"
      :height="$vuetify.breakpoint.xs ? '140%' : '100vh'"
      style="padding: 30px"
    >
      <v-row no-gutters justify="end">
        <v-icon
          style="cursor: pointer"
          @click="$emit('close')"
          x-large
          color="black"
          >mdi-close</v-icon
        >
      </v-row>
      <v-col>
        <p class="drawerHeadText">
          {{
            successSendMessage
              ? "contact_form_head_success_text"
              : "contact_form_head_text" | localize
          }}
        </p>
        <p class="drawerSubHeadText">
          {{
            successSendMessage
              ? "contact_form_sub_head_success_text"
              : "contact_form_sub_head_text" | localize
          }}
        </p>
        <user-form
          v-if="!successSendMessage"
          @successSendMessage="successSendMessage = true"
        />
      </v-col>
      <div
        :style="$vuetify.breakpoint.xs ? 'margin-top: 100px;' : 'bottom: 50px'"
        style="
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%; 
          left: 0;
        "
      >
        <div
          class="iconBackground"
          v-for="icon in socials"
          :key="icon.id"
          :style="
            icon.id == 1
              ? 'margin-right: 150px;'
              : icon.id == 2
              ? 'position:absolute; margin-right: 30px;'
              : icon.id == 3
              ? 'position:absolute; margin-left: 90px;'
              : icon.id == 4
              ? 'position:absolute; margin-left: 210px;'
              : ''
          "
        >
          <img :src="require(`@/assets/img/socialIcons/${icon.icon}`)" />
        </div>
      </div>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import userForm from "./userForm.vue";
export default {
  components: { userForm },
  data: () => ({
    isNavigationDrawer: true,
    successSendMessage: false,
    socials: [
      {
        id: 1,
        icon: "twitterIcon.svg",
        link: "",
      },
      {
        id: 2,
        icon: "facebookIcon.svg",
        link: "",
      },
      {
        id: 3,
        icon: "instagramIcon.svg",
        link: "",
      },
      {
        id: 4,
        icon: "telegramIcon.svg",
        link: "",
      },
    ],
  }),
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .drawerHeadText {
    font-weight: 500;
    font-size: 36px;
    line-height: 50px;
    text-transform: uppercase;
    color: #0d0d0d;
  }
  .drawerSubHeadText {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #0d0d0d;
  }
}
@media only screen and (min-width: 610px) {
  .drawerHeadText {
    font-weight: 500;
    font-size: 64px;
    line-height: 88px;
    text-transform: uppercase;
    color: #0d0d0d;
  }
  .drawerSubHeadText {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #0d0d0d;
  }
}
.iconBackground {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 0.5px solid rgba(172, 172, 172, 0.3);
  position: relative;
  cursor: pointer;
}
</style>