import { generateId } from "../Utils/generateId.js"

export class Multiple {
  constructor(data) {
    this.id = generateId()
    this.question = data.question
    this.answer = data.correct_answer
  }

  get Template() {
    return `
      <li>${this.question}</li>
      
      `
  }
}