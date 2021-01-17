<template>
    <div class="special-uralsib-tamagotchi-termometr" :class="this.moodState">
        <div class="special-uralsib-tamagotchi-termometr__face"></div>
        <div class="special-uralsib-tamagotchi-termometr__body"></div>
    </div>
</template>

<script>


export default {
  name: 'Termometr',
  components: {

  },
  data() {
    return {

    };
  },
  props: {
    moodState: {
      type: String,
      default: 'badState',
    },
    colorState: {
      type: String,
    },
  },
  mounted() {

  },
  methods: {
    isSetColor() {

    },
  },

};
</script>

<style lang="stylus">
.special-uralsib-tamagotchi-termometr
    &.veryBadState
        & > .special-uralsib-tamagotchi-termometr__face
            background-image url('https://leonardo2.osnova.io/13a5b738-9171-536a-86b2-901e6db0d546/')
        & > .special-uralsib-tamagotchi-termometr__body
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 88'%3E%3Cpath fill='%23000' d='M4.57031 70.8188V2.4944H6.6726v68.3244z'/%3E%3Cpath fill='%23000' d='M2.46875 72.9204v-2.10255H4.5713v2.10255zM19.2871 72.9204v-2.10255h2.10255v2.10255zM2.46875 85.5342v-2.10255H4.5713v2.10255zM19.2871 85.5342v-2.10255h2.10255v2.10255zM4.57031 87.6372v-2.10229h14.716v2.10229zM.366211 83.4326V72.9212h2.10229v10.5114z'/%3E%3Cpath fill='%23000' d='M21.3887 83.4326V72.9212h2.10229v10.5114zM17.1846 70.8188V2.4944h2.10229v68.3244zM27.6963 42.437h3.15383v3.15343H27.6963zM30.8486 2.49561h6.30765v7.35893H30.8486z'/%3E%3Cpath fill='%23000' d='M34.0029.39209h3.15343v11.5626H34.0029zM27.6963 55.0513h3.15383v3.15383H27.6963zM27.6963 29.8252h3.15383v3.15383H27.6963zM27.6963 17.2109h3.15383v3.15383H27.6963zM27.6963 67.6655h3.15383v3.15383H27.6963zM27.6963 80.2793h3.15383v3.15383H27.6963zM27.6963 4.59668h3.15383v3.15383H27.6963z'/%3E%3Cpath fill='%23FE2D2D' fill-rule='evenodd' d='M8.77588 4.59668h6.30682V72.9206h2.1024v2.1003h2.1024v6.3077h-2.1024v2.1034H6.67364v-2.1034H4.57129v-6.3077h2.10235v-2.1003h2.10224V4.59668z' clip-rule='evenodd'/%3E%3Cpath fill='%23000' d='M6.67383.39209h10.5114v2.10229H6.67383z'/%3E%3C/svg%3E");
    &.slightlyBadState
        & > .special-uralsib-tamagotchi-termometr__face
            background-image url('https://leonardo2.osnova.io/856d4390-79c0-5214-995a-1e5fe7db5ed7/')
        & > .special-uralsib-tamagotchi-termometr__body
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 88'%3E%3Cpath fill='%23000' d='M4.54297 70.8188V2.4944h2.10229v68.3244z'/%3E%3Cpath fill='%23000' d='M2.44141 72.9204v-2.10255h2.10255v2.10255zM19.2598 72.9204v-2.10255h2.10255v2.10255zM2.44141 85.5342v-2.10255h2.10255v2.10255zM19.2598 85.5342v-2.10255h2.10255v2.10255zM4.54297 87.6372v-2.10229h14.716v2.10229zM.338867 83.4326V72.9212h2.10229v10.5114z'/%3E%3Cpath fill='%23000' d='M21.3613 83.4326V72.9212h2.10229v10.5114zM17.1572 70.8188V2.4944h2.10229v68.3244zM27.6689 42.437h3.15383v3.15343H27.6689zM30.8213 15.1104h6.30765v7.35893H30.8213z'/%3E%3Cpath fill='%23000' d='M33.9756 13.0068h3.15343v11.5626H33.9756zM27.6689 55.0513h3.15383v3.15383H27.6689zM27.6689 29.8252h3.15383v3.15383H27.6689zM27.6689 17.2109h3.15383v3.15383H27.6689zM27.6689 67.6655h3.15383v3.15383H27.6689zM27.6689 80.2793h3.15383v3.15383H27.6689zM27.6689 4.59668h3.15383v3.15383H27.6689z'/%3E%3Cpath fill='%23FE602D' fill-rule='evenodd' d='M8.74902 17.2109h6.30688v55.7102h2.1018v2.1003h2.1024v6.3076h-2.1024v2.1035H6.6463V81.329H4.54395v-6.3076H6.6463v-2.1003h2.10272V17.2109z' clip-rule='evenodd'/%3E%3Cpath fill='%23000' d='M6.64648.39209h10.5114v2.10229H6.64648z'/%3E%3C/svg%3E");
    &.badState
        & > .special-uralsib-tamagotchi-termometr__face
            background-image url('https://leonardo2.osnova.io/e8bebdd4-faa9-556a-8420-c768b41ecb42/')
        & > .special-uralsib-tamagotchi-termometr__body
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 88'%3E%3Cpath fill='%23000' d='M5.07129 70.8188V2.4944h2.10229v68.3244z'/%3E%3Cpath fill='%23000' d='M2.96973 72.9204v-2.10255h2.10255v2.10255zM19.7881 72.9204v-2.10255h2.10255v2.10255zM2.96973 85.5342v-2.10255h2.10255v2.10255zM19.7881 85.5342v-2.10255h2.10255v2.10255zM5.07129 87.6372v-2.10229h14.716v2.10229zM.867188 83.4326V72.9212h2.10229v10.5114z'/%3E%3Cpath fill='%23000' d='M21.8896 83.4326V72.9212h2.10229v10.5114zM17.6855 70.8188V2.4944h2.10229v68.3244zM28.1973 42.437h3.15383v3.15343H28.1973zM31.3496 27.7241h6.30765v7.35893H31.3496z'/%3E%3Cpath fill='%23000' d='M34.5039 25.6206h3.15343v11.5626H34.5039zM28.1973 55.0513h3.15383v3.15383H28.1973zM28.1973 29.8252h3.15383v3.15383H28.1973zM28.1973 17.2109h3.15383v3.15383H28.1973zM28.1973 67.6655h3.15383v3.15383H28.1973zM28.1973 80.2793h3.15383v3.15383H28.1973zM28.1973 4.59668h3.15383v3.15383H28.1973z'/%3E%3Cpath fill='%23FE922D' fill-rule='evenodd' d='M9.27734 29.8252h6.30686v45.098h2.1021v.098h2.1022v6.3077h-2.1022v2.1035H7.1748l.00002-1.7026H5.07227v-5.1062h2.10255l-.00002-1.7004h2.10254v-45.098z' clip-rule='evenodd'/%3E%3Cpath fill='%23000' d='M7.1748.39209h10.5114v2.10229H7.1748z'/%3E%3C/svg%3E");

    &.neitralState
        & > .special-uralsib-tamagotchi-termometr__face
            background-image url('https://leonardo2.osnova.io/1f956c64-ca05-5f1c-93d6-63747b6310a6/')
        & > .special-uralsib-tamagotchi-termometr__body
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 88'%3E%3Cpath fill='%23000' d='M4.95312 70.8188V2.4944h2.10229v68.3244z'/%3E%3Cpath fill='%23000' d='M2.85156 72.9204v-2.10255h2.10255v2.10255zM19.6699 72.9204v-2.10255h2.10255v2.10255zM2.85156 85.5342v-2.10255h2.10255v2.10255zM19.6699 85.5342v-2.10255h2.10255v2.10255zM4.95312 87.6372v-2.10229h14.716v2.10229zM.749023 83.4326V72.9212h2.10229v10.5114z'/%3E%3Cpath fill='%23000' d='M21.7715 83.4326V72.9212h2.10229v10.5114zM17.5674 70.8188V2.4944h2.10229v68.3244zM28.0791 42.437h9.46031v3.15343H28.0791z'/%3E%3Cpath fill='%23000' d='M31.2314 40.3364h6.30765v7.35893H31.2314z'/%3E%3Cpath fill='%23000' d='M34.3857 38.2329h3.15343v11.5626H34.3857zM28.0791 55.0513h3.15383v3.15383H28.0791zM28.0791 29.8252h3.15383v3.15383H28.0791zM28.0791 17.2109h3.15383v3.15383H28.0791zM28.0791 67.6655h3.15383v3.15383H28.0791zM28.0791 80.2793h3.15383v3.15383H28.0791zM28.0791 4.59668h3.15383v3.15383H28.0791z'/%3E%3Cpath fill='%23FED02D' fill-rule='evenodd' d='M9.15881 43.4878h6.30689v29.4329h2.1022v2.1004h2.1024v6.3076h-2.1024v2.1035H7.05645v-2.1035H4.9541v-6.3076h2.10235v-2.1004h2.10236V43.4878z' clip-rule='evenodd'/%3E%3Cpath fill='%23000' d='M7.05664.39209h10.5114v2.10229H7.05664z'/%3E%3C/svg%3E");
    &.slightlyGoodState
        & > .special-uralsib-tamagotchi-termometr__face
            background-image url('https://leonardo2.osnova.io/a4101726-e0a9-58aa-bcd9-a6859f7798f3/')
        & > .special-uralsib-tamagotchi-termometr__body
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 88'%3E%3Cpath fill='%23000' d='M4.76074 70.8188V2.4944h2.10229v68.3244z'/%3E%3Cpath fill='%23000' d='M2.65918 72.9204v-2.10255h2.10255v2.10255zM19.4775 72.9204v-2.10255h2.10255v2.10255zM2.65918 85.5342v-2.10255h2.10255v2.10255zM19.4775 85.5342v-2.10255h2.10255v2.10255zM4.76074 87.6372v-2.10229h14.716v2.10229zM.556641 83.4326V72.9212h2.10229v10.5114z'/%3E%3Cpath fill='%23000' d='M21.5791 83.4326V72.9212h2.10229v10.5114zM17.375 70.8188V2.4944h2.10229v68.3244zM27.8867 42.437h3.15383v3.15343H27.8867zM31.0391 52.9502h6.30765v7.35893H31.0391z'/%3E%3Cpath fill='%23000' d='M34.1934 50.8467h3.15343v11.5626H34.1934zM27.8867 55.0513h3.15383v3.15383H27.8867zM27.8867 29.8252h3.15383v3.15383H27.8867zM27.8867 17.2109h3.15383v3.15383H27.8867zM27.8867 67.6655h3.15383v3.15383H27.8867zM27.8867 80.2793h3.15383v3.15383H27.8867zM27.8867 4.59668h3.15383v3.15383H27.8867z'/%3E%3Cpath fill='%23E4DC14' fill-rule='evenodd' d='M8.9668 55.0513h6.3069v17.8694h2.1018v2.1004h2.1024v6.3076h-2.1024v2.1035H6.86407v-2.1035H4.76172v-6.3076h2.10235v-2.1004H8.9668V55.0513z' clip-rule='evenodd'/%3E%3Cpath fill='%23000' d='M6.86426.39209h10.5114v2.10229H6.86426z'/%3E%3C/svg%3E");
    &.goodState
        & > .special-uralsib-tamagotchi-termometr__face
            background-image url('https://leonardo2.osnova.io/350f53d9-02c5-5019-9482-5121e814621d/')
        & > .special-uralsib-tamagotchi-termometr__body
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 88'%3E%3Cpath fill='%23000' d='M4.54102 70.8188V2.4944h2.10229v68.3244z'/%3E%3Cpath fill='%23000' d='M2.43945 72.9204v-2.10255H4.542v2.10255zM19.2578 72.9204v-2.10255h2.10255v2.10255zM2.43945 85.5342v-2.10255H4.542v2.10255zM19.2578 85.5342v-2.10255h2.10255v2.10255zM4.54102 87.6372v-2.10229h14.716v2.10229zM.336914 83.4326V72.9212h2.10229v10.5114z'/%3E%3Cpath fill='%23000' d='M21.3594 83.4326V72.9212h2.10229v10.5114zM17.1553 70.8188V2.4944h2.10229v68.3244zM27.667 42.437h3.15234v3.15343H27.667zM30.8193 65.563h6.30765v7.35893H30.8193z'/%3E%3Cpath fill='%23000' d='M33.9736 63.4609h3.15343v11.5626H33.9736zM27.667 55.0513h3.15383v3.15383H27.667zM27.667 29.8252h3.15383v3.15383H27.667zM27.667 17.2109h3.15383v3.15383H27.667zM27.667 67.6655h3.15383v3.15383H27.667zM27.667 80.2793h3.15383v3.15383H27.667zM27.667 4.59668h3.15383v3.15383H27.667z'/%3E%3Cpath fill='%23C7E414' fill-rule='evenodd' d='M8.74707 67.6655h6.30683v5.2553h2.1019v2.1003h2.1024v6.3077h-2.1024v2.1034H6.64434v-2.1034H4.54199v-6.3077h2.10235v-2.1003h2.10273v-5.2553z' clip-rule='evenodd'/%3E%3Cpath fill='%23000' d='M6.64453.39209h10.5114v2.10229H6.64453z'/%3E%3C/svg%3E");
    &.idealState
        & > .special-uralsib-tamagotchi-termometr__face
            background-image url('https://leonardo2.osnova.io/c62393c1-99be-5ae5-a5b2-6eef64c1b783/')
        & > .special-uralsib-tamagotchi-termometr__body
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 88'%3E%3Cpath fill='%23000' d='M4.96094 70.8188V2.4944h2.10229v68.3244z'/%3E%3Cpath fill='%23000' d='M2.85938 72.9204v-2.10255h2.10255v2.10255zM19.6777 72.9204v-2.10255h2.10255v2.10255zM2.85938 85.5342v-2.10255h2.10255v2.10255zM19.6777 85.5342v-2.10255h2.10255v2.10255zM4.96094 87.6372v-2.10229h14.716v2.10229zM.756836 83.4326V72.9212h2.10229v10.5114z'/%3E%3Cpath fill='%23000' d='M21.7793 83.4326V72.9212h2.10229v10.5114zM17.5752 70.8188V2.4944h2.10229v68.3244zM28.0869 42.437h3.15383v3.15343H28.0869zM31.2393 78.1782h6.30765v7.35893H31.2393z'/%3E%3Cpath fill='%23000' d='M34.3936 76.0747h3.15343v11.5626H34.3936zM28.0869 55.0513h3.15383v3.15383H28.0869zM28.0869 29.8252h3.15383v3.15383H28.0869zM28.0869 17.2109h3.15383v3.15383H28.0869zM28.0869 67.6655h3.15383v3.15383H28.0869zM28.0869 80.2793h3.15383v3.15383H28.0869zM28.0869 4.59668h3.15383v3.15383H28.0869z'/%3E%3Cpath fill='%234AE414' fill-rule='evenodd' d='M4.96191 81.3286v-2.8984H19.6781v2.8984h-2.1022v2.1037H7.06445v-2.1037H4.96191z' clip-rule='evenodd'/%3E%3Cpath fill='%23000' d='M7.06445.39209h10.5114v2.10229H7.06445z'/%3E%3C/svg%3E");

    &__face
        background-image url("https://leonardo2.osnova.io/21adbe40-b380-5b63-9d23-800f6b9b5a9d/")
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 36px;
        height: 33px;
        z-index: 1;
        position: absolute;
        left: 14px;
        top: 14px;
        @media (max-width 624px)
            width: 27px;
            height: 25px;
    &__body
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 36px;
        height: 87px;
        z-index: 1;
        position: absolute;
        left: 21px;
        top: 58px;
        @media (max-width 624px)
            width: 28px;
            height: 66px;
            top: 42px;
            left: 19px;

</style>
