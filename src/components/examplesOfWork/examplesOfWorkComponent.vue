<template>
  <v-main>
    <v-container>
      <v-row no-gutters align="start" justify="center">
        <v-col cols="12" xl="4" lg="4" md="4" sm="12">
          <p class="componentTitle" style="color: black">
            {{ "example_of_our_work" | localize }}
          </p>
          <swiper
            class="swiper d-block d-md-none"
            :style="{
              '--swiper-navigation-color': '#000000',
            }"
            :options="swiperMobileOption"
          >
            <swiper-slide v-for="item in examples" :key="item.id">
              <v-row no-gutters align="center" justify="center">
                <examples-mobile-card :item="item" />
              </v-row>
            </swiper-slide>
          </swiper>
          <v-row
            no-gutters
            align="center"
            :justify="$vuetify.breakpoint.xs ? 'center' : 'start'"
            style="margin-top: 50px"
          >
            <div class="swiper-button-prev" style="position: static"></div>
            <div
              class="swiper-button-next"
              style="position: static"
              :style="
                $vuetify.breakpoint.xs
                  ? 'margin-left: 80px'
                  : 'margin-left: 150px'
              "
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
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ExamplesCard from "./examplesCard.vue";
import ExamplesMobileCard from "./examplesMobileCard.vue";
export default {
  name: "swiper-example-loop-group",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
    ExamplesCard,
    ExamplesMobileCard,
  },
  data: () => ({
    examples: [
      {
        id: 1,
        title_ua: "Онлайн склад",
        title_en: "Online warehouse 'NewSend'",
        text_ua:
          "NewSend - Ваш онлайн склад! Це сучасний онлайн сервіс для відправки товарів вашим клієнтам",
        text_en:
          "NewSend - Your online warehouse! This is a modern online service for sending goods to your customers",
        img: "newSend.png",
      },
      {
        id: 2,
        title_ua: "Компанія пасажироперевізник MBus",
        title_en: "MBus passenger carrier company",
        text_ua:
          "Онлайн система, яка служить не тільки візитною карткою компанії MBus, а і дозволяє купити квиток на потрібну дату поїздки,  відстежити автобус у онлайн режимі та інші зручні сервіси",
        text_en:
          "An online system that serves not only business card of the MBus company, and allows buy a ticket for the desired travel date, track the bus online and others convenient services",
        img: "MBus.png",
      },
      {
        id: 3,
        title_ua: "Сайт навчального закладу",
        title_en: "Website of the educational institution",
        text_ua:
          "Сайт виконує роль не тільки візетівки закладу, а надає можливість відстежання розкладу навчального процесу, зручну адмін зону з різними правами доступу та інших сервісів необхідних для функціонування закладу",
        text_en:
          "The site performs the role of not only a business card of the institution, and provides an opportunity to track the educational schedule process, a convenient admin area with different access rights and other services necessary for the functioning of the institution",
        img: "kpk.png",
      },
      {
        id: 4,
        title_ua: "Велика бізнес - система",
        title_en: "A large business system",
        text_ua: "Hoozie - велика система для бізнесів у Гвадалахарі",
        text_en: "Hoozie is a great system for businesses in Guadalajara",
        img: "hoozie.png",
      },
      {
        id: 5,
        title_ua: "Покупка квитків на атракціони",
        title_en: "Buying tickets for attractions",
        text_ua: "Веб - сайт на якому можна придбати квитки на атракціони",
        text_en: "Website where you can buy tickets for attractions",
        img: "citypass.png",
      },
      {
        id: 6,
        title_ua: "Сайт-візитка для компанії VIVAMUS",
        title_en: "Visiting card site for the VIVAMUS company",
        text_ua:
          "Розробили сайт-візитку для компаній vivamus, яка працює на ринку Швейцарії за напрямком бухгалтерський облік",
        text_en:
          "We developed a site business card for vivamus companies, which works on the Swiss market in the area of ​​accounting accounting",
        img: "vivamus.png",
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
      spaceBetween: 20,
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