import { ProxyState } from "../AppState.js";
import { multiplesServices } from "../Services/MultiplesServices.js";


function _drawMulti() {
  let template = ""
  ProxyState.multiples.forEach(m => template += m.Template)
  document.getElementById("multi").innerHTML = template
}
export class MultiplesController {
  constructor() {
    this.getMultiple()
    ProxyState.on("multiples", _drawMulti)
  }

  async getMultiple() {
    try {
      console.log("this is the multiple")
      await multiplesServices.getMultiple()
    } catch (error) {
      console.log("there is an error");
      console.error(error);
    }
  }


}