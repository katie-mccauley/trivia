import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { Pop } from "../Utils/Pop.js"

class QuestionsService {
  answer(id, guess) {
    const response = ProxyState.questions.find(q => q.id === id)
    if (response.answer === guess) {
      Pop.toast("correct", "success")
    } else {
      Pop.toast("inncorrect", "error")
    }

  }
  async getQuestion() {
    const response = await axios.get('https://opentdb.com/api.php?amount=5&category=27&difficulty=medium&type=boolean')
    console.log("response data", response.data.results)
    let questions = response.data.results.map(d => new Question(d))
    ProxyState.questions = questions
    console.log(ProxyState.questions);
  }
  constructor() {
    console.log("this is the questions service")
  }


}

export const questionsService = new QuestionsService()