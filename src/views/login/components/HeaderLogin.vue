<template>
  <div class="header_login">
    <div class="d-flex align-items-center">
      <img src="@/assets/images/image1.png" class="__logo" />
      <div class="name_application">
        anime<strong class="__strong">yabu.</strong>
      </div>
    </div>
    <div class="__vector" @click.prevent="() => $emit('back')">
      <img src="@/assets/images/barra.png" />
      <img src="@/assets/images/flecha.png" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
  .header_login {
    padding-top: 19px;
    padding-left: 23px;
  }

  .name_application {
    font-family: var(--fuente-roboto);
    font-weight: 900;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.065em;
    color: var(--white-color);
    margin-left: 14px;
  }

  .__vector {
    position: relative;
    top: 24px;
    margin-left: 10px;
    cursor: pointer;
  }

  /* ............. */
  /*Media querys*/
  /*** VERSION ESCRITORIO Y TABLETS PANTALLS GRANDE ***/
  @media only screen and (min-width: 992px) and (max-width: 1200px) 
  {}
  /*** VERSION TABLETS ***/
  @media only screen and (min-width: 768px) and (max-width: 992px)
  {
    .__logo {
      display: none;
    }

    .name_application {
      display: none;
    }

    .__vector {
      position: relative;
      top: 10px;
      margin-left: 10px;
    }
  }
  /*** VERSION CELULAR ***/
  @media only screen and (max-width: 767px)
  {
    .__logo {
      display: none;
    }

    .name_application {
      display: none;
    }

    .__vector {
      position: relative;
      top: 10px;
      margin-left: 10px;
    }
  }

  /*** VERSION CELULAR PEQUEÑO ***/
  @media only screen and (max-width: 340px)
  {}
</style>