<template>
  <div>
    <nav class="Navbar">
      <div class="header__container">
        <b-button class="btn__bars" @click="btnBars">
          <b-icon-list class="" />
        </b-button>
      </div>
    </nav>
  </div>
</template>

<script>
import {
  BIconList,
  BButton,
} from "bootstrap-vue";
import { actionLayout } from "@/mixins/layout";

export default {
  name: "Header",
  components: {
    BIconList,
    BButton,
  },
  mixins: [actionLayout],
  data() {
    return {};
  },
};
</script>

<style>
@import "./header.css";
</style>
