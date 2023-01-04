<template>
  <div>
    <v-footer class="backgroundFooter">
      <v-main>
        <v-container>
          <v-row no-gutters align="center">
            <v-col>
              <v-row
                no-gutters
                align="center"
                justify="start"
                v-if="!$vuetify.breakpoint.xs"
              >
                <v-icon small color="#0d0d0d" style="margin-right: 10px">
                  mdi-copyright
                </v-icon>
                <span
                  style="
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 22px;
                    color: #0d0d0d;
                  "
                >
                  2022-2023<output style="margin-left: 10px"
                    >IT-company BMAX</output
                  >
                </span>
              </v-row>
            </v-col>
            <v-col>
              <footer-social-list />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-footer>
  </div>
</template>

<script>
import footerSocialList from "./footerSocialList.vue";
export default {
  components: { footerSocialList },
};
</script>

<style>
.backgroundFooter {
  background: white !important;
}
</style>