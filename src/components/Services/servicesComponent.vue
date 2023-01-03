<template>
  <div style="background-color: #000000">
    <v-main>
      <v-container>
        <v-row
          no-gutters
          :style="
            $vuetify.breakpoint.xs ? 'margin-top: 20px;' : 'margin-top: 83px;'
          "
        >
          <p class="componentTitle">
            {{ "header_services" | localize }}
          </p>
        </v-row>
        <services-list />
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
@media only screen and (max-width: 600px) {
  .Title {
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
  }
  .Subtitle {
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
  }
}
@media only screen and (min-width: 610px) {
  .Title {
    font-weight: 500;
    font-size: 48px;
    line-height: 66px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .Subtitle {
    font-weight: 600;
    font-size: 38px;
    color: #ffffff;
  }
}
</style>