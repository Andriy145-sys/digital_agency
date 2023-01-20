<template>
  <v-main>
    <v-container>
      <v-col class="px-0">
        <p class="componentTitle">{{ 'why_they_choose_us' | localize }}</p>
        <div class="aboutUsText">
          <div
            v-html="$options.filters.localize('about_us_before_ul_text')"
          ></div>
          <div v-html="$options.filters.localize('about_us_ul')"></div>
          <div
            v-html="$options.filters.localize('about_us_after_ul_text')"
          ></div>
        </div>
      </v-col>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style>
.aboutUsText {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  margin-bottom: 100px;
  padding-right: 30px;
}
.aboutUsText::-webkit-scrollbar {
  width: 2px;
}
.aboutUsText::-webkit-scrollbar-track {
  background: #c5c5c5;
}
.aboutUsText::-webkit-scrollbar-thumb {
  background: #fea31e;
}
.aboutUsText::-webkit-scrollbar-thumb:hover {
  background: #8a5300;
}
</style>