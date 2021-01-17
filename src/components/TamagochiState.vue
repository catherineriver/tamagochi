<template>
    <div class="special-uralsib-tamagotchi-state">
      <div class="special-uralsib-tamagotchi-state__container">
        <Termometr :moodState="this.moodState" :colorState="this.colorState"/>
        <BubbleMarquee
          v-show="!isHateVisible && !isLikeVisible"
          :marqueeText='this.moodState'
        />
        <Reaction v-if="isHateVisible" reactionState="hate" :reactionText="this.hateReactions"/>
        <Reaction v-if="isLikeVisible" reactionState="like" :reactionText="this.loveReactions"/>
        <div v-show="!isHateVisible && !isLikeVisible" class="special-uralsib-tamagotchi-state__character"
          :class="computedClass"
        ></div>
      </div>
    </div>
</template>

<script>
import BubbleMarquee from './BubbleMarquee.vue';
import Termometr from './Termometr.vue';
import Reaction from './Reaction.vue';
import data from '../data/data';

export default {
  name: 'TamagochiState',
  components: {
    BubbleMarquee,
    Termometr,
    Reaction,
  },
  data() {
    return {
      data: data.reactions,
      hateReactions: data.reactions.hate,
      loveReactions: data.reactions.love,
      moodState: '',
      reactionState: '',
      reactionText: '',
      colorState: '',
      showText: false,
      isBubbleVisible: false,
    };
  },
  props: {
    value: {
      type: Number,
    },
    isLikeVisible: {
      type: Boolean,
    },
    isHateVisible: {
      type: Boolean,
    },
  },

  methods: {
    setMoodState(value) {
      const ranges = Object.keys(data.scoreRange);

      for (let i = 0; i < ranges.length; i += 1) {
        const range = data.scoreRange[ranges[i]];

        if (value >= range.min && value <= range.max) {
          this.moodState = ranges[i];
          break;
        }
      }

      return this.moodState;
    },

  },
  computed: {
    computedClass() {
      const className = this.setMoodState(this.value);
      return className;
    },
  },
  updated() {
    this.$root.$emit('moodState', this.moodState);
  },
};
</script>

<style lang="stylus">
.special-uralsib-tamagotchi-state
  &__container
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  &__character
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 238px;
    height: 290px;
    z-index 10
    &.idealState
      background-image url('https://leonardo2.osnova.io/be1738a3-98a9-56d1-b597-95e414e4cc8f/')
    &.neitralState
      background-image url('https://leonardo2.osnova.io/21d73a50-1f22-518a-8342-13dc2a5bc81b/')
    &.veryBadState
      background-image url('https://leonardo2.osnova.io/a2668886-b40e-5ff8-9148-834e5b5d89c2/')
    &.slightlyBadState
      background-image url('https://leonardo2.osnova.io/ff3dc894-9a85-55ff-b965-315d83c6c442/')
    &.badState
      background-image url('https://leonardo2.osnova.io/fc79e291-38d0-5058-a9c1-c6d843d99d03/')
    &.slightlyGoodState
      background-image url('https://leonardo2.osnova.io/71533739-1693-5ee3-8b2d-d7c3259ded60/')
    &.goodState
      background-image url('https://leonardo2.osnova.io/172db6fe-41ea-54dc-9a08-01b802fa3d5a/')
    @media (max-width 624px)
      width: 185px;
      height: 235px;


</style>
