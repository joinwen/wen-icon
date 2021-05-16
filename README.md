## wen-icon

### preview
```
https://joinwen.github.io/wen-icon/
```

### install

```
npm install wen-icon --save 
```

### config

配置 vue-svg-icon-loader

```
1. webpack 配置
npm install vue-svg-icon-loader -save-dev

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        resourceQuery: /wen-icon/,
        use: "vue-svg-icon-loader"
      }
    ]
  }
}
  
2. vue-cli 配置
npm install vue-svg-icon-loader --save-dev

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-icon-loader")
    .resourceQuery(/wen-icon/)
    .loader("vue-svg-icon-loader");
  }
}
```

### usage

- #### 1. basic
```
// 1. 引入
import WenIcon from "wen-icon";

// 2. 局部注册组件
components: { WenIcon }

// 3. template 中使用
<template>
  <wen-icon name="annotation">
</template>
```

- #### 2. width(default 24px),height(default 24px)
```
<template>
  <wen-icon name="annotation" width="48px" height="48px" />
</template>
```

- #### 3. fill(default white)
```
<template>
  <wen-icon name="annotation" fill="red" />
</template>
```

- #### 4. stroke(default black)
```
<template>
  <wen-icon name="annotation" stroke="red" />
</template>
```
