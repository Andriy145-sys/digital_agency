<template>
  <div style="background: #0d0d0d; border-radius: 10px">
    <v-main>
      <v-container>
        <v-row
          no-gutters
          align="center"
          justify="center"
          style="margin: 50px 0px 45px 0px"
        >
          <v-col
            cols="12"
            xl="6"
            lg="7"
            md="7"
            sm="12"
            :style="
              $vuetify.breakpoint.xs ? 'padding: 30px;' : 'margin-right: 127px'
            "
          >
            <span class="componentTitle">{{
              "call_me_back_title" | localize
            }}</span>
            <p class="componentSubtitle" style="text-align: left">
              {{ "call_me_back_description" | localize }}
            </p>
          </v-col>
          <v-col
            cols="12"
            xl="3"
            lg="3"
            md="3"
            sm="12"
            :style="
              $vuetify.breakpoint.xs
                ? 'margin-top: 50px; text-align: center;'
                : ''
            "
          >
            <v-row no-gutters justify="center">
              <div style="width: 300px">
                <v-text-field
                  dense
                  class="phoneNumber"
                  placeholder="Номер телефону*"
                  background-color="#0d0d0d"
                  style="
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 20px;
                    color: white;
                    filter: drop-shadow(1px 4px 10px rgba(255, 255, 255, 0.3));
                  "
                  hide-details
                  label="Номер телефону*"
                  outlined
                  color="#b7b2b2"
                  width="300px"
                />
              </div>
            </v-row>
            <v-btn
              width="300px"
              height="45px"
              class="main_btn"
              style="margin-top: 15px"
            >
              <v-col cols="11" style="text-align: center">
                {{ "order_consultation" | localize }}
              </v-col>
              <v-col cols="1">
                <v-row no-gutters align="center" justify="end">
                  <v-icon small> mdi-arrow-top-right </v-icon>
                </v-row>
              </v-col>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.v-text-field--outlined fieldset {
  color: #b7b2b2 !important;
}
.phoneNumber .v-label {
  color: #656565;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  padding: 0px 0px 13px 0px;
}
.phoneNumber {
  border-radius: 20px;
  width: 300px;
  height: 45px;
}
</style>