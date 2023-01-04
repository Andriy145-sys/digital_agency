<template>
  <v-main>
    <v-container>
      <v-row no-gutters align="start" justify="center">
        <v-col cols="4">
          <p class="componentTitle" style="color: black">
            приклади наших робіт
          </p>
          <v-row no-gutters align="center" style="margin-top: 50px">
            <div class="swiper-button-prev" style="position: static"></div>
            <div
              class="swiper-button-next"
              style="position: static; margin-left: 150px"
            ></div>
          </v-row>
        </v-col>
        <v-col cols="8">
          <swiper
            class="swiper d-none d-lg-block"
            :style="{
              '--swiper-navigation-color': '#000000',
            }"
            :options="swiperOption"
          >
            <swiper-slide v-for="(item, index) in examples" :key="item.id">
              <v-row no-gutters align="center">
                <examples-card :item="item" />
                <div
                  v-if="index !== 0"
                  style="
                    border: 1px solid rgba(208, 208, 208, 0.4);
                    z-index: 80;
                    height: 200px;
                    position: absolute;
                  "
                />
              </v-row>
            </swiper-slide>
          </swiper>
          <swiper
            class="swiper d-none d-md-block d-lg-none"
            :style="{
              '--swiper-navigation-color': '#000000',
            }"
            :options="swiperMediumOption"
          >
            <swiper-slide v-for="i in 9" :key="i">
              <v-card class="mt-5 px-4 py-5 mx-10"> d </v-card>
            </swiper-slide>
          </swiper>
          <swiper
            class="swiper d-block d-md-none"
            :style="{
              '--swiper-navigation-color': '#000000',
            }"
            :options="swiperMobileOption"
          >
            <swiper-slide v-for="i in 9" :key="i">
              <v-card class="mt-5 px-4 py-5 mx-10"> d </v-card>
            </swiper-slide>
          </swiper>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ExamplesCard from "./examplesCard.vue";
export default {
  name: "swiper-example-loop-group",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
    ExamplesCard,
  },
  data: () => ({
    examples: [
      {
        id: 1,
        title: "Онлайн склад 'NewSend'",
        text: "Розробили сайт-візитку для для залучення нових клієнітів",
        img: 'newSend.png'
      },
      {
        id: 2,
        title: "Компанія-перевізник MBus",
        text: "Розробили сайт-візитку для для залучення нових клієнітів",
        img: 'MBus.png'
      },
      {
        id: 3,
        title: "Прогресивний коледж",
        text: "Розробили сайт-візитку для для залучення нових клієнітів",
        img: 'kpk.png'
      },
    ],
    swiperOption: {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    swiperMobileOption: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    swiperMediumOption: {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 2,
      loop: false,
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  }),
};
</script>

<style>
</style>