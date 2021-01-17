<template>
    <div v-show="isBubbleVisible" class="special-uralsib-tamagotchi-bubble">
        <div class="special-uralsib-tamagotchi-bubble__marquee">
            <div class="special-uralsib-tamagotchi-bubble__inner">
              <div class="special-uralsib-tamagotchi-bubble__track">
                <div v-for="(item, index) in data.replics[this.marqueeText]" :key="index">
                      {{ item }}
                </div>
                <div v-for="(item, index)  in data.replics[this.marqueeText]" :key="index + 10">
                      {{ item }}
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../data/data';

export default {
  name: 'BubbleMarquee',
  components: {

  },
  data() {
    return {
      data,
      isBubbleVisible: false,

    };
  },
  props: {
    marqueeText: {
      type: String,
      default: 'neitralState',
    },
  },
};
</script>

<style lang="stylus">

@keyframes special-uralsib-tamagotchi-ticker {
  from {
    transform: translate3d(0%, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
}


.special-uralsib-tamagotchi-bubble
    font-family: 'Thintel';
    font-weight: normal;
    font-style: normal;

    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 1;
    &:after
      content ''
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 149 54'%3E%3Cpath fill='%23fff' d='M7.88134 48.3044h2.35336v-2.3516h2.3516v-2.3535h2.3535v-2.3515h2.3533v-4.7022H8.04785v-2.3525H5.69531v-2.3526H3.3418L3.34082 7.6462h2.35352V5.29464h2.35254V2.94112H141.929v2.35352h2.353V7.6462h2.353v24.1943h-2.353v2.3526h-2.353v2.3525H31.4105v4.7039h-4.706v2.353h-2.3536v2.3516h-2.3515v2.3535h-5.5967v2.3516H7.88134v-2.3548z'/%3E%3Cpath fill='%23000' d='M8.04582.588867H141.93V2.94169H8.04582V.588867zM146.635 31.84h2.353V7.64729h-2.353V31.84zM144.283 34.1926l-.001-2.3524 2.353-.0002v2.353l-2.352-.0004v2.3529h-2.353v-2.3529h2.353zM141.93 38.8984v-2.3529l-110.5198.0001-.0003 4.7047h2.3528v-2.3519H141.93zM8.04582 5.29466V2.94169L5.693 2.94184v2.35248H3.34027v2.35282h2.35282L5.693 5.29432l2.35282.00034zM3.34027 7.64714l-2.352965.00015.000697 24.19251H3.34082L3.34027 7.64714zM141.93 5.29466V2.94169l2.353.00015-.001 2.35248h2.353v2.35297l-2.353-.00015V5.29432l-2.352.00034zM14.9392 38.8984H8.0459v-2.3528h9.2471l-.001 4.7057h-2.3525v2.3515h-2.3526v2.3526h-2.3525v2.3525H7.88155v-2.3528l2.35285.0003-.0003-2.3529 2.3528.0003-.0003-2.3528h2.3526v-2.3516zM8.04688 36.5449v-2.3528H5.69434v-2.3525l-2.35352.0002.0007 2.3526 2.35282-.0003-.00029 2.3528h2.35283zM7.88155 48.3079l-2.35351-.0003v4.7054h2.35282v-2.3526l.00069-2.3525z'/%3E%3Cpath fill='%23000' d='M7.88086 50.6604l4.70604.0007v2.3529H7.88155l-.00069-2.3536zM14.9395 48.3076h-2.3529l.0003 2.3535 2.3526-.0007v-2.3528z'/%3E%3Cpath fill='%23000' d='M14.9395 48.3076h2.3532v-2.3525h4.7051v-2.3516h2.3528v2.3528H21.998v2.3516l-4.7053-.0003.0003 2.3528h-2.3535v-2.3528zM24.3506 43.6035h2.3532V41.251h2.3528v2.3528l-2.3528-.0003.0003 2.3528h-2.3535v-2.3528zM29.0566 41.251l2.3533-.0007.0003 2.3535h-2.3536V41.251z'/%3E%3C/svg%3E");
      background-size: cover;
      width: 148px;
      height: 52px;
      display: block;
      overflow: hidden;
    @media (max-width 425px)
      top: 20px;
      right: 20px;
      &:after
        width: 124px;
        height: 44px;
        background-size: contain;
        background-repeat: no-repeat;

    &__marquee
        position: absolute;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;

        font-size: 28px
        top: 4px;
        right: 3px;
        max-width: calc(100% - 5px);
        @media (max-width 425px)
          top: 2px;
          right: 3px;
          width: 118px;
          font-size: 22px
        & span
            margin 0 50px
            line-height 28px;
    &__inner
      flex-shrink: 0;
      display: flex;
      align-items: center;
    &__track
      backface-visibility: hidden;
      transform-style: preserve-3d;
      animation: special-uralsib-tamagotchi-ticker 75s linear infinite;
      display: flex;
    &__track > div
      line-height: 28px;
      will-change: transform;
      flex-shrink: 0;
      padding-right: 60px;
</style>
