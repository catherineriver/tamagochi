<template>
    <div class="special-uralsib-tamagotchi-result" ref="uralsibResult">
      <div class="special-uralsib-tamagotchi-result__desc">
          {{this.moodText}}
          <span v-if="this.mood === 'goodState'
            || this.mood === 'slightlyGoodState'
            || this.mood ===  'idealState'">
            До ухудшения настроения героя {{this.declineWord(this.clicksToDown, ['остался', 'осталось', 'осталось'])}} <b>{{this.clicksToDown}}</b> {{this.declineWord(this.clicksToDown, ['клик', 'клика', 'кликов'])}}.</span>
          <span v-if="this.mood === 'slightlyBadState'
            || this.mood==='badState'
            || this.mood==='veryBadState'">
            До улучшения настроения героя {{this.declineWord(this.clicksToUp, ['остался', 'осталось', 'осталось'])}} <b>{{this.clicksToUp}}</b> {{this.declineWord(this.clicksToUp, ['клик', 'клика', 'кликов'])}}.</span>
          <span v-if="this.mood === 'neitralState' && this.clicksToUp >= 176">
            Для улучшения настроения героя {{this.declineWord(this.clicksToUp, ['нужен', 'нужно', 'нужно'])}} <b>{{this.clicksToUp}}</b> {{this.declineWord(this.clicksToUp, ['клик', 'клика', 'кликов'])}}.
          </span>
          <span v-if="this.mood === 'neitralState' && this.clicksToDown >= 175">
            Для ухудшения настроения героя {{this.declineWord(this.clicksToDown, ['нужен', 'нужно', 'нужно'])}} <b>{{this.clicksToDown}}</b> {{this.declineWord(this.clicksToDown, ['клик', 'клика', 'кликов'])}}.
          </span>
        </div>
        <Tabs>
            <Tab title="За сегодня">
                <StatisticTab :stats="this.stats.today"/>
            </Tab>
            <Tab title="Всего">
                <StatisticTab :stats="this.stats.all"/>
            </Tab>
        </Tabs>

        <div class="special-uralsib-tamagotchi-result__text">
            <p>Вас не выбить из гармонии даже самыми злыми комментариями, когда счёт обслуживает банк УРАЛСИБ. Его клиенты не тратят нервы на переплаты и скрытые условия — <a href="https://bit.ly/32UXAdw" target="_blank">почитайте</a> о тарифах для открытия счёта. </p>
            <h3>Если кратко, то открытие РКО в УРАЛСИБ это:</h3>
            <ul class="special-uralsib-tamagotchi-result__list">
              <li class="special-uralsib-tamagotchi-result__bullet">0 ₽ обслуживание расчетного счета на целый год с денежными переводами на 150 000 ₽ каждый месяц.</li>
              <li class="special-uralsib-tamagotchi-result__bullet">5 платежей в месяц без комиссии.</li>
              <li class="special-uralsib-tamagotchi-result__bullet">0 ₽ выпуск и обслуживание бизнес-карты на месяц.</li>
              <li class="special-uralsib-tamagotchi-result__bullet">7% кешбэка на все покупки.</li>
            </ul>
          </div>
        <Form />
        <div class="special-uralsib-tamagotchi-result__copyright">ПАО «БАНК УРАЛСИБ». Генеральная лицензия Банка России №30 выдана 10.09.2015 г.</div>


    </div>
</template>

<script>
import * as Analytics from '../lib/analytics';
import data from '../data/data';
import Tabs from './Tabs.vue';
import Tab from './Tab.vue';
import StatisticTab from './StatisticTab.vue';
import Form from './Form.vue';

export default {
  name: 'ResultScreen',
  components: {
    Tabs,
    Tab,
    StatisticTab,
    Form,
  },
  data() {
    return {
      data,
      moodText: data.resultScreen[this.mood],
    };
  },
  props: {
    clicksToDown: {
      type: Number,
    },
    clicksToUp: {
      type: Number,
    },
    stats: {
      type: Object,
    },
    mood: {
      type: String,
    },
  },
  methods: {
    sendAnalitics(value) {
      Analytics.sendEvent('Click', value);
    },
    declineWord(number, words) {
      let result = '';

      if (number % 10 === 1 && number % 100 !== 11) {
        result += words[0];
      } else if ([2, 3, 4].indexOf(number % 10) > -1 && [12, 13, 14].indexOf(number % 100) < 0) {
        result += words[1];
      } else {
        result += words[2];
      }

      return result;
    },
  },

  beforeUpdate() {
    this.moodText = data.resultScreen[this.mood];
  },
  mounted() {
    setTimeout(() => {
      const scrollTo = (to, duration) => {
        const start = window.pageYOffset;
        const change = to - start;
        let currentTime = 0;
        const increment = 20;

        const animateScroll = () => {
          currentTime += increment;
          const val = Math.easeInOutQuad(currentTime, start, change, duration);
          window.scroll(0, val);
          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };
        animateScroll();
      };

      Math.easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t -= 1;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const scrollToElement = (ref) => {
        scrollTo(ref.getBoundingClientRect().top + window.scrollY - 100, 500);
      };

      scrollToElement(this.$refs.uralsibResult);
    });
  },
};
</script>

<style lang="stylus">
.special-uralsib-tamagotchi-result
    margin-top: 24px;
    margin-bottom: 34px;
    &__desc
      padding-bottom: 30px;

    &__title
        font-size: 16px;
        line-height: 18px;
    &__text
        font-weight: normal;
        font-size: 16px;
        line-height: 1.6em;

        h3
            font-weight: bold;
            font-size: 18px;
            line-height: 19px;
            margin: 20px 0 10px;
        a
          text-decoration: underline
        @media (max-width 624px)
          font-size: 16px;
          line-height: 25px;
          h3
            font-size: 16px;
            line-height: 25px;

    &__list
        padding: 0;
        margin: 0;
        max-width: 625px;
    &__bullet
        list-style: none;
        position: relative;
        padding: 0 0 0 30px;
        margin-bottom: 15px;
        &::before
            content: "";
            position: absolute;
            left: 0;
            top: 5px;
            width: 15px;
            height: 15px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath fill='%23FBC6D3' d='M.375977 6.74756h3v3h-3zM3.37598 3.74756h3v3h-3zM12.376 12.7476h-3v-3h3zM6.37598.747559h3v3h-3zM9.37598 15.7476h-3v-3h3zM9.37598 3.74756h3v3h-3zM6.37598 12.7476h-3v-3h3zM12.376 6.74756h3v3h-3z'/%3E%3C/svg%3E");
        @media (max-width 624px)
          padding: 0 0 0 19px;
          &::before
            width: 11px;
            height: 11px;

    &__copyright
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #F3BECB;

        margin: 20px auto;
        @media (max-width 624px)
          font-size: 8px;
          line-height: 9px;
          margin: 20px auto;


</style>
