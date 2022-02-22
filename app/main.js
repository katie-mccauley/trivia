import { MultiplesController } from "./Controllers/MultiplesController.js";
import { QuestionsController } from "./Controllers/QuestionsController.js";

class App {
  questionsController = new QuestionsController()

  multiplesController = new MultiplesController()
}

window["app"] = new App();
