<template>
  <div class="message" :style="generateTypeStyle()">
    {{ text }}
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      text: "提示",
      type: "success",
      map: {
        success: ["#e1f3d8", "#67c23a"],
        danger: ["#fde2e2", "#f56c6c"],
        info: ["#e9e9eb", "#909399"],
        warning: ["#faecd8", "#e6a23c"],
      }
    }
  },
  methods: {
    generateTypeStyle() {
      return {
        backgroundColor: this.map[this.type][0],
        boxShadow: `0 0 0 1px ${this.map[this.type][0]}`,
        color: this.map[this.type][1]
      }
    }
  }
}
</script>
<style lang="less">
.message {
  position: fixed;
  top: 5%;
  left: 50%;
  color: #fff;
  min-width: 180px;
  text-align: center;
  transform: translateX(-50%);
  font: 400 12px/16px "微软雅黑";
  padding: 0.5em 1em;
  border-radius: 2px;
}
</style>
