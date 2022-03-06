<template>
  <section class="sideBar open-menu">
    <div class="sideBar-ct">
      <!-- sideBar-title -->
      <div class="p-2">
        <div class="btn__closed--menu" @click.prevent="btnClosed">
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
        <div class="item__menu" v-for="(item, index) in menus" :key="index">
          <div v-if="item.lists">
            <div class="title__item">{{ item.title }}</div>
            <ul>
              <li v-for="(list, index) in item.lists" :key="index" @click.prevent="btnClosed">
                <router-link :to="list.path">
                  {{ list.text }}
                </router-link>
              </li>
            </ul>
          </div>
          <div v-else>
            <div class="title__item" v-if="item.path" @click="btnClosed">
              <router-link :to="item.path">{{ item.title }}</router-link>
            </div>
            <div v-else  class="title__item2" @click.prevent="logout">{{ item.title }}</div>
          </div>
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
      menus: [
        {
          title: 'Inicio',
          path: '/app',
        },
        {
          title: 'Categorías',
          lists: [
            {
              text: 'Ver todas',
              path: '/listado-de-categorias'
            },
            {
              text: 'Crear',
              path: '/crear-categoria'
            }
          ]
        },
        {
          title: 'Cerrar sesión',
          path: null,
        }
      ]
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