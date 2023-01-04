<template>
  <v-row justify="end" no-gutters align="center">
    <span class="socialName" v-for="social in social" :key="social.id">
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
@media only screen and (max-width: 600px) {
  .socialName {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #0d0d0d;
    margin-left: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
}
@media only screen and (min-width: 610px) {
  .socialName {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #0d0d0d;
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>