import { ProxyState } from "../AppState.js";
import { Multiple } from "../Models/Multiple.js";

class MultiplesServices {

  async getMultiple() {
    const response = await axios.get('https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple')
    console.log("multiple", response.data.results);
    let multiples = response.data.results.map(d => new Multiple(d))
    ProxyState.multiples = multiples
  }
}

export const multiplesServices = new MultiplesServices()