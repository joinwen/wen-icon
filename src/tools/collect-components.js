const svgo = require("svgo");
const cheerio = require("cheerio");
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
process();

function process() {
  dataJson.forEach(svg => {
    processSvg(svg);
  })
}


async function processSvg(svg) {
  let content = fs.readFileSync(path.resolve(__dirname, `../assets/svg/${svg.origin}`));
  let { data } = await svgo.optimize(content);
  rewriteSvg(svg, content);
}

function rewriteSvg(svg, content) {
  let svgQuery = cheerio.load(content),
      svgEle = svgQuery("svg"),
      pathList = svgQuery("svg path"),
      len = pathList.length;
  if(len === 1) {
    let strokeVal = pathList.attr("stroke");
    pathList.removeAttr("stroke");
    svgEle.attr("stroke", strokeVal);
  } else {
    let a = [];
    for(let i = 0; i < len; i++) {
      a.push(pathList.eq(i).attr("stroke"));
    }
    if(new Set(a).size === 1) {
      svgEle.attr("stroke",pathList.eq(0).attr("stroke"));
      for(let i = 0; i < len; i++) {
        pathList.eq(i).removeAttr("stroke");
      }
    }
  }
  content = svgQuery("body").html();
  fs.writeFileSync(path.resolve(__dirname, `../assets/svg/${svg.origin}`), content);
}
