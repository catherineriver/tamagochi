<template>
    <div class="special-uralsib-tamagotchi-screen">
        <div class="special-uralsib-tamagotchi-screen__base">
            <div class="special-uralsib-tamagotchi-screen__logo"></div>
            <div class="special-uralsib-tamagotchi-screen__inner">
                <div class="special-uralsib-tamagotchi-screen__grid"></div>
                    <TamagochiState
                      :value='this.overallScore'
                      :isHateVisible="this.isHateVisible"
                      :isLikeVisible="this.isLikeVisible"
                    />
            </div>
            <div class="special-uralsib-tamagotchi-screen__buttons">
                 <div @click="sendHate"
                    class="special-uralsib-tamagotchi-screen__button special-uralsib-tamagotchi-screen__button--hate">
                    <icon-base
                      icon-name='icon-timer'
                      width="22" height="20"
                      viewBox="0 0 22 20">
                        <icon-hate></icon-hate>
                    </icon-base>
                    <div class="special-uralsib-tamagotchi-screen__label">Поругать</div>
                </div>

                <div @click="sendLove"
                    class="special-uralsib-tamagotchi-screen__button special-uralsib-tamagotchi-screen__button--love">
                    <icon-base
                      icon-name='icon-timer'
                      width="22" height="20"
                      viewBox="0 0 22 20">
                        <icon-like></icon-like>
                    </icon-base>
                    <div class="special-uralsib-tamagotchi-screen__label">Поддержать</div>
                </div>

            </div>
            <div class="special-uralsib-tamagotchi-screen__bank"></div>
        </div>
    </div>
</template>

<script>
import IconBase from './IconBase.vue';
import IconHate from './icons/IconHate.vue';
import IconLike from './icons/IconLike.vue';
import TamagochiState from './TamagochiState.vue';
import request from '../lib/request';
import * as Analytics from '../lib/analytics';

export default {
  name: 'VoteScreen',
  components: {
    IconBase,
    IconHate,
    IconLike,
    TamagochiState,
  },
  data() {
    return {
      isResult: false,
      isHateVisible: false,
      isLikeVisible: false,
      value: 0,
      statistic: {},
    };
  },
  props: {
    overallScore: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    document.addEventListener('touchstart', () => {}, true);
  },
  methods: {
    sendHate() {
      Analytics.sendEvent('shame');
      request('https://tamagotchi.special.osnova.io/down', 'POST')
        .then(() => {
          this.showAnimation('hate');
        }).catch((err) => {
          if (err) {
            console.log(err, 'err - vote down');
          }
        });
    },
    sendLove() {
      Analytics.sendEvent('support');
      request('https://tamagotchi.special.osnova.io/up', 'POST')
        .then(() => {
          this.showAnimation('love');
        }).catch((err) => {
          if (err) {
            console.log(err, 'err vote up');
          }
        });
    },
    openResult() {
      this.isResult = true;
      this.$emit('openResult', this.isResult);
    },

    showAnimation(value) {
      clearTimeout(this.reactionTimeout);
      if (value === 'love') {
        this.isLikeVisible = true;
      } else {
        this.isHateVisible = true;
      }

      this.reactionTimeout = setTimeout(() => {
        this.isLikeVisible = false;
        this.isHateVisible = false;
        this.openResult();
      }, 2000);
    },
  },
};
</script>

