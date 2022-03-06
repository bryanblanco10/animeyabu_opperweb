<template>
  <div>
    <b-form @submit.prevent="saveData">
      <b-row>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="name" class="label_input">Nombre de categoría</label>
            <b-form-input id="name" v-model="formData.nombre" autofocus />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <b-button type="submit" class="btn_register" :disabled="isBusy || $v.$invalid">
            <b-spinner v-if="isBusy" small />
            {{ title }}
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
import validationMixin from "@/mixins/validationMixin";
import {
  required,
} from "vuelidate/lib/validators";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  components: {
    BCol,
    BRow,
    BButton,
    BForm,
    BSpinner,
    BFormInput,
  },
  mixins: [validationMixin],
  data() {
    return {
      id: this.$route.params.id,
      formData: {
        nombre: '',
      },
      title: null,
    };
  },
  validations: {
    formData: {
      nombre: {
        required,
      },
    }
  },
  computed: {
    ...mapState("category", ["isBusy"]),
    ...mapGetters("category", ["getCategory"]),
  },
  methods: {
    ...mapActions("category", ["save", "find"]),
    saveData() {
      const me = this;
      me.save(me.formData);
    }
  },
  mounted() {
    const me = this;

    me.find(me.id);

    if (me.id) {
      me.formData = { ...me.formData, ...me.getCategory };
      me.title = "Actualizar";
    } else {
      me.formData = { ...me.formData, ...me.getCategory };
      me.title = "Crear"
    }
  },
};
</script>

<style></style>
