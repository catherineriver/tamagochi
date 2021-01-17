<template>
  <div class="special-uralsib-tamagotchi-tab__content" >
    <div class="special-uralsib-tamagotchi-tab__row">
      <ResultBlock :value="this.stats.down" label="поругали"/>
      <ResultBlock :value="this.stats.up" label="поддержали"/>
    </div>
  </div>
</template>

<script>
import ResultBlock from './ResultBlock.vue';

export default {
  name: 'StatisticTab',
  components: {
    ResultBlock,
  },
  data() {
    return {
      isConnected: false,
      socketMessage: '',
    };
  },
  props: {
    stats: {
      type: Object,
    },
  },
};
</script>

<style lang="stylus">
.special-uralsib-tamagotchi-tab
  &__row
    display flex
    flex-direction row
    justify-content: space-between;
    margin-bottom 18px
    @media (max-width 600px)
      flex-direction column
      align-items center
  &__content
    margin-top 25px

</style>
