<template>
  <div>
    <b-form>
      <b-row>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="name" class="label_input">Nombre de categoría</label>
            <b-form-input id="name" v-model="formData.nombre" autofocus />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <b-button class="btn_register" :disabled="isBusy || $v.$invalid">
            <b-spinner v-if="isBusy" small />
            Crear
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BCol,
  BRow,
  BButton,
  BForm,
  BSpinner,
  BFormInput,
} from "bootstrap-vue";
import actionCrud from "@/mixins/actionCrud";
import {
  required,
} from "vuelidate/lib/validators";

export default {
  components: {
    BCol,
    BRow,
    BButton,
    BForm,
    BSpinner,
    BFormInput,
  },
  mixins: [actionCrud],
  data() {
    return {
      isBusy: false,
      formData: {
        nombre: '',
      }
    };
  },
  validations: {
    formData: {
      nombre: {
        required,
      },
    }
  },
};
</script>

<style></style>
