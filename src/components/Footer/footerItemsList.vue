<template>
  <v-row justify="center" style="margin-top: 62px;">
    <v-col class="px-10">
      <v-row no-gutters justify="center">
        <v-col cols="3" v-for="item in itemsList" :key="item.id">
          <p style="color: white">{{ item.title }}</p>
          <p
            style="color: white; cursor: pointer"
            v-for="subitems in item.subitems"
            :key="subitems.id"
          >
            {{ subitems.title }}
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    itemsList: [
      {
        id: 1,
        title: "About Us",
        subitems: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            title: "Pulvinar ultricies integer blandit faucibus mattis erat.",
          },
          {
            id: 3,
            title: "Pulvinar pharetra nullam in.",
          },
        ],
      },
      {
        id: 2,
        title: "Contact us",
        subitems: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            title: "Pulvinar ultricies integer blandit faucibus mattis erat.",
          },
          {
            id: 3,
            title: "Pulvinar pharetra nullam in.",
          },
        ],
      },
      {
        id: 3,
        title: "FAQ",
        subitems: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            title: "Pulvinar ultricies integer blandit faucibus mattis erat.",
          },
          {
            id: 3,
            title: "Pulvinar pharetra nullam in.",
          },
        ],
      },
      {
        id: 4,
        title: "Program",
        subitems: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            title: "Pulvinar ultricies integer blandit faucibus mattis erat.",
          },
          {
            id: 3,
            title: "Pulvinar pharetra nullam in.",
          },
        ],
      },
    ],
  }),
};
</script>

<style>
</style>