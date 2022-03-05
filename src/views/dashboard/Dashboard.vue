<template>
  <div class="p-5">
    <div class="title_dash">Hola, <strong>Bryan Blanco</strong></div>
    <div class="subtitle_dash">Selecciona una opción:</div>

    <div v-for="(item, index) in buttons" :key="index">
      <b-button class="btn_option" @click.prevent="redirect(item.path)">
        {{ item.title }}
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton,
} from "bootstrap-vue";

export default {
  components: {
    BButton,
  },
  data() {
    return {
      buttons: [
        {
          title: 'Ver todas las categorías',
          path: '/listado-de-categorias',
        },
        {
          title: 'Crear categorías',
          path: '/crear-categoria',
        },
        {
          title: 'Cerrar sesión',
          path: null,
        }
      ]
    }
  },
  methods: {
    redirect(path) {
      const me = this;
      path ? me.$router.push(path) : console.log('logout');
    }
  }
}
</script>

<style lang="css">
  .title_dash {
    font-family: var(--fuente-poppins);
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: -0.103101px;
    color: var(--white-color);
    margin-bottom: 73px;
  }

  .subtitle_dash {
    font-family: var(--fuente-poppins);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.103101px;
    color: var(--white-color);
    margin-bottom: 25px;
  }

  .btn_option {
    background: #E487FB;
    border-radius: 10px;
    width: 338px;
    height: 60px;
    font-family: var(--fuente-roboto);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 17px;
    text-align: center;
    color: #3E1149;
    margin-bottom: 27px;
  }

  .btn_option:hover {
    background: #3E1149;
    color: #E487FB;
  }

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
    .btn_option
    {
      width: 100%;
    }
  }
</style>