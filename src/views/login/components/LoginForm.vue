<template>
  <div class="container_login">
    <div class="login_content">
      <img src="@/assets/images/pack27792.png" />
      <div class="title_login">ひさしぶり!</div>
      <div class="subtitle_login">¡Hola, te extrañamos!</div>
      <div class="form__content">
        <b-form @submit.prevent="sendData">
          <b-row>
            <b-col lg="12" md="12" sm="12">
              <div role="group">
                <label for="email" class="label_input">Email</label>
                <b-form-input
                  id="email"
                  type="email"
                  v-model="$v.formData.email.$model"
                  @blur="$v.formData.email.$touch()"
                  placeholder="usuario@"
                  autofocus
                  :class="{ error: $v.formData.email.$error }"
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
                  :type="typeInput"
                  v-model="formData.password"
                />
                <b-icon-eye-fill
                  v-if="isActive"
                  class="icon_eye"
                  @click.prevent="hidePassword"
                />
                <b-icon-eye-slash-fill
                  v-else
                  class="icon_eye"
                  @click.prevent="seePassword"
                />
                <span
                  v-if="$v.formData.password.$error"
                  class="help-block text_error"
                >
                  {{ messageValidation($v.formData.password) }}
                </span>
              </div>
            </b-col>
            <div class="recovery_password">
              <a href="#" class="a_recovery_password">
                ¿Olvido la contraseña?
              </a>
            </div>
            <b-col lg="12" md="12" sm="12">
              <b-button
                type="submit"
                class="btn_login"
                :disabled="isBusy || $v.$invalid"
              >
                <b-spinner v-if="isBusy" small />
                Acceder
              </b-button>
            </b-col>
          </b-row>
          <div class="d-flex align-items-center">
            <div class="border_1" />
            <div class="text_register">Regístrate también con</div>
            <div class="text_register_mobil">Logueate con RRSS</div>
            <div class="border_2" />
          </div>
          <div class="icon_redes_sociales d-flex justify-content-center">
            <div class="icon_red">
              <img src="@/assets/images/instagram.png" />
            </div>
            <div class="icon_red">
              <img src="@/assets/images/twitter.png" />
            </div>
            <div class="icon_red">
              <img src="@/assets/images/facebook.png" />
            </div>
          </div>
          <div class="text_register2">
            Quieres registrarte?
            <strong
              class="_text_strong"
              @click.prevent="() => $emit('register')"
              >Registrate</strong
            >
          </div>
        </b-form>
      </div>
    </div>
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
import { required, email } from "vuelidate/lib/validators";
import validationMixin from "@/mixins/validationMixin";
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
      typeInput: "password",
      isActive: true,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    formData: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  computed: {
    ...mapState("login", ["isBusy"])
  },
  methods: {
    ...mapActions("login", ["login"]),
    hidePassword() {
      const me = this;
      me.isActive = false;
      me.typeInput = "text";
    },
    seePassword() {
      const me = this;
      me.isActive = true;
      me.typeInput = "password";
    },
    sendData() {
      const me = this;
      me.login(me.formData);
    },
  },
};
</script>

<style lang="css">
.container_login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_content {
  position: relative;
  text-align: center;
  width: 343px;
}

.title_login {
  font-family: var(--fuente-poppins);
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 55px;
  text-align: center;
  letter-spacing: 0.065em;
  color: var(--white-color);
}

.subtitle_login {
  font-family: var(--fuente-roboto);
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.065em;
  color: var(--white-color);
}

.form__content {
  text-align: left;
}

.recovery_password {
  position: relative;
  margin-top: -15px;
  text-align: right;
  margin-bottom: 16px;
}

.a_recovery_password {
  font-family: var(--fuente-poppins);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.103101px;
  color: var(--second-color);
  text-decoration: none;
}

.a_recovery_password:hover {
  color: var(--second-color);
}

.btn_login {
  background: var(--second-color);
  border-radius: 10px;
  width: 100%;
  height: 60px;
  font-family: var(--fuente-roboto);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  color: #3e1149;
  margin-bottom: 43px;
}

.btn_login:hover {
  background: #3e1149;
  color: var(--second-color);
}

.text_register {
  font-family: var(--fuente-poppins);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.103101px;
  color: var(--white-color);
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 20px;
}

.text_register_mobil {
  font-family: var(--fuente-poppins);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.103101px;
  color: var(--white-color);
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 20px;
  display: none;
}

.border_1 {
  width: 80px;
  border: 2px solid var(--white-color);
  margin-bottom: 20px;
}

.border_2 {
  width: 80px;
  border: 2px solid var(--white-color);
  margin-bottom: 20px;
}

.icon_red {
  width: 51px;
  height: 51px;
  background: rgba(255, 255, 255, 0.47);
  border: 2px solid var(--white-color);
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 43px;
  margin-bottom: 41px;
}

.icon_red:last-child {
  margin-right: 0px;
}

.text_register2 {
  font-family: var(--fuente-roboto);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.065em;
  color: var(--white-color);
  margin-bottom: 132px;
}

._text_strong {
  color: var(--second-color);
  cursor: pointer;
}

/* ............. */
/*Media querys*/
/*** VERSION ESCRITORIO Y TABLETS PANTALLS GRANDE ***/
@media only screen and (min-width: 992px) and (max-width: 1200px) {
}
/*** VERSION TABLETS ***/
@media only screen and (min-width: 768px) and (max-width: 992px) {
}
/*** VERSION CELULAR ***/
@media only screen and (max-width: 767px) {
  .text_register {
    display: none;
  }

  .text_register_mobil {
    display: block;
  }

  .recovery_password {
    position: relative;
    margin-top: -10px;
    text-align: right;
    margin-bottom: 16px;
  }
}

/*** VERSION CELULAR PEQUEÑO ***/
@media only screen and (max-width: 340px) {
}
</style>
