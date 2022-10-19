<template>
  <div class="main-background">
    <div class="main">
      <v-main>
        <v-container v-if="!$vuetify.breakpoint.xs">
          <v-row no-gutters align="center">
            <v-col>
              <p class="whiteText">Logo company</p>
            </v-col>
            <v-col cols="4" class="px-0">
              <v-row justify="end" no-gutters>
                <v-item-group active-class="headerActiveItem">
                  <v-container>
                    <v-row>
                      <v-item
                        v-for="item in headerItem"
                        :key="item.id"
                        v-slot="{ active, toggle }"
                      >
                        <p class="headerItem" @click="toggle" v-if="!active">
                          <router-link class="routerLink" :to="item.path">{{
                            item.title
                          }}</router-link>
                        </p>
                        <p class="headerItem" @click="toggle" v-else>
                          <router-link
                            class="routerLinkActive"
                            :to="item.path"
                            >{{ item.title }}</router-link
                          >
                        </p>
                      </v-item>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-row>
            </v-col>
          </v-row>
          <v-col cols="6">
            <p class="mainTitle">Digital Marketing Agency Surabaya</p>
            <p class="mainDescription">
              The customer is very important, the customer will be followed by
              the customer. Now the lake, as the need in but for the eleifend of
              the valley of life.
            </p>
          </v-col>
          <div style="margin-top: 185px; margin-left: 20px">
            <v-row align="end" no-gutters>
              <div class="firstCube">
                <p class="textStyle">01</p>
                <p
                  style="
                    font-weight: 500;
                    font-size: 24px;
                    color: #000000;
                    line-height: 250%;
                  "
                >
                  /3
                </p>
              </div>
              <div class="secondCube"></div>
              <div class="thirdCube"></div>
            </v-row>
          </div>
        </v-container>
      </v-main>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    headerItem: [
      {
        id: 1,
        title: "Home page",
        path: "/",
      },
      {
        id: 2,
        title: "Program",
        path: "/program",
      },
      {
        id: 3,
        title: "About Us",
        path: "/about_us",
      },
      {
        id: 4,
        title: "Blog",
        path: "/blog",
      },
      {
        id: 5,
        title: "Contact",
        path: "/contact",
      },
    ],
    activeItem: 0,
  }),
};
</script>

<style>
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
.headerItem {
  color: white;
  margin-right: 10px;
  cursor: pointer;
}
.routerLink {
  text-decoration: none;
  color: white !important;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}
.routerLinkActive {
  color: #e20044 !important;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
}
.whiteText {
  color: white;
}
.mainTitle {
  font-weight: 700;
  font-size: 64px;
  line-height: 96px;
  color: #ffffff;
  margin-top: 100px;
}
.mainDescription {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #ffffff;
}
.firstCube {
  width: 128px;
  height: 128px;
  background: #e20044;
  display: flex;
  padding: 25px;
  position: absolute;
  z-index: 10;
}
.secondCube {
  width: 120px;
  height: 108px;
  background: rgba(226, 0, 68, 0.5);
  position: absolute;
  z-index: 5;
  margin-left: 20px;
}
.thirdCube {
  width: 20px;
  height: 88px;
  position: absolute;
  background: rgba(226, 0, 68, 0.2);
  margin-left: 140px;
}
.textStyle {
  font-weight: 700;
  font-size: 48px;
  line-height: 160%;
  color: #31000f;
}
</style>