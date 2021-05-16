<template>
  <div id="app">
    <div class="title">
      <p>icon list</p>
    </div>
    <div class="icon-container">
      <div class="icon" v-for="(name,index) in names" :key="index" @click="handleClick(name)">
        <wen-icon width="80px" height="80px" stroke="#22a1ff" :name="name" />
        <span>{{ name }}</span>
        <div class="mask"></div>
      </div>
    </div>
  </div>
</template>
<script>
import WenIcon from "./components/icon/Icon";
import dataJson from "./data.json";
export default {
  name: "App",
  computed: {
    names() {
      return dataJson.map(item => item.name)
    }
  },
  components: { WenIcon },
  methods: {
    handleClick(name) {
      const input = document.createElement("input")
      input.setAttribute("readonly", "readonly")
      input.setAttribute("value", `<wen-icon name="${name}" />`)
      document.body.appendChild(input)
      input.setSelectionRange(0, 9999)
      input.select()
      if (document.execCommand("copy")) {
        document.execCommand("copy")
      }
      document.body.removeChild(input)
      this.$message({
        text: `复制成功：<wen-icon name="${name}" />`
      })
    }
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.title {
  text-align: center;
  height: 64px;
  line-height: 64px;
  font-size: 24px;
}
.icon-container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  .icon {
    width: 120px;
    height: 120px;
    margin: 0.5em;
    position: relative;
    box-shadow: 0 0 8px 1px rgba(0,0,0, .1);
    text-align: center;
    border-radius: 4px;

    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 4px;
    }
    span {
      display: block;
      color: #333;
      font-weight: 400;
      font-size: 14px;
    }
  }
  .icon:hover {
    .mask {
      background-color: rgba(0,0,0,.8);
      cursor: pointer;
    }
  }
}
</style>
