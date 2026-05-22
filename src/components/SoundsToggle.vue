<script setup lang="ts">
import { soundsEnabled, howlerUnlocked } from "../features/sounds/composables/useHowler";
import ButtonRound from "./ButtonRound.vue";
import Volume from "./icons/Volume.vue";
import { t } from "../i18n/utils/translate";
import { useAgent } from "../composables/useAgent";

const { isTouch } = useAgent();

const toggleSounds = () => {
  soundsEnabled.value = !soundsEnabled.value;
};
</script>

<template>
  <ButtonRound
    v-if="!isTouch"
    variant="theme"
    class="music-toggle children-unclickable"
    @click="toggleSounds"
    :aria-label="soundsEnabled && howlerUnlocked ? t('disable-sounds') : t('enable-sounds')"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <Volume :active="soundsEnabled && howlerUnlocked" style="color: white" />
  </ButtonRound>
</template>

<style scoped lang="scss">
.music-toggle {
  position: relative;
}
</style>
