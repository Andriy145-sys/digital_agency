<template>
  <v-main>
    <v-container>
      <v-card class="contactCard">
        <v-row
          no-gutters
          align="end"
          justify="center"
          style="opacity: 1; position: absolute; z-index: 50"
          :style="
            $vuetify.breakpoint.xs
              ? 'margin: 50px 20px 50px 20px;'
              : 'margin-top: 10px;'
          "
        >
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" class="white--text">
            <span class="componentTitle">{{ "our_contact" | localize }}</span>
            <p class="contact_text">
              {{ "our_contact_description" | localize }}
            </p>
            <v-row no-gutters align="start" style="margin-top: 30px">
              <v-col cols="12" xl="6" lg="6" md="6" sm="12">
                <p class="sectionSubtitle">{{ "label_phone" | localize }}</p>
                <span class="contact_item">
                  <a
                    style="text-decoration: none; color: white; cursor: pointer"
                    href="tel: +380639344328"
                    >+38 (063) 934 43 28 <br /> </a
                ></span>
                <span class="contact_item">
                  <a
                    style="text-decoration: none; color: white; cursor: pointer"
                    href="tel: +380977291012"
                    >+38 (097) 729 10 12 <br
                  /></a>
                </span>
              </v-col>
              <v-col
                cols="12"
                xl="6"
                lg="6"
                md="6"
                sm="12"
                :style="$vuetify.breakpoint.xs ? 'margin-top: 30px;' : ''"
              >
                <p class="sectionSubtitle">
                  {{ "label_write_to_us" | localize }}
                </p>
                <p class="contact_item">
                  <a
                    style="text-decoration: none; color: white; cursor: pointer"
                    href="mailto: info@bmax.com"
                    >info@bmax.com</a
                  >
                </p>
              </v-col>
            </v-row>
            <p class="sectionSubtitle" style="margin-top: 30px">
              {{ "label_visit_us" | localize }}
            </p>
            <p class="contact_item">м. коломия, вул. Відродження 22а</p>
          </v-col>
          <v-col
            cols="12"
            xl="4"
            lg="4"
            md="4"
            sm="12"
            :style="$vuetify.breakpoint.xs ? 'text-align: center;' : ''"
          >
            <v-btn
              width="300px"
              height="45px"
              class="main_btn"
              @click="$emit('showContactForm')"
            >
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
@media only screen and (max-width: 600px) {
  .contact_text {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .sectionSubtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    margin-bottom: 15px;
    color: #ffffff;
  }
  .contact_item {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .contactCard {
    background-color: #0d0d0d !important;
    height: 614px;
    width: 100%;
    border-radius: 30px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .backgroundImg {
    background-image: url("../../assets/img/contactBackgroundImg.svg");
    opacity: 0.5;
    width: 100%;
    height: 252px;
    background-size: cover;
  }
}
@media only screen and (min-width: 610px) {
  .contact_text {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 0px;
  }
  .sectionSubtitle {
    font-weight: 400;
    font-size: 20px;
    line-height: 15px;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 15px;
  }
  .contact_item {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    color: #ffffff;
  }
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
}
</style>