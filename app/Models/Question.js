import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.id = generateId()
    this.question = data.question
    this.answer = data.correct_answer
    this.wronganswer = data.incorrect_answers
  }

  // First, we need to find the question in our Appstate
  // Compare our "Guess" to see if it matches the answer

  get Template() {
    return `
      <li>${this.question}</li>
      <button onclick="app.questionsController.answer('${this.id}', 'True')">True</button>
      <button onclick="app.questionsController.answer('${this.id}', 'False')">False</button>
      
      `
  }

  // get Answers() {
  //   const answer = [this.answer, ...this.wronganswer]
  //   const length = answer.length

  // }
}
