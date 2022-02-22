import { ProxyState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"

function _draw() {
  let template = ""
  ProxyState.questions.forEach(p => template += p.Template)
  document.getElementById("list").innerHTML = template
}
export class QuestionsController {
  constructor() {
    console.log("Hello from the questions controller")
    ProxyState.on("questions", _draw)
    this.getQuestion()

  }

  async getQuestion() {
    try {
      await questionsService.getQuestion()
    } catch (error) {
      console.log("there is an error");
      console.error(error);

    }
  }



  answer(id, guess) {
    questionsService.answer(id, guess)
  }
}