<template>
  <section class="sideBar open-menu">
    <div class="sideBar-ct">
      <!-- sideBar-title -->
      <div class="p-2">
        <div class="btn__closed--menu" @click="btnClosed">
          <b-icon-backspace-fill />
        </div>
        <div class="d-flex align-items-center">
          <img src="@/assets/images/image1.png" class="__logo" />
          <div class="name_application">
            anime<strong class="__strong">yabu.</strong>
          </div>
        </div>
      </div>
      <!-- SideBar - Menu -->
      <div class="sideBar-menu">
        <div class="item__menu">
            <router-link to="/app" class="title__item">Inicio</router-link>
            <div class="title__item">Categorías</div>
            <ul>
              <li>
                <router-link to="/listado-de-categorias">
                  Ver todas
                </router-link>
              </li>
              <li>
                <router-link to="/crear-categoria">
                  Crear
                </router-link>
              </li>
            </ul>
        </div>
        <div class="item__menu">
            <div class="title__item2" @click.prevent="logout">Cerrar sesión</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  BIconBackspaceFill,
} from "bootstrap-vue";
import { actionLayout } from "@/mixins/layout";
import { mapActions } from "vuex";

export default {
  name: "Sidebar",
  components: {
    BIconBackspaceFill,
  },
  mixins: [actionLayout],

  data(){
    return {
      user: {}
    }
  },
  computed: {},
  methods: {
    ...mapActions("logout", ["logout"]),
  },
};
</script>

<style>
@import "./sidebar.css";
</style>