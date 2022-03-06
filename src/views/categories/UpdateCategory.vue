<template>
  <div class="p-5">
    <div class="title__create">Actualizar categoría</div>
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
}
</script>>