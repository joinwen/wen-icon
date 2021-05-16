<template>
  <div id="app">
    <div class="title">
      <p>wen-icon list</p>
    </div>
    <div class="icon-container">
      <div class="icon" v-for="(name,index) in names" :key="index" @click="handleClick(name)">
        <wen-icon width="80px" height="80px" stroke="#000" :name="name" />
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
  box-sizing: border-box;
}
body {
  background-color: #f6f8fa;
}
.title {
  text-align: center;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: #fff;
  background-color: #22a1ff;
  box-shadow: 0 0 8px 1px rgba(0,0,0,.2);
}

.icon-container {
  width: 650px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    & {
      width: 280px;
    }
  }

  .icon {
    width: 120px;
    margin-top: 0.5em;
    padding: 0.5em;
    position: relative;
    background-color: #fff;
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
      line-height: 1.5;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .icon:hover {
    .mask {
      background-color: rgba(0,0,0,.5);
      cursor: pointer;
    }
  }
}
</style>
