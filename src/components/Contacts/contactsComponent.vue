<template>
  <v-main>
    <v-container>
      <v-card class="contactCard">
        <v-row
          no-gutters
          align="end"
          justify="center"
          style="opacity: 1; position: absolute; z-index: 50; margin-top: 10px;"
        >
          <v-col cols="6" class="white--text">
            <span class="componentTitle">наші Контакти</span>
            <p
              style="
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                text-transform: uppercase;
                color: #ffffff;
                margin-bottom: 0px;
              "
            >
              Ми завжді раді замовленням, новим пропозиціям та відгукам наших
              клієнтів
            </p>
            <v-row no-gutters align="start" style="margin-top: 30px">
              <v-col>
                <p class="sectionSubtitle">Телефон:</p>
                <span
                  v-for="i in 3"
                  :key="i"
                  style="
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 22px;
                    text-transform: uppercase;
                    color: #ffffff;
                  "
                  >+38 (098) 650 45 42 <br
                /></span>
              </v-col>
              <v-col>
                <p class="sectionSubtitle">напишіть нам:</p>
                <p
                  style="
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 22px;
                    text-transform: uppercase;
                  "
                >
                  beemax.compani@gmail.com
                </p>
              </v-col>
            </v-row>
            <p class="sectionSubtitle" style="margin-top: 30px">
              Відвідайте нас:
            </p>
            <p
              style="
                font-weight: 600;
                font-size: 16px;
                line-height: 22px;
                text-transform: uppercase;
              "
            >
              м. коломия, вул. Відродження 22а
            </p>
          </v-col>
          <v-col cols="4">
            <v-btn width="300px" height="45px" class="main_btn">
              <v-col cols="11" style="text-align: center">
                {{ "main_btn" | localize }}
              </v-col>
              <v-col cols="1">
                <v-row no-gutters align="center" justify="end">
                  <v-icon small> mdi-arrow-top-right </v-icon>
                </v-row>
              </v-col>
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters justify="end">
          <div class="backgroundImg"></div>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style>
.contactCard {
  background-color: #0d0d0d !important;
  height: 500px;
  width: 100%;
  padding: 50px 100px 50px 20px;
  border-radius: 30px !important;
}
.backgroundImg {
  background-image: url("../../assets/img/contactBackgroundImg.svg");
  opacity: 0.5;
  width: 528px;
  height: 500px;
}
.sectionSubtitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 15px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 15px;
}
</style>