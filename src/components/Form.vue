<template>
    <div class="special-uralsib-tamagotchi-form">
        <div class="special-uralsib-tamagotchi-form__header">ОСТАВИТЬ ЗАЯВКУ</div>
        <iframe
            ref="iframeContent"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowfullscreen="true"
            frameborder="0"
            padding="0"
            scrolling="no"
            width="100%" height="320px"
            :src="this.form">
        </iframe>
    </div>
</template>

<script>


export default {
  name: 'Form',
  components: {

  },
  data() {
    return {
      form: 'https://www.uralsib.ru/iframe_form/vcru',
    };
  },
  methods: {

  },
};
</script>

<style lang="stylus">
.special-uralsib-tamagotchi-form
    max-width: 570px;
    margin: 0 auto;
    &__header
        font-family: 'Thintel';
        font-weight: 300;
        font-size: 40px;
        line-height: 66%;
        text-align center
        margin-top: 30px
        @media (max-width 624px)
          font-size: 30px;

</style>
