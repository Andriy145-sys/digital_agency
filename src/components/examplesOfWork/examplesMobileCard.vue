<template>
  <div
    style="margin-bottom: 30px"
    :style="
      $vuetify.breakpoint.xs ? '' : 'margin-right: 25px; margin-left: 20px; '
    "
  >
    <div
      style="
        width: 300px;
        height: 210px;
        margin-left: 29px;
        margin-top: 2px;
        position: absolute;
        z-index: 20;
      "
    >
      <img
        height="202px"
        width="300px"
        style="object-fit: cover; padding-top: 8px"
        :src="require(`@/assets/img/${item.img}`)"
      />
    </div>
    <img
      src="@/assets/img/tablet.svg"
      style="position: absolute; z-index: 10"
    />
    <v-card
      width="330px"
      class="mt-15"
      style="
        padding: 180px 10px 34px 10px;
        background: white;
        border-radius: 20px;
      "
    >
      <p
        style="
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          color: #0d0d0d;
          padding-right: 30px;
        "
      >
        {{ item.title }}
      </p>
      <p
        style="
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #4f4f4f;
          padding-right: 30px;
        "
      >
        {{ item.text }}
      </p>
      <div
        style="width: 100%; border: 0.5px solid #969696; margin-top: 30px"
      ></div>
      <v-row no-gutters align="center" style="margin-top: 10px">
        <span
          style="
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: #0d0d0d;
          "
          >Переглянути проект</span
        >
        <img style="margin-left: 10px" src="@/assets/img/arrowRight.svg" />
      </v-row>
    </v-card>
  </div>
</template>
  
  <script>
export default {
  props: {
    item: {},
  },
};
</script>
  
  <style>
</style>