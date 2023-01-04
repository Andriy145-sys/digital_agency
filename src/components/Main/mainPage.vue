<template>
  <div class="main-background">
    <div class="main">
      <v-main>
        <v-container>
          <v-row no-gutters align="center">
            <v-col cols="3">
              <img
                v-if="$vuetify.breakpoint.xs"
                src="@/assets/img/logo.svg"
                width="80px"
                height="40px"
                alt="logo"
                @click="$emit('scrollTo', '#main')"
              />
              <img
                v-else
                src="@/assets/img/logo.svg"
                width="140px"
                height="70px"
                alt="logo"
                @click="$emit('scrollTo', '#main')"
              />
            </v-col>
            <v-col cols="6" class="px-0">
              <v-row justify="center" no-gutters>
                <v-item-group
                  active-class="headerActiveItem"
                  v-if="!$vuetify.breakpoint.xs"
                >
                  <v-container>
                    <v-row no-gutters align="center">
                      <v-item
                        v-for="item in headerItem"
                        :key="item.id"
                        v-slot="{ active, toggle }"
                      >
                        <span
                          class="headerItem"
                          @click="toggle, $emit('scrollTo', item.href)"
                          v-if="!active"
                        >
                          <span class="routerLink">
                            {{ item.title | localize }}
                          </span>
                        </span>
                        <span class="headerItem" @click="toggle" v-else>
                          <span class="routerLinkActive">
                            {{ item.title | localize }}
                          </span>
                        </span>
                      </v-item>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-row>
            </v-col>
            <v-col cols="1" v-if="!$vuetify.breakpoint.xs">
              <v-row no-gutters align="center">
                <span
                  class="language"
                  :class="
                    user.locale == 'ua' ? 'activeLanguage' : 'inactiveLanguage'
                  "
                  @click="changeUserLocale('ua')"
                >
                  ua
                </span>
                <span
                  class="language"
                  :class="
                    user.locale == 'en' ? 'activeLanguage' : 'inactiveLanguage'
                  "
                  @click="changeUserLocale('en')"
                >
                  en
                </span>
              </v-row>
            </v-col>
            <v-col cols="2" v-if="!$vuetify.breakpoint.xs">
              <span class="phoneNumber">
                <a
                  style="text-decoration: none; color: white"
                  href="tel: +380986504542"
                  >+38 (098) 650 45 42</a
                >
              </span>
            </v-col>
            <v-row
              no-gutters
              justify="end"
              v-if="$vuetify.breakpoint.xs"
              @click="$emit('showMobileNavigationDrawer')"
            >
              <span
                style="
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 19px;
                  color: #ffffff;
                "
                >{{ "label_menu" | localize }}</span
              >
              <v-icon color="white" style="margin-left: 10px">mdi-menu</v-icon>
            </v-row>
          </v-row>
          <div
            style="
              display: flex;
              align-items: center;
              width: 100%;
              min-height: 500px;
              max-height: 685px;
            "
            :style="$vuetify.breakpoint.xs ? ' padding-top: 190px;' : ''"
          >
            <v-col cols="12" xl="3" lg="7" md="6" sm="6">
              <span v-if="$vuetify.breakpoint.xs" class="mainTitle">{{
                "main_title" | localize
              }}</span>
              <p v-else class="mainTitle">{{ "main_title" | localize }}</p>
              <v-col cols="12" xl="7" lg="7" md="7" sm="12" class="px-0">
                <p class="mainDescription">
                  {{ "main_description" | localize }}
                </p>
              </v-col>
              <v-row
                no-gutters
                :justify="$vuetify.breakpoint.xs ? 'center' : 'start'"
              >
                <v-btn
                  width="300px"
                  height="45px"
                  class="main_btn"
                  @click="$emit('showContactForm')"
                >
                  <v-col cols="11" style="text-align: center">
                    {{ "main_btn" | localize }}
                  </v-col>
                  <v-col cols="1">
                    <v-row no-gutters align="center" justify="end">
                      <v-icon small> mdi-arrow-top-right </v-icon>
                    </v-row>
                  </v-col>
                </v-btn>
              </v-row>
            </v-col>
          </div>
        </v-container>
      </v-main>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
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
@media only screen and (max-width: 600px) {
  .mainTitle {
    font-weight: 500;
    font-size: 48px;
    line-height: 66px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .mainDescription {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
  }
  .main-background {
    background-image: url("../../assets/img/mainBackground.png");
    height: 659px;
    background-size: cover;
  }
  .main {
    height: 363px;
    background: linear-gradient(
      90.6deg,
      #000000 1.24%,
      rgba(0, 0, 0, 0.71) 39.93%,
      rgba(0, 0, 0, 0.88) 86.25%,
      #171214 116.71%,
      #000000 116.71%
    );
  }
  .textStyle {
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: #31000f;
  }
}
@media only screen and (min-width: 610px) {
  .mainTitle {
    font-weight: 500;
    font-size: 64px;
    line-height: 88px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .mainDescription {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
  }
  .main-background {
    background-image: url("../../assets/img/mainBackground.png");
    height: 663px;
    background-size: cover;
  }
  .main {
    height: 663px;
    background: linear-gradient(
      90.6deg,
      #000000 1.24%,
      rgba(0, 0, 0, 0.71) 39.93%,
      rgba(0, 0, 0, 0.88) 86.25%,
      #171214 116.71%,
      #000000 116.71%
    );
  }

  .textStyle {
    font-weight: 700;
    font-size: 48px;
    line-height: 160%;
    color: #31000f;
  }
}
.headerItem {
  color: white;
  margin-right: 32px;
  cursor: pointer;
}

.language {
  font-family: "MacPaw Fixel Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-right: 10px;
  cursor: pointer;
}

.activeLanguage {
  color: #ffffff;
}
.inactiveLanguage {
  color: #727272;
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