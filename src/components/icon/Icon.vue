<template>
  <h2 class="h2">
    {{ name }}
    <ChartBar />
    <Bird />
  </h2>
</template>
<script>
import ChartBar from "@/assets/svg/chart-bar.svg";
import Bird from "@/assets/svg/Bird.svg";

export default {
  name: "Icon",
  components: { ChartBar, Bird },
  data() {
    return {
      name: "hello world",
    };
  },
};
</script>
<style scoped lang="css">
.h2 {
  color: red;
}
</style>
