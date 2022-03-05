<template>
  <b-carousel id="carrousel_anime" fade indicators :interval="5000">
    <b-carousel-slide v-for="(item, index) in informations" :key="index">
      <template #img>
        <div class="d-flex justify-content-center">
          <div class="eclipse" />
          <img class="img_slider" :src="item.img" :alt="item.title" />
        </div>
        <div class="content__">
          <div class="d-flex justify-content-center">
            <div class="title_slider">
              {{ item.title }}
            </div>
            <strong class="_strong_title_slider">
              {{ item.title_complement }}
            </strong>
          </div>
          <div class="d-flex justify-content-center">
            <div class="description_slider">{{ item.description }}</div>
          </div>
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
  data() {
    return {
      informations: [
        {
          title: "anime",
          title_complement: "yabu.",
          description:
            "Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea!",
          img: require("@/assets/images/slider1.png"),
        },
        {
          title: "anime",
          title_complement: "Kyojuro.",
          description:
            "Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea!",
          img: require("@/assets/images/slider2.png"),
        },
        {
          title: "anime",
          title_complement: "Inosuke.",
          description:
            "Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea!",
          img: require("@/assets/images/slider3.png"),
        },
      ],
    };
  },
};
</script>
<style lang="css">
.carousel-indicators {
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
  top: 23px;
}

.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: white;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}

.eclipse {
  position: absolute;
  width: 548px;
  height: 548px;
  top: 63px;
  background: #e487fb;
  z-index: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

.img_slider {
  position: relative;
  z-index: 2;
  width: 401px;
  height: 573px;
  top: 110px;
  margin-bottom: 120px;
}

.content__ {
  margin-left: 10px;
  margin-right: 10px;
}

.title_slider {
  font-family: var(--fuente-roboto);
  font-style: normal;
  font-weight: 900;
  font-size: 80.1282px;
  line-height: 94px;
  text-align: center;
  letter-spacing: 0.065em;
  color: var(--white-color);
}

._strong_title_slider {
  color: #e487fb;
  font-family: var(--fuente-roboto);
  font-style: normal;
  font-weight: 900;
  font-size: 80.1282px;
  line-height: 94px;
  text-align: center;
  letter-spacing: 0.065em;
}

.description_slider {
  font-family: var(--fuente-roboto);
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: var(--white-color);
  width: 463px;
}
</style>
