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
export {
  hyphen2Camel,
    filePrefix,
    fileSuffix
}
