<script>
import appHeader from "./components/appHeader.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    appHeader,
  },
};
</script>

<template>
  <appHeader />
</template>

<style lang="scss" scoped></style>
