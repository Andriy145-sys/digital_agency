<template>
  <div style="background-color: #111111">
    <v-main>
      <v-container>
        <v-row no-gutters style="margin-top: 83px;" class="ml-5">
          <v-col cols="1" class="pt-3">
            <div class="cubeFirst"></div>
            <div class="cubeSecond"></div>
          </v-col>
          <v-col cols="6">
            <span style="font-weight: 500; font-size: 20px; color: #ffffff">
              What can we do for you
            </span>
            <br>
            <span style="font-weight: 600; font-size: 38px; color: #ffffff">
              Services we provide for you
            </span>
          </v-col>
        </v-row>
        <services-list/>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import servicesList from "./servicesList.vue";
export default {
  components: { servicesList },
};
</script>

<style>
.cubeFirst {
  width: 50px;
  height: 50px;
  background: #8b002a;
  position: absolute;
  z-index: 10;
  margin-top: 10px;
}
.cubeSecond {
  width: 50px;
  height: 50px;
  background: #e20044;
  position: absolute;
  margin-left: 20px;
}
</style>