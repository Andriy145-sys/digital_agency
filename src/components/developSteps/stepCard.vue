<template>
  <v-card class="stepCard" color="black">
    <v-row no-gutters align="start" v-if="!$vuetify.breakpoint.xs">
      <v-col cols="2">
        <span class="stepNumber">0{{ step.id }}</span>
      </v-col>
      <v-col cols="10">
        <span class="stepTitle">{{ step.title | localize }}</span>
      </v-col>
    </v-row>
    <v-col cols="12" v-if="$vuetify.breakpoint.xs" class="py-0">
      <v-row no-gutters justify="center">
        <output class="stepNumber">0{{ step.id }}</output>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      style="text-align: left"
      class="px-0 py-0"
      v-if="$vuetify.breakpoint.xs"
    >
      <span class="stepTitle">{{ step.title | localize }}</span>
    </v-col>
    <p
      class="stepDescription"
      v-html="$options.filters.localize(step.description)"
    ></p>
  </v-card>
</template>

<script>
export default {
  props: {
    step: {
      require: true,
    },
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .stepCard {
    background: black;
    width: 300px;
    height: max-content;
    margin-bottom: 30px;
  }
  .stepNumber {
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    color: #fea31e;
  }
  .stepTitle {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
  }
  .stepDescription {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-top: 10px;
    color: #c7c7c7;
  }
}
@media only screen and (min-width: 610px) {
  .stepCard {
    background: black;
    width: 300px;
    height: 300px;
    margin-left: 65px;
  }
  .stepNumber {
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: flex-end;
    text-align: justify;
    color: #fea31e;
    margin-right: 25px;
  }
  .stepTitle {
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;
  }
  .stepDescription {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #c7c7c7;
    margin-top: 20px;
  }
}
</style>