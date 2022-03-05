<template>
  <div class="main">
    <div class="col-login">
      <header-login @back="back" />
      <registration-user @toAccess="back" v-if="isRegistration" />
      <login-form v-else @register="register" />
    </div>
    <div class="col-slider">
      <slider-login />
    </div>
  </div>
</template>

<script>
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
.main {
  display: flex;
  height: 100%;
  width: 100%;
  min-height: 100vh;
}

.main .col-login {
  background: var(--black-color);
  width: 100%;
}

.main .col-slider {
  background: var(--third-color);
  width: 100%;
}

/* ............. */
/*Media querys*/
/*** VERSION ESCRITORIO Y TABLETS PANTALLS GRANDE ***/
@media only screen and (min-width: 992px) and (max-width: 1200px) {
}
/*** VERSION TABLETS ***/
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .main .col-login {
    background: linear-gradient(180deg, #ca38ed -30.11%, #000000 100%);
  }

  .main .col-slider {
    display: none;
  }
}
/*** VERSION CELULAR ***/
@media only screen and (max-width: 767px) {
  .main .col-login {
    background: linear-gradient(180deg, #ca38ed -30.11%, #000000 100%);
  }

  .main .col-slider {
    display: none;
  }
}

/*** VERSION CELULAR PEQUEÑO ***/
@media only screen and (max-width: 340px) {
}
</style>
