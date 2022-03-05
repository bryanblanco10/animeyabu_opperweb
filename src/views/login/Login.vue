<template>
  <div class="d-flex">
    <div class="background_black">
      <header-login @back="back" />
      <registration-user @toAccess="back" v-if="isRegistration" />
      <login-form v-else @register="register" />
    </div>
    <div class="background_primary">
      <slider-login />
    </div>
  </div>
</template>

<script>
import {} from "bootstrap-vue";
import LoginForm from "./components/LoginForm";
import SliderLogin from "./components/SliderLogin";
import HeaderLogin from "./components/HeaderLogin";
import RegistrationUser from "./components/RegistrationUser";

export default {
  components: {
    LoginForm,
    SliderLogin,
    HeaderLogin,
    RegistrationUser
  },
  data() {
    return {
      isRegistration: false,
    }
  },
  methods: {
    register() {
      const me = this;
      me.isRegistration = true;
    },
    back() {
      const me = this;
      me.isRegistration = false;
    }
  },
};
</script>

<style lang="css">

.background_black {
  background: var(--black-color);
  width: 100%;
  height: auto;
}

.background_primary {
  background: var(--primary-color);
  width: 100%;
  height: auto;
}

/* ............. */
/*Media querys*/
/*** VERSION ESCRITORIO Y TABLETS PANTALLS GRANDE ***/
@media only screen and (min-width: 992px) and (max-width: 1200px) {
}
/*** VERSION TABLETS ***/
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .background_black {
    background: linear-gradient(180deg, #ca38ed -30.11%, #000000 100%);
  }

  .background_primary {
    display: none;
  }
}
/*** VERSION CELULAR ***/
@media only screen and (max-width: 767px) {
  .background_black {
    background: linear-gradient(180deg, #ca38ed -30.11%, #000000 100%);
  }

  .background_primary {
    display: none;
  }
}

/*** VERSION CELULAR PEQUEÑO ***/
@media only screen and (max-width: 340px) {
}
</style>
