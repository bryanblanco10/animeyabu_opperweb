<template>
  <div class="container_login">
    <div class="login_content">
      <div class="d-flex align-items-center">
        <img src="@/assets/images/pack28181.png" />
        <div>
          <div class="title_login">ひさしぶり!</div>
          <div class="subtitle_login">¡Bienvenido(a)!</div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <label for="name" class="label_input">Tipo de persona</label>
        <b-form-radio-group
          id="radio-group-1"
          v-model="selected"
          @input="changeForm"
          plain
        >
          <b-form-radio value="1">Natural</b-form-radio>
          <b-form-radio value="2">Juridica</b-form-radio>
        </b-form-radio-group>
      </div>
      <natural-person-registration-form v-if="isNaturalPerson" />
      <legal-person-registration-form v-else />
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
        Ya estas registrado?
        <strong class="_text_strong" @click.prevent="() => $emit('toAccess')"
          >Acceder</strong
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  BFormRadioGroup,
  BFormRadio,
} from "bootstrap-vue";
import NaturalPersonRegistrationForm from "./NaturalPersonRegistrationForm";
import LegalPersonRegistrationForm from "./LegalPersonRegistrationForm";

export default {
  components: {
    BFormRadioGroup,
    BFormRadio,
    NaturalPersonRegistrationForm,
    LegalPersonRegistrationForm
  },
  data() {
    return {
      selected: '1',
      options: [
        { text: 'Natural', value: '1' },
        { text: 'Juridica', value: '2' },
      ],
      isNaturalPerson: true,
    };
  },
  methods: {
    changeForm() {
      const me = this;

      me.selected == '1' ? me.isNaturalPerson = true : me.isNaturalPerson = false;
    }
  }
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
  font-size: 35;
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

.btn_register {
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
  margin-top: 33px;
}

.btn_register:hover {
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
  color: #E487FB;
  cursor: pointer;
}

/* radio button */
.form-check-input {
  background: rgba(255, 255, 255, 0.47);
  width: 20px;
  height: 20px;
}

.form-check-input:checked {
  background-color: #E487FB;
  border-color: var(--white-color);
}

.form-check-label {
  font-family: var(--fuente-poppins);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.103101px;
  color: var(--white-color);
  position: relative;
  top: -2.5px;
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

    .form-check-label {
      top: 0px;
    }
  }

  /*** VERSION CELULAR PEQUEÑO ***/
  @media only screen and (max-width: 340px)
  {}

</style>
