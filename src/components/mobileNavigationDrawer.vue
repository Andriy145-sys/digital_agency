<template>
  <v-navigation-drawer absolute v-model="isShowNavigationDrawer" width="100%">
    <v-card
      color="#030303"
      width="100%"
      height="100%"
      style="padding: 20px 30px 20px 30px"
      class="rounded-0"
    >
      <v-row no-gutters align="center">
        <img src="@/assets/img/logo.svg" width="80px" height="40px" />
        <v-row no-gutters justify="end">
          <v-icon large color="white" @click="$emit('close')">mdi-close</v-icon>
        </v-row>
      </v-row>
      <v-col style="text-align: center; margin-top: 30px">
        <v-row no-gutters align="center">
          <span
            class="language"
            :class="user.locale == 'ua' ? 'activeLanguage' : 'inactiveLanguage'"
            @click="changeUserLocale('ua')"
          >
            ua
          </span>
          <span
            class="language"
            :class="user.locale == 'en' ? 'activeLanguage' : 'inactiveLanguage'"
            @click="changeUserLocale('en')"
          >
            en
          </span>
        </v-row>
        <v-divider
          style="border: 1px solid #242424; margin-top: 20px"
          width="100%"
        />
        <v-col class="px-0" style="margin-top: 50px; text-align: center">
          <v-row
            align="center"
            justify="center"
            no-gutters
            v-for="item in headerItem"
            :key="item.id"
            style="margin-bottom: 32px; text-align: center"
          >
            <v-item v-slot="{ active, toggle }">
              <span
                class="headerItemMobile"
                @click="toggle, $emit('scrollTo', item.href)"
                v-if="!active"
              >
                <span class="routerLink">
                  {{ item.title | localize }}
                </span>
              </span>
              <span class="headerItemMobile" @click="toggle" v-else>
                <span class="routerLinkActive">
                  {{ item.title | localize }}
                </span>
              </span>
            </v-item>
          </v-row>
        </v-col>
        <v-row
          no-gutters
          justify="center"
          align="center"
          style="margin-top: 180px"
        >
          <v-icon
            v-for="icon in socials"
            :key="icon.id"
            color="white"
            :style="icon.id !== 4 ? 'margin-right: 30px' : ''"
          >
            {{ icon.icon }}
          </v-icon>
        </v-row>
      </v-col>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    isShowNavigationDrawer: true,
    headerItem: [
      {
        id: 1,
        title: "header_services",
        href: "#services",
      },
      {
        id: 2,
        title: "header_about_us",
        href: "#abous_us",
      },
      {
        id: 3,
        title: "header_portfolio",
        href: "#portfolio",
      },
      {
        id: 4,
        title: "header_contact",
        href: "#contact",
      },
    ],
    socials: [
      {
        id: 1,
        icon: "mdi-facebook",
        link: "",
      },
      {
        id: 2,
        icon: "mdi-instagram",
        link: "",
      },
      {
        id: 3,
        icon: "mdi-twitter",
        link: "",
      },
      {
        id: 4,
        icon: "mdi-whatsapp",
        link: "",
      },
    ],
    activeItem: 0,
  }),
  methods: {
    ...mapActions(["updateInfo"]),
    changeUserLocale(locale) {
      this.updateInfo({
        locale: locale,
      });
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
.language {
  font-family: "MacPaw Fixel Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-right: 10px;
  cursor: pointer;
}
.headerItemMobile {
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
}
.routerLink {
  text-decoration: none;
  color: white !important;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}
.routerLinkActive {
  color: #fea31e !important;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
}
.whiteText {
  color: white;
}
</style>