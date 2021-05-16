import dataJson from "../data.json";
class SvgFactory {
  constructor(list) {
    this.list = list;
    this.map = {};
    this.comps = {};
  };
  generateMap() {
    this.list.forEach(svg => {
      let key = svg.name;
      this.map[key] = () => import(`../assets/svg/${svg.origin}?wen-icon`);
    })
    return this.map;
  };
  generateComponents() {
    this.list.forEach(svg => {
      let key = svg.componentName;
      this.comps[key] = () => import(`../assets/svg/${svg.origin}?wen-icon`);
    })
    return this.comps;
  };
}
const svgFactory = new SvgFactory(dataJson);
export default svgFactory;
