<template>
  <v-row justify="center" no-gutters align="center">
    <span
      style="
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #0d0d0d;
        margin-left: 20px;
      "
      v-for="social in social"
      :key="social.id"
    >
      {{ social.title }}
    </span>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    social: [
      {
        id: 1,
        title: "Facebook",
        href: "",
      },
      {
        id: 2,
        title: "Linkedin",
        href: "",
      },
      {
        id: 3,
        title: "Telegram",
        href: "",
      },
      {
        id: 4,
        title: "Instagram",
        href: "",
      },
      {
        id: 5,
        title: "Behance",
        href: "",
      },
      {
        id: 6,
        title: "Twitter",
        href: "",
      },
    ],
  }),
};
</script>

<style>
</style>