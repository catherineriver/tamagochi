<template>
  <div :class="[
          'special-uralsib-tamagotchi',
          `special-uralsib-tamagotchi--${$store.state.params.location}`,
          {'l-mb-28': !isAsrticleLocation },
          {'l-island-round': !isAsrticleLocation },
       ]"
       v-observe-visibility="{
           callback: visibilityChanged,
           once: true,
       }">
    <div class="special-uralsib-tamagotchi__container l-island-a">
      <div class="special-uralsib-tamagotchi-preview" @click="open" v-if="isAsrticleLocation && !isStart">
        <div class="special-uralsib-tamagotchi-preview__title">Решаем судьбу предпринимателя</div>
        <div class="special-uralsib-tamagotchi-preview__gif"></div>
        <div class="special-uralsib-tamagotchi-preview__button">Интересно</div>
      </div>
      <div class="special-uralsib-tamagotchi-game" v-if="isStart">
        <div class="special-uralsib-tamagotchi__title">Битва доброжелательных и токсичных пользователей</div>
        <div class="special-uralsib-tamagotchi__desc">Выясним, кого на vc.ru больше: нажмите кнопку, чтобы поругать или поддержать условного предпринимателя.</div>

        <VoteScreen @openResult="openResult" :overallScore="this.overallScore === null ? this.overallScoreDefault : this.overallScore"/>
        <ResultScreen
          v-if="isResult"
          :stats="this.serverResponse.empty === false ? this.fallbackServerResponse : this.serverResponse"
          :mood="this.mood"
          :clicksToDown="this.clicksToDown"
          :clicksToUp="this.clicksToUp" />
      </div>
    </div>
  </div>
</template>

<script>
import * as Analytics from './lib/analytics';
import { preloadImages } from './lib/helper';
import VoteScreen from './components/VoteScreen.vue';
import ResultScreen from './components/ResultScreen.vue';
import request from './lib/request';
import data from './data/data';


export default {
  name: 'App',
  components: {
    VoteScreen,
    ResultScreen,
  },
  data() {
    return {
      data,
      isResult: false,
      overallScore: null,
      overallScoreDefault: 0,
      serverResponse: { empty: false },
      isConnected: false,
      statsToday: {},
      statsAll: {},
      fallbackServerResponse: {},
      pageIsReady: false,
      isAsrticleLocation: false,
      isStart: true,
      mood: {},
      clicksToDown: 0,
      clicksToUp: 0,
    };
  },
  beforeUpdate() {
    this.$root.$on('moodState', (mood) => {
      this.mood = mood;
      this.howMuchLeft(mood);
    });
  },

  mounted() {
    if (this.$store.state.params.location === 'article') {
      this.isAsrticleLocation = true;
      this.isStart = false;
    }
    this.sockets.subscribe('stats', (socketData) => {
      this.serverResponse = socketData;
      this.statsAll = socketData.all;
      this.overallScore = socketData.all.up - socketData.all.down;
    });
    request('https://tamagotchi.special.osnova.io/stats')
      .then((res) => {
        const jsonData = JSON.parse(res);
        this.fallbackServerResponse = jsonData;
        this.overallScoreDefault = jsonData.all.up - jsonData.all.down;
      }).catch((err) => {
        if (err) {
          console.log(err, 'err');
        }
      });
    preloadImages([
      'https://leonardo2.osnova.io/be1738a3-98a9-56d1-b597-95e414e4cc8f/',
      'https://leonardo2.osnova.io/21d73a50-1f22-518a-8342-13dc2a5bc81b/',
      'https://leonardo2.osnova.io/a2668886-b40e-5ff8-9148-834e5b5d89c2/',
      'https://leonardo2.osnova.io/ff3dc894-9a85-55ff-b965-315d83c6c442/',
      'https://leonardo2.osnova.io/fc79e291-38d0-5058-a9c1-c6d843d99d03/',
      'https://leonardo2.osnova.io/71533739-1693-5ee3-8b2d-d7c3259ded60/',
      'https://leonardo2.osnova.io/172db6fe-41ea-54dc-9a08-01b802fa3d5a/',
      'https://leonardo2.osnova.io/f7e75703-43b5-5b79-895e-69417a4c37f9/',
      'https://leonardo2.osnova.io/51a58a4d-184a-51f5-bdc5-8736d8e3c508/',
      'https://leonardo2.osnova.io/350f53d9-02c5-5019-9482-5121e814621d/',
      'https://leonardo2.osnova.io/a4101726-e0a9-58aa-bcd9-a6859f7798f3/',
      'https://leonardo2.osnova.io/e8bebdd4-faa9-556a-8420-c768b41ecb42/',
      'https://leonardo2.osnova.io/856d4390-79c0-5214-995a-1e5fe7db5ed7/',
      'https://leonardo2.osnova.io/13a5b738-9171-536a-86b2-901e6db0d546/',
      'https://leonardo2.osnova.io/1f956c64-ca05-5f1c-93d6-63747b6310a6/',
      'https://leonardo2.osnova.io/c62393c1-99be-5ae5-a5b2-6eef64c1b783/',
      'https://leonardo2.osnova.io/f7e75703-43b5-5b79-895e-69417a4c37f9/',
      'https://leonardo2.osnova.io/51a58a4d-184a-51f5-bdc5-8736d8e3c508/',
    ]);
  },
  beforeDestroy() {
    this.sockets.unsubscribe('stats');
  },
  methods: {
    howMuchLeft(mood) {
      const range = data.scoreRange[mood];

      if (this.overallScore >= range.min && this.overallScore <= range.max) {
        this.clicksToDown = (this.overallScore - range.min) + 1;
        this.clicksToUp = (range.max - this.overallScore) + 1;
      }
    },
    visibilityChanged(isVisible) {
      if (isVisible) {
        Analytics.sendEvent('Project', 'Show');
      }
    },
    openResult() {
      this.isResult = true;
      Analytics.sendEvent('Interesting');
    },
    open() {
      this.isStart = true;
    },
  },

};
</script>

