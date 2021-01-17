<template>
    <div class='special-uralsib-tamagotchi-tabs'>
        <ul class='special-uralsib-tamagotchi-tabs__header' :class="computedClass" @click="sendEvent(computedClass)">
            <li v-for='(tab, index) in tabs'
                :key='tab.title'
                @click='selectTab(index)'
                :class='{
                  "special-uralsib-tamagotchi-tab__title--selected": (index == selectedIndex)
                  }'
                class="special-uralsib-tamagotchi-tab__title">
                {{ tab.title }}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
import * as Analytics from '../lib/analytics';

export default {
  name: 'Tabs',
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    sendEvent(value) {
      Analytics.sendEvent(value);
    },
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i);
      });
    },
    setBorder(value) {
      if (value === 0) {
        return 'today';
      }
      return 'review';
    },
  },
  computed: {
    computedClass() {
      const className = this.setBorder(this.selectedIndex);
      return className;
    },
  },
};
</script>

<style lang="stylus">
.special-uralsib-tamagotchi-tabs
    &__header li
        list-style none
    &__header
        position relative
        display flex
        flex-direction row
        font-family: 'Thintel';
        color: #EAA9B8;
        font-weight: 300;
        font-size: 40px;
        line-height: 66%;
        text-transform uppercase
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        z-index: 2;
        &:hover
            cursor pointer
        &::before
          content ''
          width: 640px;
          height: 38px;
          display: block;
          background-repeat: no-repeat;
          position: absolute;
          top: -8px;
          z-index: -1;
        &.today::before
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 640 38'%3E%3Cpath fill='%23FBC6D3' d='M317.203.381348l-71.3115.00000623 2e-7 2.35282 71.3115-.00000623zM317.203 2.73438l3e-7 2.35282 2.35282-3e-7-3e-7-2.35282zM319.556 5.08691l3e-7 2.35282 2.35282-3e-7-3e-7-2.35282zM321.909 7.43994l.00000359 27.3479 2.35282-3e-7-.00000359-27.3479z'/%3E%3Cpath fill='%23FBC6D3' d='M422.676 34.7876h217.661v2.35282H422.676z' opacity='.6'/%3E%3Cpath fill='%23FBC6D3' d='M324.262 34.7876h96.0615v2.35282H324.262z' opacity='.3'/%3E%3Cg fill='%23FBC6D3' opacity='.6'%3E%3Cpath d='M415.617.380859L310.402.3808682l2e-7 2.35282 105.215-.0000092zM415.617 2.73389l3e-7 2.35282 2.35282-3e-7-3e-7-2.35282zM417.97 5.08643l3e-7 2.35282 2.35282-3e-7-3e-7-2.35282zM420.323 7.43945l.00000359 27.3479 2.35282-3e-7-.00000359-27.3479z'/%3E%3C/g%3E%3Cpath fill='%23FBC6D3' d='M173.174.381348h72.7178v2.35282H173.174zM173.174 2.73438V5.0872h-2.35282V2.73438zM170.821 5.08691v2.35282h-2.35282V5.08691zM168.468 7.43994v27.3479h-2.35282V7.43994zM-.873047 34.7876h166.988v2.35282h-166.988z'/%3E%3C/svg%3E");
        &.review::before
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 640 38'%3E%3Cpath fill='%23FBC6D3' d='M328.968.381348h86.6494v2.35282H328.968zM328.968 2.73438V5.0872h-2.35282V2.73438zM326.615 5.08691v2.35282h-2.35282V5.08691zM324.262 7.4397v27.3479h-2.35282V7.4397zM422.676 34.7876h217.661v2.35282H422.676z'/%3E%3Cpath fill='%23FBC6D3' d='M168.469 34.7876H321.91v2.35282H168.469z' opacity='.3'/%3E%3Cpath fill='%23FBC6D3' d='M389.992.380859L245.891.3808716l2e-7 2.35282 144.101-.0000126z' opacity='.6'/%3E%3Cpath fill='%23FBC6D3' d='M415.617 2.73413l3e-7 2.35282 2.35282-3e-7-3e-7-2.35282zM417.97 5.08667l3e-7 2.35282 2.35282-3e-7-3e-7-2.35282zM420.323 7.43945l.00000359 27.3479 2.35282-3e-7-.00000359-27.3479z'/%3E%3Cpath fill='%23FBC6D3' d='M-.873047 34.7876h166.988v2.35282h-166.988z' opacity='.6'/%3E%3Cg fill='%23FBC6D3' opacity='.6'%3E%3Cpath d='M173.174.381348h72.7178v2.35282H173.174zM173.174 2.73438V5.0872h-2.35282V2.73438zM170.821 5.08691v2.35282h-2.35282V5.08691zM168.468 7.4397v27.3479h-2.35282V7.4397z'/%3E%3C/g%3E%3C/svg%3E");
        @media (max-width 425px)
          font-size: 30px;
          &::before
            content ''
            width: 466px;
            height: 29px;
            top: -6px
            left: -20px;
        @media (max-width 375px)
          &::before
            content ''
            left: -40px;
        @media (max-width 320px)
          &::before
            content ''
            left: -70px;


.special-uralsib-tamagotchi-tab__title
  position relative
  padding: 0 20px
  transition color .2s
  &:hover
    color: #000;
  &:first-child
    padding: 0 20px;
    margin-left: -43px;
    @media (max-width 425px)
      margin-left: 15px;
      padding: 0 5px;
    @media (max-width 375px)
      margin-left: 30px;
    @media (max-width 320px)
      margin-left: 20px;


  &--selected
    color #000

</style>
