<template>
  <v-col>
    <v-row no-gutters align="center">
      <v-text-field
        :style="$vuetify.breakpoint.xs ? '' : 'padding-right: 10px'"
        dense
        outlined
        label="Ваше ім’я"
        color="#0D0D0D"
        v-model="user.name"
        :class="
          nameError.length
            ? 'error_text-field'
            : !$v.user.name.$invalid && user.name
            ? 'success_text-field'
            : 'text_field'
        "
        :error-messages="nameError"
      />
      <v-text-field
        :style="$vuetify.breakpoint.xs ? '' : 'padding-left: 10px'"
        dense
        outlined
        label="Номер телефону"
        v-mask="'+##################'"
        color="#0D0D0D"
        v-model="user.phone_number"
        :class="
          phoneNumberError.length
            ? 'error_text-field'
            : !$v.user.phone_number.$invalid && user.phone_number
            ? 'success_text-field'
            : 'text_field'
        "
        :error-messages="phoneNumberError"
      />
    </v-row>
    <v-row no-gutters align="center">
      <v-text-field
        :style="$vuetify.breakpoint.xs ? '' : 'padding-right: 10px'"
        dense
        outlined
        label="Ваш Email"
        color="#0D0D0D"
        v-model="user.email"
        :class="
          emailError.length
            ? 'error_text-field'
            : !$v.user.email.$invalid && user.email
            ? 'success_text-field'
            : 'text_field'
        "
        :error-messages="emailError"
      />
      <v-text-field
        :style="$vuetify.breakpoint.xs ? '' : 'padding-left: 10px'"
        dense
        outlined
        label="Назва компанії"
        color="#0D0D0D"
        v-model="user.company_name"
        :class="
          companyNameError.length
            ? 'error_text-field'
            : !$v.user.company_name.$invalid && user.company_name
            ? 'success_text-field'
            : 'text_field'
        "
        :error-messages="companyNameError"
      />
    </v-row>
    <v-textarea
      dense
      outlined
      label="Опишіть ваш проєкт"
      color="#0D0D0D"
      height="80px"
      v-model="user.project_description"
    />
    <v-row no-gutters :justify="$vuetify.breakpoint.xs ? 'center' : 'end'">
      <v-btn
        :width="$vuetify.breakpoint.xs ? '100%' : '220px'"
        height="45px"
        class="main_btn"
        style="margin-top: 10px"
        @click="sendMessage"
      >
        <v-row justify="center" no-gutters align="center">
          {{ "btn_send" | localize }}
          <v-icon small style="margin-left: 10px"> mdi-arrow-top-right </v-icon>
        </v-row>
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    user: {},
  }),
  validations: {
    user: {
      name: {
        required,
      },
      phone_number: {
        required,
        minLength: minLength(13),
        maxLength: maxLength(18),
      },
      email: {
        required,
        email,
      },
      company_name: {
        required,
      },
    },
  },
  methods: {
    sendMessage() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(this.user);
        this.$emit("successSendMessage");
      }
    },
  },
  computed: {
    nameError() {
      const errors = [];
      if (!this.$v.user.name.$dirty) {
        return errors;
      }
      !this.$v.user.name.required && errors.push("Обов’язкове поле");
      return errors;
    },
    phoneNumberError() {
      const errors = [];
      if (!this.$v.user.phone_number.$dirty) {
        return errors;
      } else if (!this.$v.user.phone_number.required) {
        errors.push("Обов’язкове поле");
        return errors;
      }
      if (
        !this.$v.user.phone_number.minLength ||
        !this.$v.user.phone_number.maxLength
      ) {
        errors.push("Номер телефону введено некоректно");
      }
      return errors;
    },
    emailError() {
      const errors = [];
      if (!this.$v.user.email.$dirty) {
        return errors;
      }
      !this.$v.user.email.required && errors.push("Обов’язкове поле");
      if (!this.$v.user.email.email) {
        errors.push("Email введено некоректно");
        return errors;
      }
      return errors;
    },
    companyNameError() {
      const errors = [];
      if (!this.$v.user.company_name.$dirty) {
        return errors;
      }
      !this.$v.user.company_name.required && errors.push("Обов’язкове поле");
      return errors;
    },
  },
};
</script>

<style>
.v-text-field--outlined .v-label {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #676767;
  padding: 0px 0px 13px 0px;
}
.error_text-field fieldset {
  color: #a10909 !important;
  border-radius: 20px;
}
.error_text-field .error--text {
  color: #a10909 !important;
  caret-color: #a10909 !important;
}
.success_text-field fieldset {
  color: #fea31e !important;
  border-radius: 20px;
}
.text_field {
  color: #0d0d0d !important;
  border-radius: 20px;
}
</style>