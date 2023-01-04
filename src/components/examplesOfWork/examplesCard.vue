<template>
  <div style="margin-right: 25px; margin-left: 20px">
    <div
      style="
        width: 350px;
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
      elevation="0"
      width="350px"
      class="mt-15"
      style="padding: 180px 10px 0px 10px"
    >
      <p
        style="
          font-weight: 500;
          font-size: 24px;
          line-height: 33px;
          padding-top: 10px;
          color: #0d0d0d;
        "
      >
        {{ item.title }}
      </p>
      <p
        style="
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;

          color: #4f4f4f;
        "
      >
        {{ item.text }}
      </p>
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