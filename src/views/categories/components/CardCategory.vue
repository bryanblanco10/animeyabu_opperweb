<template>
  <div>
    <b-card
      class="card_category d-flex justify-content-center align-items-center"
      no-body
    >
      <div class="title_category">{{ item.title }}</div>
      <div class="btn_edit">Editar</div>
    </b-card>

  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
export default {
  components: {
    BCard,
  },
  props: {
    item: {
      type: Object,
      default: null,
    }
  }
};
</script>

<style lang="css">
.card_category {
  width: 246px;
  height: 124px;
  background: var(--third-color);
  border-radius: 5px;
  margin-bottom: 53px;
}

.title_category {
  font-family: var(--fuente-poppins);
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.103101px;
  color: var(--white-color);
  text-transform: uppercase;
  position: relative;
  top: 10px;
}

.btn_edit {
  font-family: var(--fuente-poppins);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.103101px;
  text-decoration-line: underline;
  color: var(--white-color);
  position: relative;
  top: 30px;
  left: 95px;
}
</style>
