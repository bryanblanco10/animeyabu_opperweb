<template>
  <div class="p-5">
    <div class="title__">Listado de categorías</div>
    <b-row>
      <b-col 
        lg="4" md="4" sm="12"
        v-for="(item, index) in categories"
        :key="index"
      >
        <card-category :item="item" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import CardCategory from "./components/CardCategory";

export default {
  components: {
    BRow,
    BCol,
    CardCategory
  },
  data() {
    return {
      categories: [
        {
          title: 'Aventuras'
        },
        {
          title: 'Acción'
        },
        {
          title: 'Comedia'
        },
        {
          title: 'Romance'
        }
      ]
    }
  },
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
</style>