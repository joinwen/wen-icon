<template>
  <div id="app">
    <Icon v-for="(name,index) in names" :name="name" :key="index" stroke="yellow" />
  </div>
</template>
<script>
import Icon from "./components/icon/Icon";
import dataJson from "./data.json";
export default {
  name: "App",
  computed: {
    names() {
      return dataJson.map(item => item.name)
    }
  },
  components: { Icon },
};
</script>
