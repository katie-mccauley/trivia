import { generateId } from "../Utils/generateId.js"

export class Multiple {
  constructor(data) {
    this.id = generateId()
    this.question = data.question
    this.answer = data.correct_answer
    this.wrong = data.inncorrect_answers
  }

  get Template() {
    return `
      <li>${this.question}</li>
      <button>${this.answer}</button>
      `
  }

  // get Wrong() {
  //   let answer = [this.answer, ...this.wrong]
  //   return console.log(answer);
  // }
}