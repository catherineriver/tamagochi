<template>
  <div class="special-uralsib-tamagotchi-block">
      <div class="special-uralsib-tamagotchi-block__value">
        <div v-for="(item, index) in formattedValue" :key="index">
          <animated-number :value="item" :duration="400" :formatValue="format"></animated-number>
        </div>
      </div>
      <div class="special-uralsib-tamagotchi-block__label">
        {{this.label}}
      </div>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue';

export default {
  name: 'ResultBlock',
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      formattedValue: [],
    };
  },
  props: {
    value: {
      type: Number,
    },
    label: {
      type: String,
      default: 'Текста нет',
    },
  },
  watch: {
    value(newVal) { // watch it
      this.formatToString(newVal);
    },
  },
  mounted() {
    this.formatToString(this.value);
  },
  methods: {
    formatToString(value) { // фикс для того, чтобы задать ширину каждому числу
      const fixedValue = value.toFixed(0);
      const formatedToString = fixedValue.toString(); // превращаем число в строку
      this.formattedValue = formatedToString.split(''); // разделяем строку на элементы, чтобы каждый символ обернулся в div и можно было задать ширину
      return `${this.formattedValue}`;
    },

    format(value) {
      const fixedValue = value.toFixed(0);
      return `${fixedValue}`;
    },
  },
};
</script>

<style lang="stylus">

.special-uralsib-tamagotchi-block
  position relative
  display flex
  flex-direction row
  font-family: 'Thintel';
  justify-content: space-between;
  align-items: center;
  max-width: 280px;
  width: 50%;
  padding 0 30px
  margin-bottom 10px
  height: 64px;
  z-index: 2;
  &:nth-child(2)
    padding 0 20px
    & > .special-uralsib-tamagotchi-block__label:after
      left: 20px;
  @media (max-width 624px)
    width: 100%;
  &:after
    content ""
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 280 64'%3E%3Cpath fill='%23fff' d='M2 6h276v52H2zM4 4h272v2H4zM4 60h272v-2H4zM6 2h268v2H6zM6 62h268v-2H6z'/%3E%3Cpath fill='%23FBC6D3' d='M6 0h268v2H6zM2 6v52H0V6zM6 64h268v-2H6zM6 2v2H4V2zM278 6l-9e-8-2-2 9e-8 9e-8 2zM2 58l9e-8 2 2-9e-8-9e-8-2zM4 4v2H2V4zM276 4l-9e-8-2-2 9e-8 9e-8 2zM4 60l9e-8 2 2-9e-8-9e-8-2zM274 62v-2h2v2zM276 60v-2h2v2zM278 58V6h2v52z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  &__label
      font-weight: 500;
      font-size: 2.5vw;
      width: 100%;

  &__value
    position relative
    font-family: 'Digital'
    color: #E25A76;
    z-index: 1;

    font-size: 45px;
    line-height: 25px;
    margin-right 16px;
    text-align: right;
    width: 368px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    & div
      width: 1ch;
    &:after
      font-family: 'Digital'
      content: '000000'
      color #FFECF0;
      font-size: 45px;
      position: absolute;
      left: 0;
      top: 0;
      width 100%;
      z-index -1
  &__label
    font-size: 28px;
    line-height: 66.05%;
    @media (max-width 624px)
      font-size: 20px;
    @media (max-width 325px)
      font-size: 25px;

</style>
