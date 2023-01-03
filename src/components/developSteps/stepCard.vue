<template>
  <v-card class="stepCard" color="black">
    <v-row no-gutters align="center">
      <v-col cols="2">
        <span class="stepNumber">0{{ step.id }}</span>
      </v-col>
      <v-col cols="10">
        <span class="stepTitle">{{ step.title }}</span>
      </v-col>
    </v-row>
    <p class="stepDescription" v-html="step.description"></p>
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
</style>