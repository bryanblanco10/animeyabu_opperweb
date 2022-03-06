<template>
  <div class="form__content">
    <b-form @submit.prevent="sendData">
      <b-row>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="name" class="label_input">Nombre</label>
            <b-form-input id="name" v-model="formData.name" autofocus />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="lastname" class="label_input">Apellido</label>
            <b-form-input id="lastname" v-model="formData.lastname" />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="phone" class="label_input">Teléfono</label>
            <b-form-input
              id="phone"
              v-model="$v.formData.telephone.$model"
              @blur="$v.formData.telephone.$touch()"
              :class="{ error: $v.formData.telephone.$error }"
            />
            <span
              v-if="$v.formData.telephone.$error"
              class="help-block text-left text_error"
            >
              {{ messageValidation($v.formData.telephone) }}
            </span>
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="identification" class="label_input"
              >Número de identificación</label
            >
            <b-form-input
              id="identification"
              v-model="$v.formData.identy_document.$model"
              @blur="$v.formData.identy_document.$touch()"
              :class="{ error: $v.formData.identy_document.$error }"
            />
            <span
              v-if="$v.formData.identy_document.$error"
              class="help-block text-left text_error"
            >
              {{ messageValidation($v.formData.identy_document) }}
            </span>
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="email" class="label_input">Email</label>
            <b-form-input
              id="email"
              type="email"
              v-model="$v.formData.email.$model"
              @blur="$v.formData.email.$touch()"
              :class="{ error: $v.formData.email.$error }"
              placeholder="usuario@yabu.com"
            />
            <span
              v-if="$v.formData.email.$error"
              class="help-block text-left text_error"
            >
              {{ messageValidation($v.formData.email) }}
            </span>
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group" style="height: 100px">
            <label for="password" class="label_input">Contraseña</label>
            <b-form-input
              id="password"
              :type="typeInput1"
              v-model="formData.password"
            />
            <b-icon-eye-fill
              v-if="isActive1"
              class="icon_eye"
              @click.prevent="hidePassword('1')"
            />
            <b-icon-eye-slash-fill
              v-else
              class="icon_eye"
              @click.prevent="seePassword('1')"
            />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group" style="height: 100px">
            <label for="confirmpassword" class="label_input"
              >Confirmar contraseña</label
            >
            <b-form-input
              id="confirmpassword"
              :type="typeInput2"
              v-model="$v.formData.password_confirmation.$model"
              @blur="$v.formData.password_confirmation.$touch()"
              :class="{ error: $v.formData.password_confirmation.$error }"
            />
            <b-icon-eye-fill
              v-if="isActive2"
              class="icon_eye active"
              @click.prevent="hidePassword('2')"
            />
            <b-icon-eye-slash-fill
              v-else
              class="icon_eye"
              @click.prevent="seePassword('2')"
            />
            <span
              v-if="$v.formData.password_confirmation.$error"
              class="help-block text-left right_ text_error"
            >
              {{ messageValidation($v.formData.password_confirmation) }}
            </span>
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <b-button type="submit" class="btn_register" :disabled="isBusy || $v.$invalid">
            <b-spinner v-if="isBusy" small />
            Registrar
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BCol,
  BRow,
  BButton,
  BForm,
  BSpinner,
  BFormInput,
  BIconEyeFill,
  BIconEyeSlashFill,
} from "bootstrap-vue";
import validationMixin from "@/mixins/validationMixin";
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    BCol,
    BRow,
    BButton,
    BForm,
    BSpinner,
    BFormInput,
    BIconEyeFill,
    BIconEyeSlashFill,
  },
  mixins: [validationMixin],
  data() {
    return {
      typeInput1: "password",
      typeInput2: "password",
      isActive1: true,
      isActive2: true,
      formData: {
        telephone: "",
        name: "",
        lastname: "",
        identy_document: "",
        type_user_id: 2,
        verify_tc: "1",
        password: "",
        password_confirmation: "",
        email: "",
      },
    };
  },
  validations: {
    formData: {
      telephone: {
        required,
        numeric,
        minLength: minLength(7),
        maxLength: maxLength(15),
      },
      name: {
        required,
      },
      lastname: {
        required,
      },
      identy_document: {
        required,
        numeric,
      },
      password: {
        required,
      },
      password_confirmation: {
        required,
        sameAsPassword: sameAs("password"),
      },
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    ...mapState("register", ["isBusy"])
  },
  methods: {
    ...mapActions("register", ["register"]),
    hidePassword(type) {
      const me = this;
      if (type == "1") {
        me.isActive1 = false;
        me.typeInput1 = "text";
      } else {
        me.isActive2 = false;
        me.typeInput2 = "text";
      }
    },
    seePassword(type) {
      const me = this;
      if (type == "1") {
        me.isActive1 = true;
        me.typeInput1 = "password";
      } else {
        me.isActive2 = true;
        me.typeInput2 = "password";
      }
    },
    sendData() {
      const me = this;
      me.register(me.formData);
    },
  },
};
</script>

<style></style>
