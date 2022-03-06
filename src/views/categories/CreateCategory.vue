<template>
  <div class="p-5">
    <div class="title__create">{{ title }}</div>
    <b-row>
      <b-col lg="4" md="4" sm="12">
        <create-edit-category-form />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CreateEditCategoryForm from "./components/CreateEditCategoryForm";
import { BRow, BCol } from "bootstrap-vue";
export default {
  components: {
    BRow,
    BCol,
    CreateEditCategoryForm
  },
  data() {
    return {
      id: this.$route.params.id,
      title: null,
    }
  },
  mounted() {
    const me = this;
    me.id ? me.title = 'Actualizar categoría' : me.title = 'Crear categoría';
  },
}
</script>

<style lang="css">
  .title__create {
    font-family: var(--fuente-poppins);
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: -0.103101px;
    color: var(--white-color);
    margin-bottom: 39px;
  }
</style>