<style lang="stylus">
@font-face
  font-family: 'Thintel';
  src: url('https://specialsf378ef5-a.akamaihd.net/Fonts/Thintel/Thintel.woff') format("woff");
@font-face
  font-family: 'Digital';
  src: url('https://specialsf378ef5-a.akamaihd.net/Fonts/Digital7/digital7.woff') format("woff");
.special-uralsib-tamagotchi
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative
  z-index: 99
  max-width: 100%
  font-family: 'Roboto', sans-serif
  font-size: 16px
  line-height: normal
  text-size-adjust: 100%
  background-color: transparent
  overflow: hidden
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFECF0 54.17%), #FFE1E7;


  & *
  & *:before
  & *:after
    box-sizing: border-box

  & svg
    display block
    fill currentColor
    pointer-events none

  & b
    font-weight: 700

  & button
    margin: 0
    padding: 0
    font-family: inherit
    user-select: none
    outline: none
    box-shadow: none
    appearance: none
    cursor: pointer

  &__container
    width: 640px
    max-width: 100%
    margin-top: 24px;
    margin-bottom: 34px;
  &__title
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
  &__desc
    font-size: 16px;
    line-height: 1.6em;
    margin-top 8px;
    margin-bottom 28px;

  &--full
    margin: auto;
    box-shadow: 0px 10px 35px -15px #E29DAD;
    border-radius: 8px;
    & > .special-uralsib-tamagotchi__container
      padding: 20px;
      margin-bottom: 20px;
      & .special-uralsib-tamagotchi-screen
        margin-bottom 0;
      & .special-uralsib-tamagotchi-result
        margin-top: 39px;


  .special-uralsib-tamagotchi-preview
    display flex
    flex-direction row;
    align-items center;
    &:hover
      cursor pointer

    @media (max-width: 530px)
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: wrap;
    &__title
      font-weight: bold;
      font-size: 22px;
      line-height: 34px;
      @media (max-width 530px)
        font-size: 24px;
        max-width: 200px;
    &__gif
      background-image: url(https://leonardo.osnova.io/6c1779dc-478f-587e-ab19-1fc8660bb141/);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 170px;
      height: 142px;
      flex-grow: 1;
      flex-shrink: 0;
      @media (max-width 530px)
        position: absolute;
        right: 0;
        height 160px
      @media (max-width 320px)
        right: -40px;
    &__button
      position: relative;
      z-index: 3;
      display: -ms-flexbox;
      display: flex;
      background-color: #fff;
      border-radius: 5px;
      border-width: 1px;
      border-style: solid;
      padding: 12px 0 11px;
      font-size: 15px;
      -ms-flex-pack: center;
      justify-content: center;
      font-weight: 500;
      min-width: 130px;
      border-color: #EBD4D8;
      @media (max-width 530px)
        margin-top: 14px;
        line-height: 35px;
      &:hover
        cursor pointer
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
  &--article
    @media (max-width: 859px)
      margin-top: 15px;
      margin-bottom: 15px;


</style>
