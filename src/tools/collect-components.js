/**
 * abc-def 转成 AbcDef
 */
function hyphen2Camel(str) {
  return str.split("-").map(token => [token.slice(0, 1).toUpperCase(), token.slice(1)]).flat().join("");
}

/**
 * abc.def.jpg 获取abc.def
 */
function filePrefix(str) {
  return str.slice(0, str.lastIndexOf("." + fileSuffix(str)));
}

/**
 * abc.def.jpg 获取 jpg
 */
function fileSuffix(str) {
  return /\.(\w+)$/.exec(str)[1];
}
const path = require("path"),
    fs = require("fs"),
    svgDir = path.resolve(__dirname,"../assets/svg"),
    destFile = path.resolve(__dirname, "../data.json"),
    svgFileNameList = fs.readdirSync(svgDir),
    dataJson = [];
svgFileNameList.forEach(svg => {
  let prefix = filePrefix(svg),
      camelPrefix = hyphen2Camel(prefix),
      suffix = fileSuffix(svg);
  dataJson.push({
    origin: svg,
    name: prefix,
    componentName: camelPrefix,
    suffix,
  })
})
fs.writeFileSync(destFile, JSON.stringify(dataJson,null,2));
