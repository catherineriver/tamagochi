<template>
  <div class="special-uralsib-tamagotchi-reaction">
    <div class="special-uralsib-tamagotchi-reaction__gif" :class="this.reactionState"></div>
    <div class="special-uralsib-tamagotchi-reaction__bubble">
      <div class="special-uralsib-tamagotchi-reaction__text">
        {{this.reactionTextFormated}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Reaction',
  components: {

  },
  data() {
    return {
      reactionTextFormated: '',

    };
  },
  props: {
    reactionState: {
      type: String,
    },
    reactionText: {
      type: Array,
    },
  },
  methods: {
    randomReactionText() {
      this.reactionTextFormated = this.reactionText[Math.floor(Math.random() * this.reactionText.length)];
    },
  },
  mounted() {
    this.randomReactionText();
  },

};
</script>

<style lang="stylus">
.special-uralsib-tamagotchi-reaction
  z-index 2
  &__gif
    width: 225px;
    height: 175px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width 624px)
      width: 140px;
      height: 120px;

    &.hate
      background-image url('https://leonardo2.osnova.io/f7e75703-43b5-5b79-895e-69417a4c37f9/')
    &.like
      background-image url('https://leonardo2.osnova.io/51a58a4d-184a-51f5-bdc5-8736d8e3c508/')
  &__bubble
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 347 56'%3E%3Cpath fill='%23000' d='M7.4661.354492H339.901V2.70703h2.352v2.35254h2.353v2.35282h-2.353V5.05957l-2.352.00028V2.70703L7.4661 2.70731v2.35254H5.11356v2.35254H2.76074V5.05957l2.35282.00028-.00028-2.35282 2.35282.00028V.354492zM344.607 48.2217h2.353V7.41309l-2.354-.0007.001 40.80931zM342.253 52.9277v-2.3525h2.353l.001-2.3535-2.354.0007v2.3528l-2.352-.0003v2.3526H7.4661v-2.3526H5.11356v-2.3525H2.76074v2.3528l2.35282-.0003-.00028 2.3528 2.35282-.0002v2.3528H339.901v-2.3528l2.352.0002zM2.76074 7.41239l-2.353513.0007V48.2217l2.353513.0007V7.41239z'/%3E%3Cpath fill='%23fff' d='M339.9 5.06055h2.353v2.35156h2.353V48.2227h-2.353v2.3525H339.9v2.3525H7.46758v-2.3535H5.11426v-2.3515H2.76074V7.41211h2.35352V5.06055h2.35332V2.70703H339.9v2.35352z'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size contain
    width: 100%;
    max-width: 346px;
    height: 56px;
    position: absolute;
    left: 19px;
    bottom: 16px;
    z-index: 10;
    display flex
    flex-direction row
    align-items center
    justify-content center
    @media (max-width 624px)
      max-width: 256px;
      height: 42px;
    @media (max-width 320px)
      max-width: 200px;

  &__text
    font-family: 'Thintel';
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 18px;
    padding: 0 20px;
    @media (max-width 624px)
      font-size: 20px;
      line-height: 15px;


</style>
