<template>
  <div>
    <component :is="map[name]"></component>
    <Annotation />
  </div>
</template>
<script>
import svgFactory from "../../tools/svg";
export default {
  name: "Icon",
  components: svgFactory.generateComponents(),
  props: {
    name: {
      type: String,
      default: "academic-cap",
    },
  },
  data() {
    return {
      map: svgFactory.generateMap()
    };
  },
};
</script>
<style scoped lang="css"></style>
