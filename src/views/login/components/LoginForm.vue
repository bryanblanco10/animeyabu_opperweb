<template>
  <div class="container_login">
    <div class="login_content">
      <img src="@/assets/images/pack27792.png" />
      <div class="title_login">ひさしぶり!</div>
      <div class="subtitle_login">¡Hola, te extrañamos!</div>
      <div class="form__content">
        <b-form>
          <b-row>
            <b-col lg="12" md="12" sm="12">
              <div role="group">
                <label for="name" class="label_input">Email</label>
                <b-form-input id="name" type="email" placeholder="usuario@" />
              </div>
            </b-col>
            <b-col lg="12" md="12" sm="12">
              <div role="group">
                <label for="password" class="label_input">Contraseña</label>
                <b-form-input id="password" type="password" />
              </div>
            </b-col>
            <div class="recovery_password">
              <a href="#" class="a_recovery_password"> ¿Olvido la contraseña? </a>
            </div>
            <b-col lg="12" md="12" sm="12">
              <b-button class="btn_login">
                <b-spinner v-if="isBusy" small />
                Acceder
              </b-button>
            </b-col>
          </b-row>
          <div class="d-flex align-items-center">
            <div class="border_1" />
            <div class="text_register"> Regístrate también con </div>
            <div class="text_register_mobil"> Logueate con RRSS </div>
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
            Quieres registrarte? <strong class="_text_strong">Registrate</strong>
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
} from "bootstrap-vue";

export default {
  components: {
    BCol,
    BRow,
    BButton,
    BForm,
    BSpinner,
    BFormInput,
  },
  data() {
    return {
      isBusy: false,
    };
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
  top: 23.32px;
  text-align: center;
  width: 343px;
}

.title_login {
  font-family: var(--fuente-poppins);
  font-style: normal;
  font-weight: 900;
  font-size: 36.5385px;
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

/* Input */
.label_input {
  font-family: var(--fuente-poppins);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.103101px;
  color: var(--white-color);
}

.form-control {
  background: rgba(255, 255, 255, 0.47);
  border: 2px solid var(--white-color);
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 60px;
}

.form-control::placeholder {
  color: var(--white-color);
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
  color: #E487FB;
  text-decoration: none;
}

.a_recovery_password:hover {
  color: #E487FB;
}

.btn_login {
  background: #E487FB;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  font-family: var(--fuente-roboto);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  color: #3E1149;
  margin-bottom: 43px;
}

.btn_login:hover {
  background: #3E1149;
  color: #E487FB;
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
  color: #E487FB
}

/* ............. */
  /*Media querys*/
  /*** VERSION ESCRITORIO Y TABLETS PANTALLS GRANDE ***/
  @media only screen and (min-width: 992px) and (max-width: 1200px) 
  {}
  /*** VERSION TABLETS ***/
  @media only screen and (min-width: 768px) and (max-width: 992px)
  {}
  /*** VERSION CELULAR ***/
  @media only screen and (max-width: 767px)
  {
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
  @media only screen and (max-width: 340px)
  {}

</style>