<style lang="stylus">
.special-uralsib-tamagotchi-screen
    margin-bottom: 43px;
    position relative
    &__base
        position relative
        background: linear-gradient(210deg, #FFDEE5 -15%, #FFECF0 115%);
        box-shadow: -10px -9px 17px -1px #FFF4F7, 7px 7px 14px #FABECC, inset -9px -6px 44px rgba(255, 244, 244, 0.49);
        border-radius: 31px;
        width: 100%;
        // max-width: 572px;
        height: 296px;
        display flex
        flex-direction row
        align-items center
        justify-content center
        @media (max-width 425px)
          max-width: 385px;
          height: 305px;

    &__inner
        position relative
        width 100%
        max-width 382px
        height 224px

        box-shadow: -8px -6px 11px rgba(255,255,255,0.18), inset -1px -3px 11px #fff9fa, inset 9px 6px 11px #fad1db, 1px 0px rgba(255, 255, 255, 0.5), -1px 0px rgba(255, 255, 255, 0.5);
        border-radius: 16px;
        overflow: hidden;

        background-color: #FFE1E7;
        @media (max-width 624px)
          position: absolute;
          top: 30px;
          width: 290px
          height: 175px
        @media (max-width 325px)
          width: 230px
        &::after
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: ''
            opacity 0.15

            background-color:#FFE1E7;
            background-image: linear-gradient(#FFA9BD 1px, transparent 1px),
            linear-gradient(90deg, #FFA9BD 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
            background-size: 4px 4px, 4px 4px, 8px 8px, 8px 8px;
            background-position:0px 0px, 0px 0px, 0px 0px, 0px 0px;

    &__grid
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: ''
        mix-blend-mode: multiply;

        &::after
            content: '';
            background: linear-gradient(150deg, #ffced9 5%, #fff8f9 65%);
            transform: rotate(180deg);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
    &__logo
        position absolute
        background-image url('https://leonardo2.osnova.io/881b5fe7-cf8e-5212-b9d3-6af18453d0cd/')
        width: 109px;
        height: 13px;
        display: block;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        top: 12px;
        @media (max-width 624px)
          width: 92px;
          height: 10px;

    &__bank
      position absolute
      background-image url('https://leonardo2.osnova.io/56212f17-1d87-5735-9f66-3b11c0922552/')
      display: block;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 134px;
      height: 27px;
      bottom: 6px;
      @media (max-width 624px)
        width: 119px;
        height: 24px;
        bottom: 50px;
      @media (max-width 325px)
        width: 90px;
        height: 20px;
    &__button
        position: absolute;
        top: 128px;
        box-shadow: -17px -17px 22px #FFF7F8, 17px 4px 35px #F0ACBC, inset -8px -6px 43px rgba(255, 255, 255, 0.18);
        background: linear-gradient(210deg, #FFDEE5 -15%, #FFECF0 115%);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-backface-visibility: hidden;
        -webkit-transition: background .2s ease-out;
        -moz-transition: background .2s ease-out;
        -o-transition: background .2s ease-out;
        transition: background .2s ease-out, box-shadow .2s ease;
        & > svg
          transition opacity .2s ease-out
          z-index: 10;
          position: absolute;
          top: 16px;
          @media (max-width 624px)
            position: absolute;
            top: 18px;
            right: 15px;

        @media (max-width 624px)
          width: 53px;
          height: 53px;
          box-shadow: -17px -4px 22px #fff7f8, 17px 4px 35px #f0acbc, inset -8px -6px 43px rgba(255,255,255,0.18)
        &:hover
            cursor pointer
            & > svg
              opacity: 0.85;
              @media (max-width 624px)
                opacity 1

        &::after
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          background: linear-gradient(210deg, #FFDEE5 -15%, #FFECF0 115%);
          transition: opacity 0.1s ease-out;
          opacity: 0;
          box-shadow: -9px -6px 43px rgba(255, 255, 255, 0.18), inset -17px -17px 22px #FFF7F8, inset 17px 4px 35px #F0ACBC;
          @media (max-width 624px)
            width: 53px;
            height: 53px;
        &:active
          box-shadow: none;
        &:active::after
          opacity 1
        &--hate
            left: 28px;
            & > .special-uralsib-tamagotchi-screen__label
                left: 0px;
                top: 52px;
            @media (max-width 624px)
              left: 50px;
              top: 218px;
            @media (max-width 425px)
              left: 32px;
              top: 218px;
              & > .special-uralsib-tamagotchi-screen__label
                left: 5px;
                top: 60px;

        &--love
            right: 28px;
            & > .special-uralsib-tamagotchi-screen__label
                right: -14px;
                top: 52px;
            @media (max-width 624px)
              right: 50px;
              top: 218px;
            @media (max-width 425px)
              right: 32px;
              top: 218px;
              & > .special-uralsib-tamagotchi-screen__label
                right: -5px;
                top: 60px;
    &__label
        position absolute
        font-family: 'Thintel';
        font-weight: normal;
        font-style: normal;

        color: #FFA9BD;
        font-size: 24px;
        line-height: 24px;
        opacity: 0.85;
        letter-spacing: -0.5px;
        @media (max-width 425px)
          font-size: 19px;
          line-height: 13px;

</style>
