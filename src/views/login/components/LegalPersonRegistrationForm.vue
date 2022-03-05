<template>
  <div class="form__content">
    <b-form>
      <b-row>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="name" class="label_input">Razón social</label>
            <b-form-input id="name" autofocus />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="nit" class="label_input">Nit</label>
            <b-form-input id="nit" />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="phone" class="label_input">Teléfono</label>
            <b-form-input id="phone" />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group">
            <label for="email" class="label_input">Email</label>
            <b-form-input
              id="email"
              type="email"
              placeholder="usuario@yabu.com"
            />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group" style="height: 100px;">
            <label for="password" class="label_input">Contraseña</label>
            <b-form-input id="password" :type="typeInput1" />
            <b-icon-eye-fill
              v-if="isActive1"
              class="icon_eye"
              @click.prevent="hidePassword('1')"
            />
            <b-icon-eye-slash-fill
              v-else
              class="icon_eye"
              @click.prevent="seePassword('1')"
            />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <div role="group" style="height: 100px;">
            <label for="confirmpassword" class="label_input"
              >Confirmar contraseña</label
            >
            <b-form-input id="confirmpassword" :type="typeInput2" />
            <b-icon-eye-fill
              v-if="isActive2"
              class="icon_eye active"
              @click.prevent="hidePassword('2')"
            />
            <b-icon-eye-slash-fill
              v-else
              class="icon_eye"
              @click.prevent="seePassword('2')"
            />
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12">
          <b-button class="btn_register">
            <b-spinner v-if="isBusy" small />
            Registrar
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
  BIconEyeFill,
  BIconEyeSlashFill,
} from "bootstrap-vue";
export default {
  components: {
    BCol,
    BRow,
    BButton,
    BForm,
    BSpinner,
    BFormInput,
    BIconEyeFill,
    BIconEyeSlashFill,
  },
  data() {
    return {
      isBusy: false,
      typeInput1: "password",
      typeInput2: "password",
      isActive1: true,
      isActive2: true,
    };
  },
  methods: {
    hidePassword(type) {
      const me = this;
      if (type == '1' ) {
        me.isActive1 = false;
        me.typeInput1 = "text";
      } else {
        me.isActive2 = false;
        me.typeInput2 = "text";
      }
    },
    seePassword(type) {
      const me = this;
      if (type == '1' ) {
        me.isActive1 = true;
        me.typeInput1 = "password";
      } else {
        me.isActive2 = true;
        me.typeInput2 = "password";
      }
    },
  }
};
</script>

<style></style>
