<template>
  <div v-show='isActive' class="special-uralsib-tamagotchi-tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="stylus">

</style>
