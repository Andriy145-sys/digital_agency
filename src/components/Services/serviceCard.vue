<template>
  <v-card width="320px" height="300px" color="#000000" class="serviceCard">
    <v-col class="px-0 py-0">
      <v-row no-gutters justify="end">
        <img src="@/assets/img/arrowRightTop.svg" />
      </v-row>
      <div class="numberService">0{{ service.id }}</div>
      <span class="cardTitle">{{ service.title }}</span>
    </v-col>
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
@media only screen and (max-width: 600px) {
  .cardTitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
  }
  .cardText {
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;
    color: #ffffff;
  }
  .serviceCard {
    margin-bottom: 50px;
    padding: 25px;
    border: 2px solid #ebebeb !important;
    border-radius: 1px;
  }
  .numberService {
    font-weight: 500;
    font-size: 48px;
    line-height: 66px;
    color: #5e5e5e;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    width: 100%;
  }
}
@media only screen and (min-width: 610px) {
  .cardTitle {
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: flex-end;
    color: #ffffff;
  }
  .serviceCard {
    margin-bottom: 50px;
    margin-left: 35px;
    padding: 25px;
    border: 2px solid #ebebeb !important;
    border-radius: 1px;
  }
  .numberService {
    font-weight: 500;
    font-size: 48px;
    line-height: 66px;
    color: #5e5e5e;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    width: 100%;
  }
}
</style>