<template>
  <component class="icon" :is="map[name]" :width="width" :height="height" :fill="fill"></component>
</template>
<script>
import svgFactory from "../../tools/svg";
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      default: "academic-cap",
    },
    width: {
      type: [String, Number],
      default: "24px"
    },
    height: {
      type: [String, Number],
      default: "24px"
    },
    fill: {
      type: String,
      default: "white"
    },
    stroke: {
      type: String,
      default: "black"
    }
  },
  data() {
    return {
      map: svgFactory.generateMap()
    };
  },
};
</script>
<style scoped lang="css">
.icon > path {
  stroke: cyan;
}
</style>
