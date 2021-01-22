<template>
  <div>
    <h1>
      below is size of screen, it is reactively, try changed the size browser
      screen
    </h1>
    <h2>{{ windowWidth }}</h2>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      windowWidth: window.innerWidth,
    };
  },
  created() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>

<style></style>
