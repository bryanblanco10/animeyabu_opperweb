<template>
  <div class="d-flex">
    <div class="background_black">
      <header-login />
      <login-form />
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

export default {
  components: {
    LoginForm,
    SliderLogin,
    HeaderLogin,
  },
};
</script>

<style lang="css">
.background_black {
  background: var(--black-color);
  width: 100%;
  height: 1024px;
}

.background_primary {
  background: var(--primary-color);
  width: 100%;
  height: 1024px;
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
