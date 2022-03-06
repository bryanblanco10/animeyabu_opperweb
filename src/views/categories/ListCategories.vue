<template>
  <div class="p-5">
    <div class="title__">Listado de categorías</div>
    <b-row v-if="getCategories.length > 0">
      <b-col 
        lg="4" md="6" sm="12"
        v-for="(item, index) in getCategories"
        :key="index"
      >
        <card-category :item="item" />
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col lg="12" md="12" sm="12">
        <div class="box">
          Aún no tienes categorías creadas <router-link class="__link" to="/crear-categoria">Crear categoría</router-link>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import CardCategory from "./components/CardCategory";
import { mapGetters } from "vuex";

export default {
  components: {
    BRow,
    BCol,
    CardCategory
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters("category", ["getCategories"])
  }
}
</script>
<style lang="css">
  .title__ {
    font-family: var(--fuente-poppins);
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: -0.103101px;
    color: var(--white-color);
    margin-bottom: 48px;
  }

  .box {
    border: 2px solid var(--second-color);
    color: var(--white-color);
    padding: 15px;
    text-align: center;
    font-size: 32px;
    border-radius: .3rem;
  }

  .__link {
    color: var(--second-color);
    text-decoration: none;
  }

  .__link:hover {
    color: var(--second-color);
  }
</style>