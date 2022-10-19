<template>
  <v-card
    width="332px"
    height="232px"
    color="#000000"
    style="margin-bottom: 16px; margin-left: 16px; padding: 25px"
  >
    <v-icon color="#E20044" x-large>mdi-lightbulb-on-outline mdi-38px</v-icon
    ><br /><br />
    <p
      style="
        font-weight: 600;
        font-size: 20px;
        line-height: 140%;
        color: #ffffff;
      "
      >{{ service.title }}</p
    >
    <p
      style="
        font-weight: 400;
        font-size: 11px;
        line-height: 140%;
        color: #ffffff;
      "
    >
      {{ service.description }}
    </p>
  </v-card>
</template>

<script>
export default {
  props: {
    service: {
      require: true,
    },
  },
};
</script>

<style>
</style>